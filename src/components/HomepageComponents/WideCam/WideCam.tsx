export default function WideCam(){

    return(
        <>
        {/*  clip-path-custom  */}
         <section className="relative bg-black min-h-screen flex items-center px-6 md:px-16">
      <div className="absolute top-0 left-0 w-full h-72 bg-[#181818]z-0" />

      <div className="relative z-10 flex  flex-col md:flex-row w-full justify-between items-end">
        {/* Left text block */}
        <div className="md:mb-28">
          <p className="text-red-500 text-sm text-center font-medium mb-2">
            Comprehensive Coverage
          </p>
          <h2 className="text-3xl text-center md:text-5xl font-bold leading-tight text-white">
            137° Wide-Angle<br />Lens
          </h2>
        </div>

        {/* Right paragraph */}
        <div className="text-gray-400 text-sm text-center md:max-w-sm md:mb-32">
          <p>
            Gives you a broader view of the road, capturing side<br />
            lanes, nearby traffic, and details that narrower lenses<br />
            might miss.
          </p>
        </div>
      </div>

      {/* Custom clip path style */}
      {/* <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
      `}</style> */}
    </section>
        </>
    )
}