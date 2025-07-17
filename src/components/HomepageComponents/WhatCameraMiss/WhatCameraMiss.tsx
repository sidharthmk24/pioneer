


export default function WhatCamerMiss(){

    return(
        <>
           <div className="min-h-screen  text-white">
      {/* Header Section */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          See What Most Cameras Miss
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          Real footage in real conditions. The VTECH Z301DC doesn't just record, 
          it gives you clarity and context.
        </p>
      </div>

      {/* Main Comparison Section */}
      <div
  className="relative max-w-7xl mx-auto px-4"
  style={{
    backgroundImage: "url('/images/dashcamhPhoto.png')", // adjust path as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="relative">
    {/* Background Image Container */}
    <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
      {/* Split Screen Effect */}
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Left Side - Normal Dashcams */}
        <div className="relative  flex items-start p-8">
          <div className="text-left">
            <div className="flex items-center mb-2">
              <span className="text-[#DFDFDF] text-[13px]">Normal</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#DFDFDF] text-[13px]">Dashcams</span>
            </div>
          </div>
          {/* Dark overlay to simulate poor quality */}
          <div className="absolute inset-0 "></div>
        </div>
        
        {/* Right Side - With Night Vision */}
        <div className="relative ">
          <div className="absolute top-8 right-8 text-right">
            <div className=" px-4 py-2 rounded-lg">
              <div className="text-[13px] text-[#DFDFDF] mb-1">With Night Vision AI &</div>
              <div className="text-[13px] text-[#DFDFDF]">STARVIS image sensor</div>
            </div>
          </div>
          {/* Lighter overlay to simulate better quality */}
          <div className="absolute inset-0"></div>
        </div>
      </div>

      {/* Center Divider Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px  transform -translate-x-1/2"></div>
      
      {/* Road/Street Scene Simulation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Simulated street lights */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2  rounded-full opacity-60"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1  rounded-full opacity-40"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2  rounded-full opacity-60"></div>
          <div className="absolute top-1/4 right-1/4 w-1 h-1  rounded-full opacity-40"></div>
          
          {/* Road lines simulation */}
          <div className="absolute bottom-1/3 left-0 right-0 h-px"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-px "></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-px "></div>
        </div>
      </div>
    </div>

    {/* Bottom Text Overlay */}
    <div className="absolute bottom-16 left-8 right-8 text-center">
      <h2 className="text-3xl md:text-4xl ml-[-3rem] font-bold mb-4">
        Designed for the Details
      </h2>
      <p className="text-gray-300 max-w-4xl mx-auto text-[16px]">
        Most dashcams blur the truth at night. The Z301DC, equipped with night vision AI and a STARVIS sensor, captures 
        license plates, movements and moments even in low light.
      </p>
    </div>
  </div>
</div>


      {/* Bottom Questions Section */}
   <div className="mt-16 pb-16">
  <div className="max-w-4xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center text-center gap-6">
      
      {/* Drive late? - with top underline */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-medium border-b  text-gray-300">Drive late?</h3>
      </div>

      {/* On the road daily? */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-medium text-gray-300">On the road daily?</h3>
      </div>

      {/* Car left unattended? */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-medium text-gray-300">Car left unattended?</h3>
      </div>
    </div>
  </div>
</div>

    </div>
        </>
    )
}