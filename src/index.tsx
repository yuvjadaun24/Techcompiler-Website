import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Container } from "./screens/Container/Container";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Container />
  </StrictMode>,
);
