const products = [
  {
    name: "Clay Slicer",
    plans: [
      {
        price: "15 / month",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "https://gcodetools.gumroad.com/l/ClaySlicerSubscription",
      },
      {
        price: "$144 / year (save 20%)",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "https://gcodetools.gumroad.com/l/ClaySlicerSubscription",
      },
      {
        price: "$199 One Time Payment",
        features: ["Fully functional app", "Mac and Windows"],
        link: "https://gcodetools.gumroad.com/l/ClaySlicerOneTimePayment",
      },
      {
        price: "More than 10 licenses - $124 / year per license",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "/contact-us.html",
      },
    ],
  },
  {
    name: "Vector to Gcode 3",
    plans: [
      {
        price: "$6 / month",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "https://gcodetools.gumroad.com/l/V2G2",
      },
      {
        price: "$50 / year (save $22)",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "https://gcodetools.gumroad.com/l/V2G2",
      },
      {
        price: "$99 One Time Payment",
        features: ["Fully functional app", "Mac and Windows"],
        link: "https://gcodetools.gumroad.com/l/vectortogcode31tp",
      },
      {
        price: "More than 10 licenses - $40 / year per license",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "/contact-us.html",
      },
    ],
  },
  {
    name: "Gcode Clonner",
    plans: [
      {
        price: "$2 / month",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "https://gcodetools.gumroad.com/l/GcodeCloner2",
      },
      {
        price: "$19 / year (save 20%)",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "https://gcodetools.gumroad.com/l/GcodeCloner2",
      },
      {
        price: "$40 One Time Payment",
        features: ["Fully functional app", "Mac and Windows"],
        link: "https://gcodetools.gumroad.com/l/GcodeClonerOneTimePayment",
      },
      {
        price: "More than 10 licenses - $15 / year per license",
        features: [
          "Fully functional app",
          "Mac and Windows",
          "Frequent updates",
        ],
        link: "/contact-us.html",
      },
    ],
  },
];

// Función para generar el HTML de un plan
const createPlan = (plan) => `
  <div class="pricing-card flex flex-col p-[15px] md:px-[15px] md:py-[0px] flex-1">
    <p class="text-[21px] font-normal leading-[21px] mb-[20px] text-[#888888]">
      ${plan.price}
    </p>
    <div class="flex flex-col justify-between gap-[40px] h-full">
      <ul class="list-disc text-[14px] font-normal text-[#888888] space-y-[0px] ml-[20px]">
        ${plan.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
      <button
        class="w-full h-[38px] text-[16px] text-white font-normal cursor-pointer rounded-[9px] bg-[#006EFF] hover:bg-blue-600 transition-colors"
      onclick="window.open('${plan.link}', '_blank')"
        >
        Get Offer
      </button>
    </div>
  </div>
`;

// Función para renderizar todos los productos
const renderPricing = () => {
  const container = document.getElementById("pricing-sections");
  container.innerHTML = products
    .map((product, index) => {
      const isLast = index === products.length - 1;
      return `
      <div class="mt-[30px] space-y-[37px]">
          <div class="flex flex-col gap-[20px]">
            <h3 class="text-[31px] font-normal text-white">
              ${product.name}
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              ${product.plans.map(createPlan).join("")}
            </div>
          </div>
            ${!isLast ? '<hr class="border-none h-[1px] bg-[#404040]" />' : ""}
          </div>
      `;
    })
    .join("");
};

renderPricing();
