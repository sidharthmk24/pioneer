



type VideoResolutionProps = {
  highlightedText?: string;
  heading: string;
  subheading?: string;
}


export default function VideoResolution({highlightedText,heading,subheading,}:VideoResolutionProps){
return (
<>
 <section className=" text-center text-white min-h-screen py-24 px-8 md:px-8 lg:px-16 xl:px-20">
  <div className="flex flex-col items-center justify-center min-h-screen">
    {/* Subtitle */}
    <p className="text-[20px] font-medium text-[#AD2239] mb-2">
      {highlightedText}
    </p>

    {/* Title */}
    <h2 className="text-3xl md:text-[56px] font-medium mb-4">
      {heading}
    </h2>

    {/* Description */}
<div className="max-w-[90%] sm:max-w-[400px] md:max-w-[500px] text-center mx-auto">
  <p className="text-[18px] md:text-base text-[#B8B8B8] leading-relaxed">
  {subheading}
  </p>
</div>
  </div>
</section>

</>

)
}