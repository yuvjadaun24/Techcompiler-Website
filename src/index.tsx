import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import AllRoutes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  </StrictMode>,
);
