// Education card component generator
function createEducationCard(education) {
  const article = document.createElement('article');
  article.className = 'rounded-2xl border border-white/10 bg-white/5 p-6';
  
  // Header with title, institution, and date
  const header = document.createElement('div');
  header.className = 'flex items-start justify-between gap-4';
  
  const titleContainer = document.createElement('div');
  const title = document.createElement('h3');
  title.className = 'text-base font-semibold text-white';
  title.textContent = education.title;
  titleContainer.appendChild(title);
  
  const institution = document.createElement('p');
  institution.className = 'text-sm text-neutral-300';
  institution.textContent = education.institution;
  titleContainer.appendChild(institution);
  
  header.appendChild(titleContainer);
  
  const date = document.createElement('span');
  date.className = 'rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300';
  date.textContent = education.date;
  header.appendChild(date);
  
  article.appendChild(header);
  
  // Description
  const description = document.createElement('p');
  description.className = 'mt-3 text-sm leading-7 text-neutral-300';
  description.textContent = education.description;
  article.appendChild(description);
  
  return article;
}

