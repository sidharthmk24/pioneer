import Image from "next/image"


export default function DriveAlert(){

    return(
        <>
      <section className="min-h-screen bg-black text-white flex flex-col justify-between px-6 py-10 text-center">
      
      {/* Top Icon */}
      <div className="pt-20">
        <Image
          src="/images/svgs/dangerIcon.svg" // Replace with your warning icon path
          alt="Warning Icon"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col items-center space-y-15 pb-8">
        {/* Headings */}
        <div>
          <p className="text-red-500 text-sm font-medium mb-3">
            Built to Notice Before You Do
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Advanced Driving Alerts
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            The VREC-Z820DC monitors lane position, vehicle distance, and traffic flow to deliver timely alerts and help you stay in control.
          </p>
        </div>

        {/* Alert Features */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-13">
          {/* Lane Departure Alert */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/svgs/laneIcon.svg"
              alt="Lane Departure"
              width={60}
              height={60}
            />
            <p className="text-white font-medium text-sm">Lane Departure Alert</p>
          </div>

          {/* Forward Collision Alert */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/svgs/collisionIcon.svg"
              alt="Forward Collision"
              width={60}
              height={60}
            />
            <p className="text-white font-medium text-sm">Forward Collision Alert</p>
          </div>

          {/* Stop & Go Alert */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src="/images/svgs/stopnGoIcon.svg"
              alt="Stop and Go"
              width={60}
              height={60}
            />
            <p className="text-white font-medium text-sm">Stop & Go Alert</p>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}