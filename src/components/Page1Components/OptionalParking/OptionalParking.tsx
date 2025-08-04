type OptionalParkingProps = {
  highlightedText?: string;
  heading: string;
  subheading: string;
  description:string;
  style:string;
}


export default function OptionalParking({highlightedText,heading,subheading,description,style}:OptionalParkingProps){
    return(
        <>
 <main className={`min-h-screen bg-black text-white px-4 sm:px-12 relative ${style} text-center sm:text-left`}>
  {/* Top Content Block */}
  <div className="w-full max-w-[500px]  text-center sm:max-w-[600px] sm:ml-[6%]">
    {/* Red Label */}
    <p className="text-[#AD2239] text-[13px] max-w-[500px] sm:text-[20px] text-center font-bold  mb-2 sm:mb-4">
      {highlightedText}
    </p>

    {/* Heading */}
    <h1 className="text-[28px] sm:text-[48px] max-w-[500px] font-semibold leading-tight  sm:leading-[56px] text-white mb-4">
      {heading}
      <span className="text-[#4B4B4B]">*</span>
    </h1>

    {/* Subheading */}
    <p className="text-[#ABABAB] w-[450px] ms-5 text-[13px] sm:text-[16px] leading-[22px] sm:leading-[24px] max-w-[90%] sm:max-w-[500px] mx-auto sm:mx-0">
      {subheading}
    </p>
  </div>

  {/* Disclaimer (Bottom Center on all screens) */}
  <p className="absolute bottom-6 sm:bottom-10 ms-6 text-[10px] sm:text-[13px] text-[#5a5a5a] max-w-[320px] sm:max-w-[600px] text-center px-4">
    {description}
  </p>
</main>




        </>
    )
}