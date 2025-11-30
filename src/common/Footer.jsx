import { useEffect } from "react";
import { productSelector } from "../scripts/productSelector.js";

export default function Footer() {
  useEffect(()=>{
  setTimeout(() => {
    /* === LINKS DINÁMICOS (PRODUCTOS) === */
    productSelector();
  });
  },[])

  return(
    <footer className="mt-14">
      <hr className="border-none h-[1px] bg-[#404040] my-[4px]" />
      <div className="flex flex-col gap-[16px] mt-[32px] sm:flex-row sm:justify-between sm:gap-6 sm:mt-[56px]">
        <div className="flex flex-col gap-[5px]">
          <a href="/contact-us" className="text-[#BCBCBC] font-normal hover:text-white text-[14px]">Contact</a>
          <a href="/generic" className="text-[#BCBCBC] font-normal hover:text-white text-[14px]">Return Policy / Disclaimer</a>
          <a href="/pricing" className="text-[#BCBCBC] font-normal hover:text-white text-[14px]">Pricing</a>
        </div>
        <div>
          <div className="products-selector flex flex-col gap-[5px] min-w-[123px]"></div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <a
            href="/generic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BCBCBC] font-normal hover:text-white text-[14px]"
          >
            Vector to Gcode Help
          </a>
          <a
            href="/generic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BCBCBC] font-normal hover:text-white text-[14px]"
          >
            Vector to Gcode 2 Help
          </a>
          <a
            href="/generic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BCBCBC] font-normal hover:text-white text-[14px]"
          >
            Help installing the apps
          </a>
          <a
            href="https://drive.google.com/drive/folders/1NCuPX4pKpB91eopCgkL5j95MAfkB2Pxa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BCBCBC] font-normal hover:text-white text-[14px]"
          >
            Clay Slicer Tutorials
          </a>
        </div>
        <div className="flex flex-col gap-[12px]">
          <a
            href="https://drive.google.com/file/d/1JplCx7n6jYyGBjFTZerHtSdBoplon1m6/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BCBCBC] font-normal hover:text-white text-[14px]"
          >
            Freebies
          </a>
          <a
            href="https://www.instagram.com/gcodetools/reels/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/instagram.svg" alt="instagram-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
