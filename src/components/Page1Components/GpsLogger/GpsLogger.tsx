
type GpsLoggerProps = {
  highlightedText?: string;
  heading: string;
  subheading: string;
  description: string;

}

export default function GpsLogger({highlightedText, heading, subheading , description}: GpsLoggerProps) {

    return(
        <>
        <main className="flex min-h-screen items-center justify-center bg-black px-4 text-center">
      <div className="space-y-4">
       <div className="py-[12rem] space-y-6">
         <p className="text-[#AD2239] text-[20px] font-bold tracking-wide">
          {highlightedText}
        </p>
        <h1 className="text-[#FFFFFF] text-4xl md:text-[56px] font-medium ">
          {heading}<span className="text-gray-500/50">*</span>
        </h1>
        <p className="text-[#ABABAB]/80 text-sm md:text-[18px] max-w-lg mx-auto  ">
          {subheading}
        </p>
       </div>
        <p className="text-[18px] text-[#313131]    max-w-4xl mx-auto">
          {description}
        </p>
      </div>
    </main>
        </>
    )

}