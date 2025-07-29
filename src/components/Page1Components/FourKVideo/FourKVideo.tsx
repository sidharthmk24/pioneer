

type FourKVideoProps = {

    highlightedText?: string;
    heading: string;
    subheading: string;
}

export default function FourKVideo({highlightedText, heading, subheading}: FourKVideoProps) {




return(
 <>
 
  <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        {/* Red Subheading */}
        <p className="text-[#AD2239] font-bold text-[14px] md:text-[16px] mb-2">
         {highlightedText}
        </p>

        {/* Main Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-medium mb-4">
          {heading}
        </h2>

        {/* Description */}
        <p className="text-[#ABABAB] text-[14px] md:text-[16px] leading-relaxed">
          {subheading}
        </p>
      </div>
    </section>
 </>
)

}