import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import gsap from "gsap";

/* ── Mirror-cube layer thicknesses (sum to 3.0 per axis) ───── */
const THIN   = 0.72;
const MEDIUM = 1.00;
const THICK  = 1.28;
const LAYER_SIZES = [THIN, MEDIUM, THICK];
const GAP = 0.055;

function getLayerCenter(idx: number) {
  const offsets = [0, THIN, THIN + MEDIUM];
  return offsets[idx] + LAYER_SIZES[idx] / 2 - 1.5;
}

/* ── Precompute solved positions ───────────────────────────── */
const solvedPosition: THREE.Vector3[][][] = [];
for (let lx = 0; lx < 3; lx++) {
  solvedPosition[lx] = [];
  for (let ly = 0; ly < 3; ly++) {
    solvedPosition[lx][ly] = [];
    for (let lz = 0; lz < 3; lz++) {
      solvedPosition[lx][ly][lz] = new THREE.Vector3(
        getLayerCenter(lx),
        getLayerCenter(ly),
        getLayerCenter(lz),
      );
    }
  }
}

/* ── Cubie logical data ────────────────────────────────────── */
interface CubieData {
  lx: number; ly: number; lz: number;
  quat: THREE.Quaternion;
  birthLx: number; birthLy: number; birthLz: number;
}

/* ── Shared mutable state – GSAP writes, Three.js reads ────── */
export interface CubeState {
  globalRotX: number;
  globalRotY: number;
  cubeY: number;
  mouseX: number;
  mouseY: number;
  rimLightIntensity: number;
  solved: boolean;
}

export const defaultCubeState = (): CubeState => ({
  globalRotX: 0,
  globalRotY: 0,
  cubeY: -5,
  mouseX: 0,
  mouseY: 0,
  rimLightIntensity: 0.9,
  solved: false,
});

/* ── Scramble & solve (6 moves each, one per card) ─────────── */
type Axis = "x" | "y" | "z";

const SCRAMBLE_6: [Axis, number, number][] = [
  ["y", 2, +1],
  ["x", 2, -1],
  ["z", 2, +1],
  ["y", 0, -1],
  ["x", 0, +1],
  ["z", 0, -1],
];

export interface SolveMove {
  axis: Axis;
  slice: number;
  direction: number;
  cardIndex: number;
}

export const SOLVE_MOVES: SolveMove[] = [
  { axis: "z", slice: 0, direction: +1, cardIndex: 0 },
  { axis: "x", slice: 0, direction: -1, cardIndex: 1 },
  { axis: "y", slice: 0, direction: +1, cardIndex: 2 },
  { axis: "z", slice: 2, direction: -1, cardIndex: 3 },
  { axis: "x", slice: 2, direction: +1, cardIndex: 4 },
  { axis: "y", slice: 2, direction: -1, cardIndex: 5 },
];

/* ── Component props ──────────────────────────────────────── */
export type RotateFaceFn = (
  axis: Axis,
  slice: number,
  direction: number,
  duration?: number,
  ease?: string,
) => Promise<void>;

interface MirrorCubeProps {
  stateRef: React.MutableRefObject<CubeState>;
  rotateFaceRef: React.MutableRefObject<RotateFaceFn | null>;
  fillLightRef: React.MutableRefObject<THREE.PointLight | null>;
  // optional DOM anchor to align the cube underneath (screen element center)
  targetRef?: React.RefObject<HTMLElement | null>;
}

