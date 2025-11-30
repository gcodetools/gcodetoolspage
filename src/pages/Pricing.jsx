import React from "react";
import { products } from "./products";

const PlanCard = ({ plan }) => (
  <div className="pricing-card flex flex-col p-[15px] md:px-[15px] md:py-[0px] flex-1">
    <p className="text-[21px] font-normal leading-[21px] mb-[20px] text-[#888888]">
      {plan.price}
    </p>

    <div className="flex flex-col justify-between gap-[40px] h-full">
      <ul className="list-disc text-[14px] font-normal text-[#888888] space-y-[0px] ml-[20px]">
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <button
        className="w-full h-[38px] text-[16px] text-white font-normal cursor-pointer rounded-[9px] bg-[#006EFF] hover:bg-blue-600 transition-colors"
        onClick={() => window.open(plan.link, "_blank")}
      >
        Get Offer
      </button>
    </div>
  </div>
);

const ProductSection = ({ product, isLast }) => (
  <div className="mt-[30px] space-y-[37px]">
    <div className="flex flex-col gap-[20px]">
      <h3 className="text-[31px] font-normal text-white">
        {product.name}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {product.plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>

    {!isLast && <hr className="border-none h-[1px] bg-[#404040]" />}
  </div>
);

export const Pricing = () => {
  return (
    <main className="flex flex-col gap-[10px]">
      <section className="flex flex-col gap-[10px] min-h-[112px] sm:min-h-[176px]">
        <h1 className="break-words text-[56px] text-white font-normal leading-[100%]">
          Pricing
        </h1>
      </section>

      <hr className="border-none h-[1px] bg-[#404040] my-[4px]" />

      <section>
        {products.map((product, index) => (
          <ProductSection
            key={index}
            product={product}
            isLast={index === products.length - 1}
          />
        ))}
      </section>
    </main>
  );
};

export default Pricing

