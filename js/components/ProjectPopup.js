// Project popup/modal component generator
function showProjectPopup(project) {
  // Remove existing popup if any
  const existingPopup = document.getElementById("project-popup-overlay");
  if (existingPopup) {
    existingPopup.remove();
  }

  // Create overlay backdrop
  const overlay = document.createElement("div");
  overlay.id = "project-popup-overlay";
  overlay.className =
    "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto p-4";

  // Create popup container
  const popup = document.createElement("div");
  popup.className =
    "relative mx-auto max-w-2xl w-full rounded-2xl border border-white/10 bg-neutral-900 p-6 md:p-8 shadow-xl my-auto";

  // Close button
  const closeButton = document.createElement("button");
  closeButton.className =
    "absolute right-4 top-4 text-neutral-400 hover:text-white";
  closeButton.innerHTML = `
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;

  const closePopup = () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
    overlay.remove();
  };

  closeButton.addEventListener("click", closePopup);
  popup.appendChild(closeButton);

  // Title
  const title = document.createElement("h2");
  title.className = "mb-2 pr-8 text-2xl font-semibold text-white";
  title.textContent = project.title;
  popup.appendChild(title);

  // Date
  const date = document.createElement("p");
  date.className = "mb-6 text-sm text-neutral-400";
  date.textContent = project.date;
  popup.appendChild(date);

  // What is this project?
  if (project.whatIs) {
    const whatIsSection = document.createElement("div");
    whatIsSection.className = "mb-6";

    const whatIsTitle = document.createElement("h3");
    whatIsTitle.className = "mb-2 text-lg font-semibold text-white";
    whatIsTitle.textContent = "What is this project?";
    whatIsSection.appendChild(whatIsTitle);

    const whatIsContent = document.createElement("p");
    whatIsContent.className = "text-sm leading-7 text-neutral-300";
    whatIsContent.textContent = project.whatIs;
    whatIsSection.appendChild(whatIsContent);

    popup.appendChild(whatIsSection);
  }

  // Why built this project
  if (project.whyBuilt) {
    const whyBuiltSection = document.createElement("div");
    whyBuiltSection.className = "mb-6";

    const whyBuiltTitle = document.createElement("h3");
    whyBuiltTitle.className = "mb-2 text-lg font-semibold text-white";
    whyBuiltTitle.textContent = "Why built this project?";
    whyBuiltSection.appendChild(whyBuiltTitle);

    const whyBuiltContent = document.createElement("p");
    whyBuiltContent.className = "text-sm leading-7 text-neutral-300";
    whyBuiltContent.textContent = project.whyBuilt;
    whyBuiltSection.appendChild(whyBuiltContent);

    popup.appendChild(whyBuiltSection);
  }

  // Technical description
  if (project.technicalDescription) {
    const techSection = document.createElement("div");
    techSection.className = "mb-6";

    const techTitle = document.createElement("h3");
    techTitle.className = "mb-2 text-lg font-semibold text-white";
    techTitle.textContent = "Technical Description";
    techSection.appendChild(techTitle);

    const techContent = document.createElement("p");
    techContent.className = "text-sm leading-7 text-neutral-300";
    techContent.textContent = project.technicalDescription;
    techSection.appendChild(techContent);

    popup.appendChild(techSection);
  }

  // Demo (image or video)
  if (project.demo) {
    const demoSection = document.createElement("div");
    demoSection.className = "mb-6";

    const demoTitle = document.createElement("h3");
    demoTitle.className = "mb-3 text-lg font-semibold text-white";
    demoTitle.textContent = "Demo";
    demoSection.appendChild(demoTitle);

    if (project.demoIsVideo) {
      const video = document.createElement("video");
      video.className = "w-full rounded-lg object-cover";
      video.src = project.demo;
      video.controls = true;
      video.muted = false;
      demoSection.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.className = "w-full rounded-lg object-cover";
      img.src = project.demo;
      img.alt = project.demoAlt || `${project.title} demo`;
      demoSection.appendChild(img);
    }

    popup.appendChild(demoSection);
  }

  // Optional button for live demo or paper
  if (project.externalLink) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "mt-6";

    const externalButton = document.createElement("a");
    externalButton.href = project.externalLink;
    externalButton.target = project.linkType === "file" ? "_self" : "_blank";
    externalButton.rel =
      project.linkType === "file" ? "" : "noopener noreferrer";
    externalButton.className =
      "inline-block rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white hover:bg-brand-600";

    // Set button text based on link type
    if (project.linkType === "file") {
      externalButton.textContent = project.linkText || "Read Paper";
      externalButton.onclick = (e) => {
        if (project.linkType === "file") {
          e.preventDefault();
          window.open(project.externalLink);
        }
      };
    } else {
      externalButton.textContent = project.linkText || "View Live Demo";
    }

    buttonContainer.appendChild(externalButton);
    popup.appendChild(buttonContainer);
  }

  overlay.appendChild(popup);

  // Close on backdrop click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closePopup();
    }
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      closePopup();
      document.removeEventListener("keydown", handleEscape);
    }
  };

  document.addEventListener("keydown", handleEscape);

  // Show popup
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.appendChild(overlay);

  // Add animation
  requestAnimationFrame(() => {
    popup.style.opacity = "0";
    popup.style.transform = "scale(0.95)";
    popup.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";
    requestAnimationFrame(() => {
      popup.style.opacity = "1";
      popup.style.transform = "scale(1)";
    });
  });
}
