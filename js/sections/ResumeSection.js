// Resume section generator
function createResumeSection(config) {
  const section = document.createElement('section');
  section.id = 'resume';
  section.className = 'scroll-mt-24 py-12 md:py-16';
  
  // Title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'mb-8 flex items-center justify-between';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold text-white md:text-2xl';
  title.textContent = config.title;
  titleContainer.appendChild(title);
  
  section.appendChild(titleContainer);
  
  // Content card
  const card = document.createElement('div');
  card.className = 'rounded-2xl border border-white/10 bg-white/5 p-6';
  
  const innerContainer = document.createElement('div');
  innerContainer.className = 'flex flex-col items-center gap-6 text-center';
  
  // Icon
  const iconContainer = document.createElement('div');
  iconContainer.className = 'flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5';
  
  const icon = document.createElement('span');
  icon.className = 'material-symbols-outlined text-neutral-300';
  icon.textContent = 'description';
  icon.style.fontSize = '2.5rem';
  iconContainer.appendChild(icon);
  innerContainer.appendChild(iconContainer);
  
  // Text and button
  const textContainer = document.createElement('div');
  
  const descriptionTitle = document.createElement('h3');
  descriptionTitle.className = 'mb-2 text-lg font-semibold text-white';
  descriptionTitle.textContent = config.description.title;
  textContainer.appendChild(descriptionTitle);
  
  const descriptionText = document.createElement('p');
  descriptionText.className = 'mb-4 text-sm text-neutral-300';
  descriptionText.textContent = config.description.text;
  textContainer.appendChild(descriptionText);
  
  const downloadButton = createDownloadButton(config.downloadButton);
  textContainer.appendChild(downloadButton);
  
  innerContainer.appendChild(textContainer);
  card.appendChild(innerContainer);
  section.appendChild(card);
  
  return section;
}

