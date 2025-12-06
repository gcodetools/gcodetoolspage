import { productSelector } from "https://gcodetools.github.io/gcodetoolspage/scripts/productSelector.js";

export default function loadHeader() {
  // Inserta el HTML del header como plantilla literal
  const headerHTML = `
    <header class="flex flex-col pt-5 mb-[10px]">
      <div class="flex gap-[100px] justify-between mb-[10px] h-[71px] md:h-auto">
        <div class="lg:min-w-[256px]">
          <h1 class="w-[150px] select-none">
            <a href="https://gcodetools.github.io/gcodetoolspage/index.html" class="select-none">
              <img src="https://gcodetools.github.io/gcodetoolspage/assets/GTNEW_Logo_Seal.svg" alt="GTLogo" class="select-none" />
            </a>
          </h1>
        </div>

        <!-- NAV NORMAL (solo visible en desktop) -->
        <nav class="hidden md:flex md:justify-between md:flex-1">
          <a href="https://gcodetools.github.io/gcodetoolspage/index.html" class="text-[#BCBCBC] hover:text-white font-normal text-[14px]">Home</a>
          <div class="products-selector flex flex-col gap-[5px] min-w-[123px]"></div>
          <a href="https://gcodetools.github.io/gcodetoolspage/pricing.html" class="text-[#BCBCBC] hover:text-white font-normal text-[14px]">Pricing</a>
          <a href="https://gcodetools.github.io/gcodetoolspage/contact-us.html" class="text-[#BCBCBC] hover:text-white font-normal text-[14px]">Contact Us</a>
          <a   href="https://www.instagram.com/gcodetools/reels/"
  target="_blank"
  rel="noopener noreferrer"><img src="https://gcodetools.github.io/gcodetoolspage/assets/instagram.svg" alt="instagram-icon" /></a>
        </nav>

        <!-- BOTÓN MENÚ (solo visible en mobile) -->
        <div class="md:hidden">
          <button id="menu-toggle" aria-label="Abrir menú">
            <img src="https://gcodetools.github.io/gcodetoolspage/assets/menu.svg" alt="menu-icon" class="w-7 h-7" />
          </button>
        </div>
      </div>

      <!-- MENÚ MÓVIL OVERLAY -->
      <div id="mobile-menu" class="hidden fixed inset-0 flex flex-col gap-[45px] bg-[#161616] p-[20px] z-50">
        <div class="flex justify-between items-center">
          <img src="https://gcodetools.github.io/gcodetoolspage/assets/logo-full.svg" alt="logo" />
          <button id="close-menu" class="w-[39px] h-[38px] flex justify-center items-center cursor-pointer">
            <img src="https://gcodetools.github.io/gcodetoolspage/assets/close-menu.svg" alt="close-menu-icon" />
          </button>
        </div>

        <a href="https://gcodetools.github.io/gcodetoolspage/index.html" class="text-[#BCBCBC] hover:text-white text-[20px]">Home</a>
        <div class="products-selector products-selector-large flex flex-col gap-[5px] min-w-[123px]"></div>
        <a href="https://gcodetools.github.io/gcodetoolspage/pricing.html" class="text-[#BCBCBC] hover:text-white text-[20px]">Pricing</a>
        <a href="https://gcodetools.github.io/gcodetoolspage/contact-us.html" class="text-[#BCBCBC] hover:text-white text-[20px]">Contact Us</a>
        <a   href="https://www.instagram.com/gcodetools/reels/"
  target="_blank"
  rel="noopener noreferrer"><img src="https://gcodetools.github.io/gcodetoolspage/assets/instagram.svg" alt="instagram-icon" width="44" height="42" /></a>
      </div>

      <hr class="border-none h-[1px] bg-[#404040] my-2" />
    </header>
  `;

  // Crear un contenedor temporal para insertar el HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = headerHTML;

  // Insertar el HTML en el documento
  const headerElement = tempDiv.firstElementChild;

  setTimeout(() => {
    /* === MENÚ MÓVIL === */
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", () =>
      mobileMenu.classList.remove("hidden")
    );
    closeMenu.addEventListener("click", () =>
      mobileMenu.classList.add("hidden")
    );

    /* === LINKS DINÁMICOS (PRODUCTOS) === */
    productSelector();
  });

  return headerElement;
}
