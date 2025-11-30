const Generic = ()=>{
  return (
      <main className="flex flex-col gap-[10px]">
        <section className="flex flex-col gap-[10px] min-h-[176px]">
          <h1
            className="break-words text-[56px] text-white font-normal leading-[100%]"
          >
            Return Policy / Disclaimer / Terms of use.
          </h1>
        </section>
        <hr className="border-none h-[1px] bg-[#404040] my-[4px]" />
        <section>
          <div className="space-y-3 text-[14px] font-normal text-[#888888]">
            <p>
              Our applications are designed to encourage experimentation, giving
              you the flexibility and customization options to tailor G-code to
              the specific needs of your machine. Your continued support helps
              cover the hosting costs for this platform.
            </p>
            <p>
              Just a heads up, Vector to Gcode doesn’t have any features for
              controlling bit sizes on CNC routers.
            </p>

            <p>
              We don’t take responsibility for any damages or problems that
              might happen because of using these tools, but we’re here to help
              if you run into any issues or have specific requests. Just let us
              know, and we’ll do our best to fix them or give you solutions.
            </p>
            <p>
              For one-time payment applications, we offer a full 7-day
              satisfaction guarantee. If you’re not completely happy with the
              product, we’ll give you a full refund. For subscription
              applications, you can cancel anytime without any trouble.
            </p>
            <p>
              By the way, the licenses are only meant to be used on one computer
              at a time.
            </p>
          </div>
        </section>
      </main>
  )
}


export default Generic
