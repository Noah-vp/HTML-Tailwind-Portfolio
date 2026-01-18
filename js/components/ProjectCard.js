// Project card component generator
function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "rounded-2xl border border-white/10 bg-white/5 p-4";

  const container = document.createElement("div");
  container.className = "flex flex-col gap-3";

  // Title
  const title = document.createElement("h3");
  title.className = "text-base font-semibold text-white";
  title.textContent = project.title;
  container.appendChild(title);

  // Date
  const date = document.createElement("p");
  date.className = "text-xs text-neutral-400";
  date.textContent = project.date;
  container.appendChild(date);

  // Description
  const description = document.createElement("p");
  description.className = "text-sm leading-7 text-neutral-300";
  description.textContent = project.description;
  container.appendChild(description);

  // Technologies (removed)

  // Button
  const buttonContainer = document.createElement("div");
  const projectButton = createProjectButton({
    text: "Learn more",
    onClick: () => {
      if (typeof showProjectPopup === "function") {
        showProjectPopup(project);
      }
    },
  });
  buttonContainer.appendChild(projectButton);
  container.appendChild(buttonContainer);

  article.appendChild(container);

  return article;
}
