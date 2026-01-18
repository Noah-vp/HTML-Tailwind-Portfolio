// Hero section generator
function createHeroSection(config) {
  const section = document.createElement('section');
  section.id = 'hero';
  section.className = 'flex flex-col items-center justify-center gap-6 py-16 text-center md:py-24';
  
  // Profile image
  const image = document.createElement('img');
  image.src = config.profileImage;
  image.alt = 'profile';
  image.className = 'h-28 w-28 rounded-full ring-2 ring-white/10';
  section.appendChild(image);
  
  // Name
  const name = document.createElement('h1');
  name.className = 'text-3xl font-semibold tracking-tight text-white md:text-5xl';
  name.textContent = config.name;
  section.appendChild(name);
  
  // Description
  const description = document.createElement('p');
  description.className = 'max-w-2xl text-balance text-neutral-300 md:text-lg';
  description.innerHTML = config.description.map(line => line).join(' <br /> ');
  section.appendChild(description);
  
  // Buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'flex flex-wrap items-center justify-center gap-3';
  
  const primaryButton = createButton(config.primaryButton);
  const secondaryButton = createButton({ ...config.secondaryButton, type: 'secondary' });
  
  buttonsContainer.appendChild(primaryButton);
  buttonsContainer.appendChild(secondaryButton);
  section.appendChild(buttonsContainer);
  
  return section;
}

