import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { DropdownProvider } from "./context/DropdownContext";
import { Toaster } from "react-hot-toast";

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
