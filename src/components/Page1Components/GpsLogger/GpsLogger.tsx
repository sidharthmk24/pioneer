
export default function GpsLogger() {

    return(
        <>
        <main className="flex min-h-screen items-center justify-center bg-black px-4 text-center">
      <div className="space-y-4">
       <div className="py-[12rem] space-y-6">
         <p className="text-[#AD2239] text-[20px] font-bold tracking-wide">
          Every Trip Logged
        </p>
        <h1 className="text-[#FFFFFF] text-4xl md:text-[56px] font-medium ">
          GPS Logger<span className="text-gray-500/50">*</span>
        </h1>
        <p className="text-[#ABABAB]/80 text-sm md:text-[18px] max-w-lg mx-auto  ">
          Automatically record your driving routes with GPS logging, <br />
          making it easy to revisit past trips whenever needed.
        </p>
       </div>
        <p className="text-[18px] text-[#313131]  max-w-4xl mx-auto">
          *Disclaimer: Route tracking is available only for footage downloaded to the user’s
          mobile device via the app. An active internet connection is required to display route
          details on the map.
        </p>
      </div>
    </main>
        </>
    )

}