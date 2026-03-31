import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { DropdownProvider } from "./context/DropdownContext";
import { Toaster } from "react-hot-toast";
import gsap from "gsap";

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

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <DropdownProvider>
        <ScrollToTop />
        <Toaster />
        <App />
      </DropdownProvider>
    </BrowserRouter>
  </StrictMode>,
);
