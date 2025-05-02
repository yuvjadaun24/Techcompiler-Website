// components/CursorFollower.tsx
import { useEffect, useRef } from "react";

export default function CursorFollower() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        let mouseX = 0;
        let mouseY = 0;

        const moveCursor = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            if (cursor) {
                cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", moveCursor);
        animate();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div className="cursor-container" ref={cursorRef}>
            <div className="cursor-ring"></div>
            <div className="cursor-dot"></div>
        </div>
    );
}
