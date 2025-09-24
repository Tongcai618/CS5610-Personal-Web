const projects = [
  {
    title: "Wordle Game",
    description:
      "A TypeScript-based Wordle clone with a clean UI, global leaderboard, and persistent game state—backed by a Spring Boot API with JWT-based authentication (login/signup). Deployed on AWS EC2 with ALB.",
    image: "./images/project1.png",
    link: "https://www.wordle-game.tong-cai.com",
  },
  {
    title: "Husky Life",
    description:
      "A student-focused campus companion app designed to help Northeastern students explore campus facilities and manage their daily schedules. Features include interactive campus maps, class and event scheduling, and personalized daily planning.",
    image: "./images/huskylife-photo.png",
    link: "https://github.com/ZeehanXu/HuskyLife",
  },
];

export function renderProjects() {
  const list = document.getElementById("projects-list");
  if (!list) return;

  list.innerHTML = projects
    .map(
      (p) => `
      <li class="card">
        <img class="card__img" src="${p.image}" alt="Screenshot of ${p.title}" />
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__text">${p.description}</p>
          <a class="btn btn--link" href="${p.link}">Open</a>
        </div>
      </li>`,
    )
    .join("");
}
