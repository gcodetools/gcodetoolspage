
const ContactUs = ()=>{

  return (

      <main className="flex flex-col gap-[10px]">
        <section className="flex flex-col gap-[10px]">
          <div className="h-[193px]">
            <img
              src="./assets/clay-slicer.png"
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
      </main>

  )

}



export default ContactUs
