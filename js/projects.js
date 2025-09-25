export function renderProjects() {
  const list = document.getElementById("projects-list");
  if (!list) return;

  const projects = [
    {
      title: "Wordle Game",
      description: "TypeScript-based Wordle clone...",
      image: "images/project1.png",
      link: "https://www.wordle-game.tong-cai.com",
    },
    {
      title: "Husky Life",
      description: "Campus companion app for Northeastern students...",
      image: "images/huskylife-photo.png",
      link: "https://github.com/ZeehanXu/HuskyLife",
    },
  ];

  list.innerHTML = projects.map(
    (p) => `
      <li class="card">
        <img class="card__img" src="${p.image}" alt="Screenshot of ${p.title}" />
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__text">${p.description}</p>
          <a class="btn btn--link" href="${p.link}">Open</a>
        </div>
      </li>`
  ).join("");
}
