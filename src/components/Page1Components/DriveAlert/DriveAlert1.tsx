import Image from "next/image";

export default function DriveAlert1() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-between px-4 sm:px-6 py-10 text-center">
      {/* Top Icon */}
      <div className="pt-50 sm:pt-20">
        <Image
          src="/images/svgs/dangerIcon.svg"
          alt="Warning Icon"
          width={80} // smaller on mobile
          height={80}
          className="mx-auto sm:w-[130px] sm:h-[100px]"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col items-center space-y-12 sm:space-y-15 pb-8">
        {/* Headings */}
        <div>
          <p className="text-[#AD2239] text-[14px] sm:text-[20px] font-bold mb-5 sm:mb-3">
            ADAS Enabled
          </p>
          <h2 className="text-[25px] sm:text-[56px] font-semibold mb-5 sm:mb-4 leading-tight sm:leading-none">
            Smart Alerts for Safer Driving
          </h2>
          <p className="text-[#ABABAB] text-[12px] sm:text-[18px] max-w-md sm:max-w-4xl mx-auto leading-snug sm:leading-relaxed">
            Get audio alerts for lane departure, forward collision and stop-and-go alert so you stay aware of your surroundings and respond faster to sudden changes on the road.
          </p>
        </div>

        {/* Alert Features */}
        <div className="flex flex-row sm:flex-row justify-center items-center gap-8 sm:gap-13 mt-6 sm:mt-0">
          {/* Lane Departure Alert */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/svgs/laneIcon.svg"
              alt="Lane Departure"
              width={40}
              height={40}
              className="sm:w-[60px] sm:h-[60px]"
            />
            <p className="text-white font-medium text-[10px] sm:text-sm">
              Lane Departure Alert
            </p>
          </div>

          {/* Forward Collision Alert */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/svgs/collisionIcon.svg"
              alt="Forward Collision"
              width={40}
              height={40}
              className="sm:w-[60px] sm:h-[60px]"
            />
            <p className="text-white font-medium text-[10px] sm:text-sm">
              Forward Collision Alert
            </p>
          </div>

          {/* Stop & Go Alert */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/svgs/stopnGoIcon.svg"
              alt="Stop and Go"
              width={40}
              height={40}
              className="sm:w-[60px] sm:h-[60px]"
            />
            <p className="text-white font-medium text-[10px] sm:text-sm">
              Stop & Go Alert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
