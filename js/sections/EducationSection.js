// Education section generator
function createEducationSection(config) {
  const section = document.createElement('section');
  section.id = 'education';
  section.className = 'scroll-mt-24 py-12 md:py-16';
  
  // Title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'mb-8 flex items-center justify-between';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold text-white md:text-2xl';
  title.textContent = config.title;
  titleContainer.appendChild(title);
  
  section.appendChild(titleContainer);
  
  // Education grid
  const grid = document.createElement('div');
  grid.className = 'grid gap-6 md:grid-cols-2';
  
  config.educations.forEach(education => {
    const educationCard = createEducationCard(education);
    grid.appendChild(educationCard);
  });
  
  section.appendChild(grid);
  
  return section;
}

