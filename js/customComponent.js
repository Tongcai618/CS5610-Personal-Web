export function initCustomFeature() {
  const honeycomb = document.getElementById("honeycomb");
  if (!honeycomb) return;

  // Example: Add extra random images
  for (let i = 0; i < 3; i++) {
    const cell = document.createElement("div");
    cell.className = "honeycomb__cell";
    cell.innerHTML = `<img src="./images/project1.png" alt="Extra gallery item">`;
    honeycomb.appendChild(cell);
  }
}
