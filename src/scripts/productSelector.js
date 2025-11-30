// routes.js
const productRoutes = [
  { label: "Clay Slicer", path: "/product/clay-slicer" },
  { label: "Vector to Gcode", path: "/product/vector-to-gcode" },
  { label: "Gcode Cloner", path: "/product/gcode-cloner" },
];

export function productSelector(selectorClass = ".products-selector") {
  const currentPath = window.location.pathname;
  const containers = document.querySelectorAll(selectorClass);

  containers.forEach((container) => {
    container.innerHTML = "";
    productRoutes.forEach(({ label, path }) => {
      const wrapper = document.createElement("div");
      wrapper.className = "flex items-center gap-2.5";

      const dot = document.createElement("div");
      dot.className = `min-w-2.5 min-h-2.5 rounded-full block transition-colors ${
        currentPath === path ? "bg-[#007dff]" : "bg-[#D9D9D9]"
      }`;

      const link = document.createElement("a");
      link.href = path;
      link.setAttribute("aria-label", label);
      link.textContent = label;
      link.className = container.classList.contains("products-selector-large")
        ? "text-[#BCBCBC] hover:text-white font-normal not-italic text-xl leading-[24px] tracking-[0%]"
        : "text-[#BCBCBC] hover:text-white font-normal not-italic text-sm leading-[17px] tracking-[0%]";

      wrapper.appendChild(dot);
      wrapper.appendChild(link);
      container.appendChild(wrapper);
    });
  });
}
