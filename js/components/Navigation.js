// Navigation component generator
function createNavigation(navConfig) {
  const header = document.createElement("header");
  header.id = "menu-bar";
  header.className =
    "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60";

  const nav = document.createElement("nav");
  nav.className =
    "mx-auto flex max-w-6xl items-center justify-center px-4 py-4";

  // Desktop menu
  const desktopMenu = document.createElement("ul");
  desktopMenu.id = "menu-bar-list";
  desktopMenu.className =
    "hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 shadow-sm shadow-black/30 md:flex";

  navConfig.items.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${item.id}`;
    link.setAttribute("data-nav", "");
    link.className =
      "menu-bar-list-item-text flex items-center gap-2 rounded-full px-4 py-2 text-sm text-neutral-300 hover:bg-white/10 hover:text-white";

    link.appendChild(document.createTextNode(item.label));
    listItem.appendChild(link);
    desktopMenu.appendChild(listItem);
  });

  nav.appendChild(desktopMenu);

  // Mobile menu button
  const mobileButton = document.createElement("button");
  mobileButton.className =
    "md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300";
  mobileButton.textContent = "Menu";
  mobileButton.addEventListener("click", () => {
    const mobileNav = document.getElementById("mobile-nav");
    if (mobileNav) {
      mobileNav.classList.toggle("hidden");
    }
  });
  nav.appendChild(mobileButton);

  header.appendChild(nav);

  // Mobile menu
  const mobileNav = document.createElement("div");
  mobileNav.id = "mobile-nav";
  mobileNav.className = "mx-auto hidden max-w-6xl px-4 pb-4 md:hidden";

  const mobileList = document.createElement("ul");
  mobileList.className =
    "grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-2";

  navConfig.items.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${item.id}`;
    link.setAttribute("data-nav", "");
    link.className =
      "flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-neutral-300 hover:bg-white/10 hover:text-white";

    link.appendChild(document.createTextNode(item.label));
    listItem.appendChild(link);
    mobileList.appendChild(listItem);
  });

  mobileNav.appendChild(mobileList);
  header.appendChild(mobileNav);

  return header;
}
