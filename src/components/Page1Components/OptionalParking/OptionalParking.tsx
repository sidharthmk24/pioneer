type OptionalParkingProps = {
  highlightedText?: string;
  heading: string;
  subheading: string;
  description:string;
}


export default function OptionalParking({highlightedText,heading,subheading,description}:OptionalParkingProps){
    return(
        <>
   <main className="min-h-screen bg-gray px-4 py-12 relative sm:py-32 sm:px-24 flex flex-col justify-between sm:justify-center">
  <div className="max-w-md text-center sm:space-y-4 space-y-5 pt-[100px] sm:pt-0">
    {/* Red Label */}
    <p className="text-[13px] text-[#AD2239] font-semibold sm:text-[24px]">
      {highlightedText}
    </p>

    {/* Main Heading */}
    <h1 className="text-[30px] font-medium leading-[36px] sm:text-[56px] sm:font-medium sm:leading-snug text-white">
      {heading}<span className="text-[#4B4B4B]">*</span>
    </h1>

    {/* Description */}
    <p className="text-[14px] leading-[20px] text-[#ABABAB]/80 px-0 min-w-[400px] max-w-[500px] sm:text-[18px] sm:text-[#ABABAB] sm:leading-relaxed sm:max-w-sm">
      {subheading}
    </p>
  </div>

  {/* Disclaimer */}
  <p className="absolute bottom-12 left-4 text-[11px] text-[#5a5a5a]  max-w-md px-0 text-center sm:text-[18px] sm:text-[#313131] sm:max-w-lg sm:left-24">
    {description}
  </p>
</main>


        </>
    )
}