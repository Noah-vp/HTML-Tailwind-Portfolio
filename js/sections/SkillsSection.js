// Skills section generator
function createSkillsSection(config) {
  const section = document.createElement('section');
  section.id = 'skills';
  section.className = 'scroll-mt-24 py-12 md:py-16';
  
  // Title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'mb-8 flex items-center justify-between';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold text-white md:text-2xl';
  title.textContent = config.title;
  titleContainer.appendChild(title);
  
  section.appendChild(titleContainer);
  
  // Skills grid
  const grid = document.createElement('div');
  grid.className = 'grid gap-6 md:grid-cols-2';
  
  config.categories.forEach(category => {
    const skillCard = createSkillCard(category);
    grid.appendChild(skillCard);
  });
  
  section.appendChild(grid);
  
  return section;
}

