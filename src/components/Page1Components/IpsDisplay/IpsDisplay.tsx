
   
   type IpsDisplayProps = {

  highlightedText?: string;
  heading: string;
  subheading?: string;

   }
   
   export    default function IpsDisplay({highlightedText, heading, subheading}: IpsDisplayProps) {
        return(
<>
<main className="min-h-screen  flex flex-col items-center justify-end px-4 pb-26">
  <div className="text-center space-y-4 max-w-[320px]">
    {/* Subtitle */}
    <p className="text-[14px] sm:text-[12px] text-[#AD2239] font-medium tracking-wide">
      {highlightedText}
    </p>

    {/* Heading */}
    <h1 className="text-[30.88px] sm:text-[24px] text-white font-semibold">
      {heading}
    </h1>

    {/* Description */}
    <p className="text-[14px] sm:text-[12px] text-[#ABABAB] leading-relaxed">
      {subheading}
    </p>
  </div>
</main>


</>
        )}