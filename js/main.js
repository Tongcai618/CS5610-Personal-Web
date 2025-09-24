import { initNav } from "./nav.js";
import { initThemeToggle } from "./theme.js";
import { renderProjects } from "./projects.js";
import { initCustomFeature } from "./customComponent.js";
import { initBackToTop } from "./backToTop.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initThemeToggle();
  renderProjects();
  initCustomFeature();
  initBackToTop();

  document.getElementById("year").textContent = new Date().getFullYear();
});
