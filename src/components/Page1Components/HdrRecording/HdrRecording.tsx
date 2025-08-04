

type HdrRecordingProps = {

  highlightedText?: string;
  heading?: string;
  subheading?: string;

}


export  default function HdrRecording({highlightedText, heading, subheading}: HdrRecordingProps) {
    return (
    <>
<main className="min-h-screen  w-full flex items-end justify-center px-6 pb-12 sm:pb-24">
  <div className="text-center ms-2 space-y-4 max-w-3xl">
    <p className="text-[14px] sm:text-[20px] font-bold text-[#AD2239] tracking-wide">
      {highlightedText}
    </p>
    <h1 className="text-[30px] sm:text-[56px] font-medium text-white">
      {heading}
    </h1>
    <p className="text-[15px] text-gray-400 leading-snug">
      {subheading}
    </p>
  </div>
</main>



    </>
    )
}