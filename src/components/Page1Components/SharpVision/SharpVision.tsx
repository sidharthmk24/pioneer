



type SharpVisionProps = {

  highlightedText?: string;
  heading: string;
  subheading?: string;
}

export  default function SharpVision({highlightedText, heading, subheading}: SharpVisionProps) {
    return (
    <>

<section className="flex flex-col  items-center justify-end sm:items-end min-h-screen px-6 py-12 sm:p-22">
  <div className="flex flex-col items-center justify-center text-center">
    {/* Subtitle */}
    <p className="text-[#AD2239] text-[16px] sm:text-[20px] font-bold mb-2">
      {highlightedText}
    </p>

    {/* Heading */}
    <h1 className="text-[24.88px] sm:text-[56px] font-medium leading-tight mb-4">
      {heading}
    </h1>

    {/* Description */}
    <div className="max-w-lg text-[#ABABAB] text-[14px] sm:text-[15px] leading-relaxed px-2 sm:px-0">
      <p>
       {subheading}
      </p>
    </div>
  </div>
</section>


    </>
    
    )
}