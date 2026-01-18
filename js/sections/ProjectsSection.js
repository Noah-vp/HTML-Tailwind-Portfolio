// Projects section generator
function createProjectsSection(config) {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'scroll-mt-24 py-12 md:py-16';
  
  // Title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'mb-8 flex items-center justify-between';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold text-white md:text-2xl';
  title.textContent = config.title;
  titleContainer.appendChild(title);
  
  section.appendChild(titleContainer);
  
  // Projects grid
  const grid = document.createElement('div');
  grid.className = 'grid gap-6 md:grid-cols-2';
  
  config.projects.forEach(project => {
    const projectCard = createProjectCard(project);
    grid.appendChild(projectCard);
  });
  
  section.appendChild(grid);
  
  return section;
}

