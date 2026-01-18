// Skill popup/modal component generator
function showSkillPopup(skill) {
  // Remove existing popup if any
  const existingPopup = document.getElementById('skill-popup-overlay');
  if (existingPopup) {
    existingPopup.remove();
  }
  
  // Create overlay backdrop
  const overlay = document.createElement('div');
  overlay.id = 'skill-popup-overlay';
  overlay.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm';
  
  // Create popup container
  const popup = document.createElement('div');
  popup.className = 'relative mx-4 max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-xl';
  
  // Close button
  const closeButton = document.createElement('button');
  closeButton.className = 'absolute right-4 top-4 text-neutral-400 hover:text-white';
  closeButton.innerHTML = `
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  `;
  
  const closePopup = () => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
    overlay.remove();
  };
  
  closeButton.addEventListener('click', closePopup);
  popup.appendChild(closeButton);
  
  // Skill title
  const title = document.createElement('h3');
  title.className = 'mb-3 pr-8 text-xl font-semibold text-white';
  title.textContent = skill.name;
  popup.appendChild(title);
  
  // Experience description
  const description = document.createElement('p');
  description.className = 'text-sm leading-7 text-neutral-300';
  description.textContent = skill.experience || 'No experience description available.';
  popup.appendChild(description);
  
  overlay.appendChild(popup);
  
  // Close on backdrop click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closePopup();
    }
  });
  
  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closePopup();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  
  document.addEventListener('keydown', handleEscape);
  
  // Show popup
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
  
  // Add animation
  requestAnimationFrame(() => {
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.95)';
    popup.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
    requestAnimationFrame(() => {
      popup.style.opacity = '1';
      popup.style.transform = 'scale(1)';
    });
  });
}

