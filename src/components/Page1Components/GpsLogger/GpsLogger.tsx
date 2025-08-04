
type GpsLoggerProps = {
  highlightedText?: string;
  heading: string;
  subheading: string;
  description: string;

}

export default function GpsLogger({highlightedText, heading, subheading , description}: GpsLoggerProps) {

    return(
        <>
<main className="flex flex-col justify-between min-h-screen bg-black px-4 text-center pt-10 sm:pt-0">
  {/* Top (Mobile: top center, Desktop: center) */}
  <div className="flex flex-col justify-start sm:justify-center items-center flex-grow space-y-4 sm:space-y-6">
    <p className="text-[#AD2239] text-[14px] sm:text-[20px] font-bold tracking-wide">
      {highlightedText}
    </p>
    <h1 className="text-[#FFFFFF] text-[28px] sm:text-[56px] font-medium">
      {heading}<span className="text-gray-500/50">*</span>
    </h1>
    <p className="text-[#ABABAB]/80 text-[13px] sm:text-[18px] max-w-lg mx-auto">
      {subheading}
    </p>
  </div>

  {/* Bottom Section (Always bottom) */}
  <div className="pb-8 sm:pb-12">
    <p className="text-[14px] sm:text-[18px] text-[#313131] max-w-4xl mx-auto">
      {description}
    </p>
  </div>
</main>



        </>
    )

}