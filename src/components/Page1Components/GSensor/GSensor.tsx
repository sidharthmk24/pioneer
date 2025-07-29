

type GSensorProps = {

  highlightedText?: string;
  heading?: string;
  subheading?: string;

}


export  default function GSensor({highlightedText, heading, subheading}: GSensorProps) {
    return (
    <>
<main className="min-h-screen min-w-full  flex flex-col justify-end sm:justify-center sm:flex-row items-center sm:items-end  px-6 sm:pr-24">
  <div className="text-center space-y-4 max-w-3xl mb-12 sm:mb-0">
    <p className="text-[20px] font-bold text-[#AD2239] tracking-wide">
      {highlightedText}
    </p>
    <h1 className="text-2xl sm:text-[56px] font-medium text-white">
      {heading}
    </h1>
    <p className="text-[15px] text-gray-400 leading-snug mb-8">
      {subheading}
    </p>
  </div>
</main>


    </>
    )
}