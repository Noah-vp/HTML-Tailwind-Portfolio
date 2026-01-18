// Contact section generator
function createContactSection(config) {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'scroll-mt-24 py-12 md:py-16';
  
  // Title
  const titleContainer = document.createElement('div');
  titleContainer.className = 'mb-8 flex items-center justify-between';
  
  const title = document.createElement('h2');
  title.className = 'text-xl font-semibold text-white md:text-2xl';
  title.textContent = config.title;
  titleContainer.appendChild(title);
  
  section.appendChild(titleContainer);
  
  // Contact grid
  const grid = document.createElement('div');
  grid.className = 'grid gap-6 md:grid-cols-2';
  
  // Contact info card
  const contactCard = document.createElement('div');
  contactCard.className = 'rounded-2xl border border-white/10 bg-white/5 p-6';
  
  const contactTitle = document.createElement('h3');
  contactTitle.className = 'mb-4 text-base font-semibold text-white';
  contactTitle.textContent = 'Get in touch';
  contactCard.appendChild(contactTitle);
  
  const contactList = document.createElement('div');
  contactList.className = 'space-y-4';
  
  config.contactInfo.forEach(contact => {
    const contactItem = createContactItem(contact);
    contactList.appendChild(contactItem);
  });
  
  contactCard.appendChild(contactList);
  
  // Message box
  const messageBox = document.createElement('div');
  messageBox.className = 'mt-6 rounded-lg border border-white/10 bg-white/5 p-4';
  const messageText = document.createElement('p');
  messageText.className = 'text-sm text-neutral-300';
  messageText.textContent = config.message;
  messageBox.appendChild(messageText);
  contactCard.appendChild(messageBox);
  
  grid.appendChild(contactCard);
  
  // Location card
  const locationCard = document.createElement('div');
  locationCard.className = 'rounded-2xl border border-white/10 bg-white/5 p-6';
  
  const locationTitle = document.createElement('h3');
  locationTitle.className = 'mb-4 text-base font-semibold text-white';
  locationTitle.textContent = 'Location';
  locationCard.appendChild(locationTitle);
  
  const locationItem = document.createElement('div');
  locationItem.className = 'flex items-center gap-3 mb-4';
  
  const locationIconContainer = document.createElement('div');
  locationIconContainer.className = 'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 overflow-hidden';
  
  const locationIcon = document.createElement('img');
  locationIcon.src = 'https://flagcdn.com/w40/nl.png';
  locationIcon.alt = 'Dutch flag';
  locationIcon.className = 'w-8 h-8 object-cover rounded-full';
  locationIcon.setAttribute('aria-label', 'Dutch flag');
  locationIconContainer.appendChild(locationIcon);
  locationItem.appendChild(locationIconContainer);
  
  const locationTextContainer = document.createElement('div');
  const locationCity = document.createElement('p');
  locationCity.className = 'text-sm font-medium text-white';
  locationCity.textContent = config.location.city;
  locationTextContainer.appendChild(locationCity);
  
  const locationDescription = document.createElement('p');
  locationDescription.className = 'text-sm text-neutral-300';
  locationDescription.textContent = config.location.description;
  locationTextContainer.appendChild(locationDescription);
  
  locationItem.appendChild(locationTextContainer);
  locationCard.appendChild(locationItem);
  
  // Location note box
  const locationNoteBox = document.createElement('div');
  locationNoteBox.className = 'rounded-lg border border-white/10 bg-white/5 p-4';
  const locationNoteText = document.createElement('p');
  locationNoteText.className = 'text-sm text-neutral-300';
  locationNoteText.textContent = config.location.note;
  locationNoteBox.appendChild(locationNoteText);
  locationCard.appendChild(locationNoteBox);
  
  grid.appendChild(locationCard);
  section.appendChild(grid);
  
  return section;
}

