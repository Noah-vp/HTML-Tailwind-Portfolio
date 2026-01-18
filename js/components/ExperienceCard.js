// Experience card component generator
function createExperienceCard(experience) {
  const article = document.createElement('article');
  article.className = 'rounded-2xl border border-white/10 bg-white/5 p-6';
  
  // Header with title, company, and date
  const header = document.createElement('div');
  header.className = 'flex items-start justify-between gap-4';
  
  const titleContainer = document.createElement('div');
  const title = document.createElement('h3');
  title.className = 'text-base font-semibold text-white';
  title.textContent = experience.title;
  titleContainer.appendChild(title);
  
  const company = document.createElement('p');
  company.className = 'text-sm text-neutral-300';
  company.textContent = experience.company;
  titleContainer.appendChild(company);
  
  header.appendChild(titleContainer);
  
  const date = document.createElement('span');
  date.className = 'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300';
  date.textContent = experience.date;
  header.appendChild(date);
  
  article.appendChild(header);
  
  // Description
  const description = document.createElement('p');
  description.className = 'mt-3 text-sm leading-7 text-neutral-300';
  description.textContent = experience.description;
  article.appendChild(description);
  
  return article;
}

