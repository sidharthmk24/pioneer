



type SharpVisionProps = {

  highlightedText?: string;
  heading: string;
  subheading?: string;
}

export  default function SharpVision({highlightedText, heading, subheading}: SharpVisionProps) {
    return (
    <>
<section className="flex flex-col items-center sm:items-end justify-end min-h-screen px-4 py-12 sm:px-24 sm:py-22">
  <div className="flex flex-col items-center sm:items-end justify-center text-center sm:text-right w-full max-w-2xl">
    {/* Subtitle */}
    <p className="text-[#AD2239] text-[16px] sm:text-[20px] font-bold mb-2">
      {highlightedText}
    </p>

    {/* Heading */}
    <h1 className="text-[30.88px] sm:text-[56px] font-medium text-white leading-tight mb-4">
      {heading}
    </h1>

    {/* Description */}
    <p className="text-[#ABABAB] text-[14px] sm:text-[15px] leading-relaxed px-4 sm:px-0 max-w-lg">
      {subheading}
    </p>
  </div>
</section>



    </>
    
    )
}