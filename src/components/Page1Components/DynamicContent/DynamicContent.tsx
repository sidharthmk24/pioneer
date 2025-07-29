


type DynamicContentProps = {  
  
  highlightedText?: string;
  heading?: string;
  subheading?: string;
}


export  default function DynamicContent({highlightedText, heading, subheading}: DynamicContentProps) {
    return (
    <>
<section className="flex  flex-col items-center justify-end sm:items-start sm:justify-center min-h-screen px-6 py-20 sm:px-22 sm:py-22">
  <div className="flex flex-col items-center justify-center text-center relative top-16 sm:top-20 gap-4 sm:gap-0 py-16">
    {/* Subtitle */}
    <p className="text-[#AD2239] text-[16px] sm:text-[20px] font-bold mb-2">
      {highlightedText}
    </p>

    {/* Heading */}
    <h1 className="text-[30px] sm:text-[56px] font-medium leading-tight mb-4">
      {heading}
    </h1>

    {/* Description */}
    <div className="max-w-[400px] text-[#ABABAB] text-[14px] sm:text-[18px] leading-relaxed px-4 sm:px-0">
      <p>
        {subheading}
      </p>
    </div>
  </div>
</section>


    </>
    )}