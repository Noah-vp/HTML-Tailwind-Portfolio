// Skill card component generator
function createSkillCard(category) {
  const card = document.createElement("div");
  card.className = "rounded-2xl border border-white/10 bg-white/5 p-6";

  const title = document.createElement("h3");
  title.className = "mb-4 text-base font-semibold text-white";
  title.textContent = category.title;
  card.appendChild(title);

  const skillsContainer = document.createElement("div");
  skillsContainer.className = "flex flex-wrap gap-2";

  category.skills.forEach((skill) => {
    const skillTag = document.createElement("span");
    skillTag.className =
      "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 hover:bg-white/10";
    skillTag.textContent = skill.name;

    // If skill has experience description, add click handler for popup
    if (skill.experience) {
      skillTag.style.cursor = "pointer";
      skillTag.addEventListener("click", (e) => {
        e.stopPropagation();
        if (typeof showSkillPopup === "function") {
          showSkillPopup(skill);
        }
      });
      skillTag.title = "Click to see my experience with this skill";
    }

    skillsContainer.appendChild(skillTag);
  });

  card.appendChild(skillsContainer);

  return card;
}
