const Index= ()=>{
return (
      <main className="flex flex-col gap-[10px]">
        <section className="flex flex-col gap-[10px] min-h-[176px]">
          <h1
            className="break-words text-[56px] text-white font-normal leading-[100%]"
          >
            The Future of Making, In Every Artist’s Hands
          </h1>
        </section>
        <hr className="border-none h-[1px] bg-[#404040] my-[4px]" />
        <section
          className="flex flex-col sm:flex-row sm:justify-beteewn gap-[40px] text-[20px] text-white font-normal leading-[21px]]"
        >
          <div className="space-y-[10px]">
            <div className="flex-1 h-[150px] overflow-hidden">
              <img
                src="./assets/clay-slicer.png"
                alt="img-1"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p>
              No steep learning curves. No barriers. Just powerful, intuitive
              tools that expand what’s possible for creators everywhere.
            </p>
          </div>
          <div className="space-y-[10px]">
            <div className="flex-1 h-[150px] overflow-hidden">
              <img
                src="./assets/clay-slicer.png"
                alt="img-2"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p>
              No steep learning curves. No barriers. Just powerful, intuitive
              tools that expand what’s possible for creators everywhere.
            </p>
          </div>
          <div className="space-y-[10px]">
            <div className="flex-1 h-[150px] overflow-hidden">
              <img
                src="./assets/clay-slicer.png"
                alt="img-3"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p>
              No steep learning curves. No barriers. Just powerful, intuitive
              tools that expand what’s possible for creators everywhere.
            </p>
          </div>
        </section>
      </main>
)
}

export default Index
