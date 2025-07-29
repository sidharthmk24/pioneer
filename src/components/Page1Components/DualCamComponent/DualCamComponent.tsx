

type DualCamComponentProps = {
    highlightedText?: string;
    heading?: string;   
    subheading?: string;
};

export default function DualCamComponent ({highlightedText, heading, subheading}: DualCamComponentProps) {
    return(
        <>
         <main className="min-h-screen bg-black flex items-center justify-center items-start px-4 py-22">
      <div className="text-center max-w-xl">
        <p className="text-[#AD2239]/90 text-[20px]  font-bold mb-4">
          {highlightedText}
        </p>
        <h1 className="text-white text-[32px] md:text-[56px] font-medium mb-4">
          {heading}
        </h1>
        <p className="text-[#ABABAB] text-[14px] md:text-[18px] leading-relaxed">
          {subheading}
        </p>
      </div>
    </main>
        
        </>
    )
}