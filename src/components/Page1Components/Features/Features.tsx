'use client'

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";


export default function Features() {
  const features = [
    {
      id: 1,
      title: "Trusted Innovation for Over 85Years",
      content: "For over 85 years, Pioneer has led in precision engineering and innovation. Our dashcams are built for real drivers, combining reliable performance, smart safety features, and clear recording that never misses a moment.",
      image: "/images/dashCamLogo.png",
    },
    {
      id: 2,
      title: "Control That Goes Beyond the Camera",
      content:
        "With the Pioneer ZenValue app, you can instantly view, download and share your footage, turning your smartphone into a seamless command center for your Dash Cam.",
      image: "/images/zenVueImg.png",
    },
    {
      id: 3,
      title: "Built for Real-World Conditions",
      content: "With the Pioneer ZenValue app, you can instantly view, download and share your footage, turning your smartphone into a seamless command center for your Dash Cam.",
      image: "/images/dashRightImg.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1); // Default: middle one expanded

  return (

    <>
      <div className="min-h-screen bg-[#0D0D0D] px-4 py-10 md:px-22 md:py-20 flex justify-center items-center">
        {/* White Box Container */}
        <div
          className={`
    bg-black rounded-2xl min-h-[90vh] shadow-lg w-full max-w-screen-xl 
    flex flex-col lg:flex-row items-center justify-center 
    gap-12 transition-all
    ${features[activeIndex]?.id === 3
              ? "pl-4 pr-0 py-10 md:py-20 lg:pl-12 lg:pr-0"
              : "px-4 py-10 md:py-20 lg:px-12"}
  `}

        >                    {/* Left Text Section */}
          <div className="w-full lg:w-1/2 space-y-8 max-w-lg text-white">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-t border-gray-300 pt-6 transition-all duration-500"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? -1 : index)
                  }
                  className="w-full text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-[20.51px] md:text-[30px]   font-bold leading-tight">
                      {feature.title}
                    </h2>
                    <span className="text-2xl">
                      {activeIndex === index ? <Minus /> : <Plus />}
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#ABABAB]/80 text-[14px] md:text-[18px]  mt-4">
                        {feature.content}
                      </p>

                      {/* Mobile-only image */}
                      <div className="block lg:hidden mt-4 relative">
                        {/* Main image */}
                        <Image
                          src={feature.image}
                          alt="."
                          width={500}
                          height={300}
                          className={`w-full h-auto object-contain ${feature.id === 3 ? "rounded-xl shadow-lg" : ""
                            }`}
                        />

                        {/* ✅ Overlay (mobile) only if id === 3 */}
                        {feature.id === 3 && (
                          <Image
                            src="/images/svgs/dangerIcon.svg"  // replace with your path
                            alt="Overlay"
                            width={50}
                            height={120}
                            className="absolute top-53 right-17 z-10 opacity-90"
                          />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Image (desktop only) */}
          <div className="hidden lg:flex w-1/2 justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeIndex]?.image}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative w-full flex justify-center"
              >
                {/* Main Image */}
                <Image
                  src={features[activeIndex]?.image}
                  alt="Feature"
                  width={500}
                  height={800}
                  className={`w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-[550px] xl:max-w-lg object-cover ${features[activeIndex]?.id === 3 ? "rounded-xl shadow-2xl ms-41 relative left-11" : "ms-12"
                    }`}
                />

                {/* ✅ Overlay Image — only when id === 3 */}
                {features[activeIndex]?.id === 3 && (
                  <Image
                    src="/images/svgs/dangerIcon.svg" // replace with your actual overlay path
                    alt="Overlay"
                    width={60}
                    height={100}
                    className="absolute top-75 right-14 z-10 opacity-90"
                  />
                )}
              </motion.div>

            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}