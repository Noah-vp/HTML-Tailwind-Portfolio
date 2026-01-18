// Main script that renders all sections
// This file imports all configs and sections, then renders them to the page

// Load all configs
// Note: In a real app, you'd use ES6 modules, but for simplicity we'll use script tags in HTML

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Create navigation
  const navigation = createNavigation(navigationConfig);
  document.body.insertBefore(navigation, document.body.firstChild);

  // Get main container (or create it if it doesn't exist)
  let mainContainer = document.querySelector("main");
  if (!mainContainer) {
    mainContainer = document.createElement("main");
    mainContainer.className = "mx-auto max-w-6xl px-4";
    document.body.appendChild(mainContainer);
  }

  // Create and append all sections
  const heroSection = createHeroSection(heroConfig);
  mainContainer.appendChild(heroSection);

  const skillsSection = createSkillsSection(skillsConfig);
  mainContainer.appendChild(skillsSection);

  const projectsSection = createProjectsSection(projectsConfig);
  mainContainer.appendChild(projectsSection);

  const experienceSection = createExperienceSection(experienceConfig);
  mainContainer.appendChild(experienceSection);

  const educationSection = createEducationSection(educationConfig);
  mainContainer.appendChild(educationSection);

  const resumeSection = createResumeSection(resumeConfig);
  mainContainer.appendChild(resumeSection);

  const contactSection = createContactSection(contactConfig);
  mainContainer.appendChild(contactSection);

  // Initialize navigation functionality
  initNavigation();
});

// Navigation functionality (smooth scroll and active section detection)
function initNavigation() {
  // Smooth scroll + close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      const el = href && document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const m = document.getElementById("mobile-nav");
      if (m && !m.classList.contains("hidden")) m.classList.add("hidden");
    });
  });

  // Simple active section detection
  const navLinks = Array.from(
    document.querySelectorAll('a[data-nav][href^="#"]')
  );
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  function updateActiveSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    let activeSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;

      // Check if section is in viewport
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        const distance = Math.abs(
          scrollPosition - (sectionTop + rect.height / 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          activeSection = section.id;
        }
      }
    });

    if (activeSection) {
      // Remove active class from all nav links
      navLinks.forEach((link) => {
        link.classList.remove("bg-brand-500", "text-white");
        link.classList.add("text-neutral-300");
      });

      // Add active class to current section's nav links
      const currentLinks = navLinks.filter(
        (link) => link.getAttribute("href") === `#${activeSection}`
      );
      currentLinks.forEach((link) => {
        link.classList.add("bg-brand-500", "text-white");
        link.classList.remove("text-neutral-300");
      });
    }
  }

  // Update on scroll
  window.addEventListener("scroll", updateActiveSection);

  // Update on load
  window.addEventListener("load", updateActiveSection);
}
