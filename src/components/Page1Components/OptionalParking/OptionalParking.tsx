
export default function OptionalParking(){
    return(
        <>
        <main className="min-h-screen bg-gray px-4 py-12 relative sm:py-32 sm:px-24 flex flex-col justify-between  sm:justify-center">
  <div className="max-w-md text-center mx-auto sm:space-y-4 space-y-5 pt-[100px] sm:pt-0">
    {/* Red Label */}
    <p className="text-[13px] text-[#AD2239] font-semibold sm:text-[24px]">
      Stay Secure While Parked
    </p>

    {/* Main Heading */}
    <h1 className="text-[30px]  font-medium  leading-[36px] sm:text-[56px] sm:font-medium sm:leading-snug text-white">
      Optional Parking Surveillance<span className="text-[#4B4B4B]">*</span>
    </h1>

    {/* Description */}
    <p className="text-[14px] leading-[20px] text-[#ABABAB]/80 px-3 max-w-[420px] mx-auto sm:text-[18px] sm:text-[#ABABAB] sm:leading-relaxed sm:max-w-sm">
      When connected to power using a hardwire kit, the
      VREC-H520DC activates during motion or impact events,
      recording what happens even when your car is off.
    </p>
  </div>

  {/* Disclaimer */}
  <p className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[11px] text-[#5a5a5a] max-w-md min-w-sm px-4 text-center sm:text-[18px] sm:text-[#313131] sm:max-w-lg sm:left-7 sm:translate-x-0">
    *Disclaimer: This feature is available only with additional
    setup and components, sold separately.
  </p>
</main>

        </>
    )
}