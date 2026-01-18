// Button component generator
function createButton(config) {
  const { text, link, type = 'primary', onClick } = config;
  
  const baseClasses = 'rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-black/30';
  const primaryClasses = 'bg-brand-500 hover:bg-brand-600';
  const secondaryClasses = 'border border-white/15 bg-white/5 text-neutral-100 hover:bg-white/10';
  
  const buttonClasses = type === 'primary' 
    ? `${baseClasses} ${primaryClasses}`
    : `${baseClasses} ${secondaryClasses}`;
  
  const button = document.createElement('a');
  button.href = link || '#';
  button.className = buttonClasses;
  button.textContent = text;
  
  if (onClick) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      onClick();
    });
  }
  
  return button;
}

// Button variant for project cards (smaller)
function createProjectButton(config) {
  const { text, onClick, linkType, link } = config;
  
  const button = document.createElement('button');
  button.className = 'rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600';
  button.type = 'button';
  button.textContent = text || 'see project';
  
  if (onClick || link) {
    button.addEventListener('click', () => {
      if (onClick) {
        onClick();
      } else if (linkType === 'file') {
        window.open(link);
      } else if (linkType === 'url') {
        window.location.href = link;
      }
    });
  }
  
  return button;
}

// Button variant for resume download
function createDownloadButton(config) {
  const { text, file } = config;
  
  const button = document.createElement('button');
  button.className = 'rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white hover:bg-brand-600';
  button.textContent = text;
  
  button.addEventListener('click', () => {
    window.open(file);
  });
  
  return button;
}

