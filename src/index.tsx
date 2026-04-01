import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "../ScrollToTop";
import { DropdownProvider } from "./context/DropdownContext";
import { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Global tab-visibility handler ─────────────────────────
// Pauses ALL GSAP tweens & ScrollTriggers while the tab is
// hidden, preventing continuous GPU/CPU consumption when the
// user is on a different tab.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    gsap.ticker.sleep();
    window.__tabHidden = true;
  } else {
    gsap.ticker.wake();
    window.__tabHidden = false;
  }
});

// ── beforeunload safety net ───────────────────────────────
// Kill every GSAP tween & ScrollTrigger and dispatch a
// force-gpu-dispose event so WebGL components can release
// GPU resources before the page unloads.
window.addEventListener("beforeunload", () => {
  gsap.ticker.sleep();
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach((t) => t.kill());
  window.dispatchEvent(new Event("force-gpu-dispose"));
});

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <DropdownProvider>
          <ScrollToTop />
          <Toaster />
          <App />
        </DropdownProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
