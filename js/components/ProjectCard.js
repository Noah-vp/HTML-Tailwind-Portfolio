// Project card component generator
function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "rounded-2xl border border-white/10 bg-white/5 p-4";

  const mainContainer = document.createElement("div");
  mainContainer.className = "flex gap-4";

  const container = document.createElement("div");
  container.className = "flex flex-col gap-3 flex-1";

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

  mainContainer.appendChild(container);

  // Preview image on the right
  if (project.preview) {
    const imageContainer = document.createElement("div");
    imageContainer.className = "flex-shrink-0 self-start";
    
    const image = document.createElement("img");
    image.src = project.preview;
    image.alt = `${project.title} preview`;
    image.className = "w-32 h-32 object-cover rounded-lg border border-white/10";
    image.style.aspectRatio = "1 / 1";
    image.style.minWidth = "128px";
    image.style.minHeight = "128px";
    
    // Add error handling for broken images
    image.onerror = function() {
      console.error(`Failed to load preview image: ${project.preview}`);
      this.style.display = 'none';
    };
    
    // Debug logging
    image.onload = function() {
      console.log(`Successfully loaded preview image: ${project.preview}`);
    };
    
    imageContainer.appendChild(image);
    mainContainer.appendChild(imageContainer);
  }

  article.appendChild(mainContainer);

  return article;
}
