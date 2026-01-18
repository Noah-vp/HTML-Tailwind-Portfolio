// Contact item component generator
function createContactItem(contact) {
  const item = document.createElement('div');
  item.className = 'flex items-center gap-3';
  
  const iconContainer = document.createElement('div');
  iconContainer.className = 'flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5';
  
  const icon = document.createElement('span');
  icon.className = 'material-symbols-outlined text-neutral-300';
  icon.textContent = contact.icon;
  icon.style.fontSize = '1.5rem';
  
  iconContainer.appendChild(icon);
  item.appendChild(iconContainer);
  
  const textContainer = document.createElement('div');
  const label = document.createElement('p');
  label.className = 'text-sm font-medium text-white';
  label.textContent = contact.label;
  textContainer.appendChild(label);
  
  const link = document.createElement('a');
  link.href = contact.link;
  link.className = 'text-sm text-neutral-300 hover:text-white';
  link.textContent = contact.value;
  if (contact.type !== 'email') {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
  textContainer.appendChild(link);
  
  item.appendChild(textContainer);
  
  return item;
}

