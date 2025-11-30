import { useEffect } from "react";


const GcodeCloner = ()=>{
useEffect(
()=>{
      const accordions = document.querySelectorAll("button[aria-expanded]");

      accordions.forEach((btn, index) => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(".icon img");
        const title = btn.querySelector("h3");

        content.style.maxHeight = "0px";
        content.style.overflow = "hidden";
        content.style.transition = "max-height 0.3s ease-in-out";
        btn.setAttribute("aria-expanded", "false");

        if (index === 0) {
          openAccordion(btn, content, icon, title);
        }

        btn.addEventListener("click", () => {
          const isOpen = btn.getAttribute("aria-expanded") === "true";

          accordions.forEach((otherBtn) => {
            if (otherBtn !== btn) {
              const otherContent = otherBtn.nextElementSibling;
              const otherIcon = otherBtn.querySelector(".icon img");
              const otherTitle = otherBtn.querySelector("h3");
              closeAccordion(otherBtn, otherContent, otherIcon, otherTitle);
            }
          });

          if (isOpen) {
            closeAccordion(btn, content, icon, title);
          } else {
            openAccordion(btn, content, icon, title);
          }
        });
      });

      function openAccordion(btn, content, icon, title) {
        content.style.maxHeight = content.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
        icon.src = "../assets/minus.svg";
        btn.classList.add("active");
      }

      function closeAccordion(btn, content, icon, title) {
        content.style.maxHeight = "0px";
        btn.setAttribute("aria-expanded", "false");
        icon.src = "../assets/plus.svg";
        btn.classList.remove("active");
      }

      window.addEventListener("resize", () => {
        accordions.forEach((btn) => {
          const content = btn.nextElementSibling;
          if (btn.getAttribute("aria-expanded") === "true") {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      });



},[]
)


return(
      <main className="flex flex-col gap-[10px]">
        <section className="flex flex-col gap-[10px]">
          <div className="flex flex-col md:flex-row md:justify-between h-[121px]">
            <h1
              className="h-[67px] md:h-auto text-[56px] text-white font-normal leading-[100%]"
            >
              Gcode Cloner
            </h1>
            <p className="text-[18px] text-[#787878] font-normal leading-[100%]">
              <span className="text-[20px] text-white font-normal">2.0</span> for
              Mac and Windows
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-[12px]">
            <a
              href="https://gcodetools.gumroad.com/l/GcodeCloner2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-[200px] h-[38px] text-[16px] text-white font-normal cursor-pointer rounded-[9px] bg-[#006EFF] hover:bg-blue-600 transition-colors"
            >
              Subscribe $2/month
            </a>
            <a
              href="https://gcodetools.gumroad.com/l/GcodeClonerOneTimePayment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-[215px] h-[38px] text-[16px] text-white font-normal cursor-pointer rounded-[9px] bg-[#006EFF] hover:bg-blue-600 transition-colors"
            >
              One Time Payment $40
            </a>
          </div>
        </section>
        <hr className="border-none h-[1px] bg-[#404040] my-[4px]" />
        <section className="flex flex-col gap-[10px]">
          <div className="h-[100%]">
            <img
              src="../assets/Gcode_Cloner_Hero.png"
              alt="clay-slicer-img"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <hr className="border-none h-[1px] bg-[#404040] my-[4px]" />
          <div className="min-h-[125px]">
            <p className="text-[20px] text-white font-normal">
              Cut hours from your process. Instantly clone files, fine-tune
              spacing, and preview results—Gcode Cloner keeps your workflow
              fast, smooth, and efficient.
            </p>
          </div>
          <div></div>
        </section>
        <section>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >01</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Customize Code Uniquely for Each Instance
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Apply the same custom code to all instances or assign unique
                  custom codes to individual instances, tailoring them to your
                  specific needs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >02</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Duplicate G-code Files Instantly
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Clone any G-code file on your computer with just a few clicks,
                  making it easy to create multiple identical parts or patterns.
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >03</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Customizable Object Spacing
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Fine-tune the spacing between cloned objects to fit your
                  machine’s build area perfectly, ensuring efficient material
                  use and smooth production.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >04</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Live Preview of Clones
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Visualize your cloned layout in real time. Verify placement,
                  spacing, and alignment before generating your new G-code file.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >05</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Supports Custom G-code Commands
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Easily handles files with custom commands, ensuring
                  compatibility with pauses, tool changes, and other advanced
                  operations.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >06</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Build Area Validation (Soon)
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Prevent errors with automatic checks that ensure your cloned
                  layout fits within your machine’s build area.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >07</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Cross-Platform Compatibility
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Available for macOS and Windows, so you can work on the
                  platform you prefer.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >08</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Intuitive, User-Friendly Interface
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Navigate and use Gcode Cloner effortlessly, whether you’re a
                  beginner or an expert.
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >09</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Regular Updates and Dedicated Support
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal pt-[13px] pb-[26px]"
              >
                <p>
                  Stay ahead with regular feature updates and rely on our
                  support to address any issues or questions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >xx</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Ejemplo de acordeón con las dimensiones de la img definidos
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col md:flex-row gap-[39px] pt-[13px] pb-[26px]"
              >
                <div
                  className="h-[193px] w-full overflow-hidden flex items-center justify-center flex-1"
                >
                  <img
                    src="../assets/clay-slicer.png"
                    alt="Clay Slicer preview"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div
                  className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal flex-1"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum. Why
                    do we use it?.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className="accordion-btn flex justify-between items-center gap-[18px] w-full py-[14px] border-t border-[#404040] cursor-pointer text-[#BCBCBC]"
              aria-expanded="false"
            >
              <span
                className="text-[14px] font-normal leading-[100%] w-[60px] md:w-[100px] text-left"
                >xx</span
              >
              <h3
                className="text-[14px] font-normal leading-[100%] text-left flex-1"
              >
                Ejemplo de acordeón sin dfinir dimensiones de la imagen (nunca
                va a ocupar más de la mitad del contenedor)
              </h3>
              <div className="mr-4 icon">
                <img
                  src="../assets/plus.svg"
                  alt="plus-icon"
                  className="w-[22px] h-[18px]"
                />
              </div>
            </button>

            <div
              className="accordion-content px-[16px] md:pr-[37px] md:pl-[118px] overflow-hidden transition-all duration-300 ease-in-out max-h-0"
            >
              <div
                className="flex flex-col md:flex-row gap-[39px] pt-[13px] pb-[26px] items-start"
              >
                <div
                  className="flex items-center justify-center flex-shrink-0 md:max-w-[50%] w-auto h-auto"
                >
                  <img
                    src="../assets/clay-slicer.png"
                    alt="Clay Slicer preview"
                    className="w-full h-auto object-contain object-center"
                  />
                </div>

                <div
                  className="flex flex-col gap-3 text-sm text-[#888888] leading-[17px] font-normal flex-1"
                >
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

)




}


export default GcodeCloner





