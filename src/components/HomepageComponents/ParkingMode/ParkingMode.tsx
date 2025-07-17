export default function ParkingMode(){

    return(
        <>
            <section className="bg-black min-h-screen text-white flex flex-col justify-center items-start px-6 md:px-30 relative">
      <div className="mb-4">
        <p className="text-red-500 text-sm font-medium">
          Parked, Not Unwatched
        </p>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mb-3">
        Parking Mode
        <sup className="text-gray-500 ml-1 text-base align-super">*</sup>
      </h2>

      <p className="text-gray-400 text-sm md:max-w-md leading-relaxed">
        The VREC-Z820DC stays active even when <br />
        parked, recording any motion or impact to help <br />
        keep your vehicle secure at all times.
      </p>

      <p className="absolute bottom-6 left-6 md:left-30 text-xs text-gray-700">
        *Disclaimer: This feature is available only with additional<br />
        setup and components, sold separately.
      </p>
    </section>
        </>
    )
}