export default function MirrorCube({ stateRef, rotateFaceRef, fillLightRef, targetRef }: MirrorCubeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: THREE.WebGLRenderer;
    let animFrameId = 0;
    const onResizeRef = { current: null as (() => void) | null };

    try {

    const W = canvas.clientWidth || window.innerWidth;
    const H = canvas.clientHeight || window.innerHeight;

    /* ── Renderer ─────────────────────────────────────────── */
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95; // tuned for white background
    renderer.setClearColor(0xffffff, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    /* ── Camera ───────────────────────────────────────────── */
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
    camera.position.set(4.8, 3.8, 5.5);
    camera.lookAt(0, 1, 0.75);

    /* ── Scene ────────────────────────────────────────────── */
    const scene = new THREE.Scene();

    /* ── Procedural environment map ───────────────────────── */
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();

    const makeEnvPlane = (color: number, x: number, y: number, z: number, rotX = 0, rotY = 0) => {
      const geo = new THREE.PlaneGeometry(20, 20);
      const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.rotation.set(rotX, rotY, 0);
      envScene.add(mesh);
    };

    // White-room env with a single lime accent panel
    makeEnvPlane(0xF5F5F5, 0, 0, -10); // back wall
    makeEnvPlane(0xEEEEEE, -10, 0, 0, 0, Math.PI / 2); // left wall
    makeEnvPlane(0xF8F8F8, 10, 0, 0, 0, -Math.PI / 2); // right wall
    makeEnvPlane(0xFFFFFF, 0, 8, 0, Math.PI / 2); // ceiling
    makeEnvPlane(0xE0E0E0, 0, -8, 0, -Math.PI / 2); // floor
    makeEnvPlane(0xC8FF00, -6, 3, -6); // lime accent panel

    const envTexture = pmremGenerator.fromScene(envScene).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    /* ── Lights (tuned for white background) ─────────────────── */
    const ambient = new THREE.AmbientLight(0xffffff, 0.22);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(6, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 30;
    // tight ortho for crisp shadows
    (keyLight.shadow.camera as any).left = -4;
    (keyLight.shadow.camera as any).right = 4;
    (keyLight.shadow.camera as any).top = 4;
    (keyLight.shadow.camera as any).bottom = -4;
    keyLight.shadow.bias = -0.001;
    (keyLight.shadow as any).radius = 3;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xDDDDFF, 0.6);
    fillLight.position.set(-5, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xC8FF00, 0.45);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    // expose fill light to parent ref
    fillLightRef.current = fillLight as any;

    /* ── Ground (receives shadow) ─────────────────────────── */
    const groundGeo = new THREE.PlaneGeometry(20, 20);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.85;
    ground.receiveShadow = true;
    scene.add(ground);

    /* ── Mirror material (shared by all 27 cubies) ──────── */
    // ── Brushed aluminium material (procedural textures)
    function createBrushTexture(size = 512) {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#C8C8C8";
      ctx.fillRect(0, 0, size, size);
      for (let y = 0; y < size; y++) {
        const brightness = 180 + Math.floor(Math.random() * 40 - 20);
        const alpha = 0.08 + Math.random() * 0.12;
        ctx.strokeStyle = `rgba(${brightness},${brightness},${brightness},${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(size, y + 0.5);
        ctx.stroke();
      }
      for (let i = 0; i < size * size * 0.01; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const br = Math.floor(Math.random() * 40 - 20);
        ctx.fillStyle = `rgba(${128 + br},${128 + br},${128 + br},0.06)`;
        ctx.fillRect(x, y, 1, 1);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 1);
      return tex;
    }

    function createRoughnessTexture(size = 128) {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const grad = ctx.createLinearGradient(0, 0, 0, size);
      grad.addColorStop(0, "#505050");
      grad.addColorStop(0.5, "#383838");
      grad.addColorStop(1, "#505050");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1, 1);
      return tex;
    }

    const brushTexture = createBrushTexture(512);
    const roughnessTexture = createRoughnessTexture(128);

    const mirrorMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xD8D8D8),
      metalness: 0.75,
      roughness: 0.38,
      map: brushTexture,
      roughnessMap: roughnessTexture,
      envMapIntensity: 0.55,
    });

    /* ── Cubie logical data (27 items) ──────────────────── */
    const cubieData: CubieData[] = [];
    for (let lx = 0; lx < 3; lx++) {
      for (let ly = 0; ly < 3; ly++) {
        for (let lz = 0; lz < 3; lz++) {
          cubieData.push({
            lx, ly, lz,
            quat: new THREE.Quaternion(),
            birthLx: lx, birthLy: ly, birthLz: lz,
          });
        }
      }
    }

    /* ── Build 27 Three.js meshes ───────────────────────── */
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);
    // Make the cube visually smaller and slightly lowered so it reads as a background object
    cubeGroup.scale.set(0.6, 0.6, 0.6);
    // nudge left to align visually under the centered headline
    cubeGroup.position.set(-0.9, -0.5, 0);
    const cubeMeshes: THREE.Mesh[] = [];

    cubieData.forEach((cd) => {
      const w = LAYER_SIZES[cd.birthLx] - GAP;
      const h = LAYER_SIZES[cd.birthLy] - GAP;
      const d = LAYER_SIZES[cd.birthLz] - GAP;
      // bevel radius calibrated to smallest dimension
      const bevel = 0.022;
      const segs = 3;
      const geo = new RoundedBoxGeometry(w, h, d, segs, bevel);
      const mesh = new THREE.Mesh(geo, mirrorMat);
      mesh.position.copy(solvedPosition[cd.lx][cd.ly][cd.lz]);
      mesh.quaternion.copy(cd.quat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // add dark edge lines to emphasize gaps between cubies
      try {
        const edgesGeo = new THREE.EdgesGeometry(geo, 15);
        const edgesMat = new THREE.LineBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.9 });
        const edgeLines = new THREE.LineSegments(edgesGeo, edgesMat);
        mesh.add(edgeLines);
      } catch (e) {
        // non-fatal: if edges fail, continue without them
      }

      cubeGroup.add(mesh);
      cubeMeshes.push(mesh);
    });

    /* ── Sync meshes from logical data ──────────────────── */
    function syncMeshesToData() {
      cubieData.forEach((cd, i) => {
        cubeMeshes[i].position.copy(solvedPosition[cd.lx][cd.ly][cd.lz]);
        cubeMeshes[i].quaternion.copy(cd.quat);
      });
    }

    /* ── Face rotation (pure-math, zero reparenting) ─────── */
    let rotating = false;

    function rotateFace(
      faceAxis: Axis,
      faceSlice: number,
      direction: number,
      duration = 0.65,
      ease = "power2.inOut",
    ): Promise<void> {
      return new Promise((resolve) => {
        if (rotating) { resolve(); return; }
        rotating = true;

        // 1. Identify affected cubies by their current logical slot
        const affected = cubieData.filter((cd) => {
          if (faceAxis === "x") return cd.lx === faceSlice;
          if (faceAxis === "y") return cd.ly === faceSlice;
          return cd.lz === faceSlice;
        });

        // 2. Snapshot current solved positions & quaternions
        const startPositions = affected.map((cd) =>
          solvedPosition[cd.lx][cd.ly][cd.lz].clone(),
        );
        const startQuats = affected.map((cd) => cd.quat.clone());

        // 3. Rotation axis vector & face center
        const axisVec = new THREE.Vector3(
          faceAxis === "x" ? 1 : 0,
          faceAxis === "y" ? 1 : 0,
          faceAxis === "z" ? 1 : 0,
        );
        const faceCenterCoord = getLayerCenter(faceSlice);
        const faceCenter = new THREE.Vector3(
          faceAxis === "x" ? faceCenterCoord : 0,
          faceAxis === "y" ? faceCenterCoord : 0,
          faceAxis === "z" ? faceCenterCoord : 0,
        );

        const targetAngle = (Math.PI / 2) * direction;

        // 4. Animate
        const tween = { angle: 0 };
        gsap.to(tween, {
          angle: targetAngle,
          duration,
          ease,
          onUpdate() {
            const rotQuat = new THREE.Quaternion().setFromAxisAngle(axisVec, tween.angle);
            affected.forEach((cd, idx) => {
              const mesh = cubeMeshes[cubieData.indexOf(cd)];
              // Visual position
              const offset = startPositions[idx].clone().sub(faceCenter);
              offset.applyAxisAngle(axisVec, tween.angle);
              mesh.position.copy(faceCenter.clone().add(offset));
              // Visual quaternion
              mesh.quaternion.copy(rotQuat.clone().multiply(startQuats[idx]));
            });
          },
          onComplete() {
            // 5. Update logical integer positions
            affected.forEach((cd) => {
              const { lx, ly, lz } = cd;
              if (faceAxis === "y") {
                if (direction === +1) { cd.lx = lz;     cd.lz = 2 - lx; }
                else                  { cd.lx = 2 - lz; cd.lz = lx;     }
              } else if (faceAxis === "x") {
                if (direction === +1) { cd.ly = 2 - lz; cd.lz = ly;     }
                else                  { cd.ly = lz;     cd.lz = 2 - ly; }
              } else {
                if (direction === +1) { cd.lx = 2 - ly; cd.ly = lx;     }
                else                  { cd.lx = ly;     cd.ly = 2 - lx; }
              }
            });

            // 6. Update cumulative quaternion
            const finalQuat = new THREE.Quaternion().setFromAxisAngle(axisVec, targetAngle);
            affected.forEach((cd) => {
              cd.quat.premultiply(finalQuat);
              cd.quat.normalize();
            });

            // 7. Hard-snap meshes to exact integer-derived positions
            syncMeshesToData();
            rotating = false;
            resolve();
          },
        });
      });
    }

    /* Expose rotateFace to parent */
    rotateFaceRef.current = rotateFace;

    /* ── Apply scramble instantly ─────────────────────────── */
    (async () => {
      for (const [axis, slice, dir] of SCRAMBLE_6) {
        await rotateFace(axis, slice, dir, 0, "none");
      }
      syncMeshesToData();
    })();

    /* ── Animation loop ──────────────────────────────────── */
    const clock = new THREE.Clock();
    const st = stateRef.current;

    // compute world point under a DOM element center and smoothly move cubeGroup there
    function computeWorldFromScreen(clientX: number, clientY: number) {
      const rect = canvas!.getBoundingClientRect();
      const ndcX = (clientX - rect.left) / rect.width * 2 - 1;
      const ndcY = -((clientY - rect.top) / rect.height) * 2 + 1;
      const ndc = new THREE.Vector3(ndcX, ndcY, 0.5);
      ndc.unproject(camera);
      const dir = ndc.sub(camera.position).normalize();
      const distance = camera.position.distanceTo(cubeGroup.position);
      return camera.position.clone().add(dir.multiplyScalar(distance));
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      cubeGroup.rotation.x = st.globalRotX + st.mouseY * 0.05;
      cubeGroup.rotation.y = st.globalRotY + st.mouseX * 0.05 + elapsed * 0.018;

      // target vertical position comes from state
      const targetY = st.cubeY;

      // if a targetRef was provided, compute its world center and lerp cube towards it
      if (typeof (targetRef as any) !== "undefined" && targetRef && (targetRef as any).current) {
        const el = (targetRef as any).current as HTMLElement | null;
        if (el) {
          const box = el.getBoundingClientRect();
          const cx = box.left + box.width / 2;
          const cy = box.top + box.height / 2;
          const worldTarget = computeWorldFromScreen(cx, cy);
          // keep a small Y offset so the cube sits slightly below the heading
          worldTarget.y = targetY - 0.25;
          // smooth lerp
          cubeGroup.position.lerp(worldTarget, 0.12);
        } else {
          cubeGroup.position.y = targetY;
        }
      } else {
        // fallback: just set Y
        cubeGroup.position.y = targetY;
      }

      rimLight.intensity = st.rimLightIntensity + Math.sin(elapsed * 1.2) * 0.15;

      renderer.render(scene, camera);
    }

    animate();

    /* ── Resize ──────────────────────────────────────────── */
    const onResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    onResizeRef.current = onResize;
    window.addEventListener("resize", onResize);

    } catch (e) {
      // WebGL not available or context creation failed – degrade gracefully
      console.warn("MirrorCube: WebGL initialisation failed, skipping 3D render.", e);
    }

    /* ── Cleanup ─────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(animFrameId);
      if (onResizeRef.current) window.removeEventListener("resize", onResizeRef.current);
      try {
        renderer?.dispose();
      } catch { /* already gone */ }
      rotateFaceRef.current = null;
      fillLightRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
