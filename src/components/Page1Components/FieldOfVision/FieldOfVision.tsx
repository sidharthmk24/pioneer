
'use client'

import { clipPath } from "framer-motion/client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

export default function FieldOfVision() {
  const clipRef = useRef(null)
  const MobileRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: clipRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        scrub: true,


      },
      defaults: { duration: 1.5, ease: "power4.inOut" },
    });

    tl.to(
      clipRef.current,
      {
        // no keyframes needed here, just a single clip-path change
        clipPath: "polygon(50% 0%, 50% 0%, 50% 63%)",
        duration: 1.5,
      },
      0
    );
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: MobileRef.current,
        start: "top 90%",
        end: "bottom 60%",


        toggleActions: "play reverse play reverse",
scrub: true,
      },
      defaults: { duration: 1.5, ease: "power4.inOut" },
    });

    tl1.to(
      MobileRef.current,
      {

        // needed two keyframes for the chevron effect
        keyframes: [
          { clipPath: " polygon(100% 43.75%, 86% 100%, 12% 100%, 0% 44.75%, 0% 44.75%, 50% 72.13%, 100% 44.75%)", },

          { clipPath: "polygon(100% 17.75%, 86% 100%, 12% 100%, 0% 17.75%, 0% 17.75%, 50% 72.13%, 100% 17.75%)" },

          { clipPath: "polygon(100% 17.75%, 86% 100%, 12% 100%, 0% 17.75%, 0% 0%, 50% 72.13%, 100% 0%)" },
                    { clipPath: "polygon(100% 0%, 86% 100%, 12% 100%, 0% 0%, 49.5% 0%, 50% 72.13%, 49.5% 0%)" }


        ]
      },
      0
    );
  }, []);


  return (
    <>
      <main className="relative min-h-screen bg-black overflow-hidden text-white px-4 hidden sm:block " >
        {/* Top angled background */}
        <div
          //       style={{
          //   background: 'radial-gradient(circle, #ffffffc9 0%, #8a8a8aff 50%,  #8a8a8aff, transparent 80%)',
          // }}
          ref={clipRef} className="absolute top-0 left-0 w-full h-[600px] bg-[#1a1a1a] z-0 clip-path-angle" />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center min-h-screen max-w-7xl mx-auto pt-32 lg:pt-12 px-6 lg:px-12">
          {/* Left side heading */}
          <div className="space-y-2 max-w-sm">
            <p className="text-sm text-[#AD2239] text-center font-bold">Wide Angle View</p>
            <h1 className="text-[56px] sm:text-4xl font-medium text-white">
              140° Field of Vision
            </h1>
          </div>

          {/* Right side description */}
          <div className="mt-8 lg:mt-0 max-w-md text-[18px] text-[#ABABAB] leading-relaxed lg:text-center">
            <p>
              The lens captures more of what’s around you including<br />
              lanes, nearby vehicles and surroundings so you get a<br />
              complete view of every drive.
            </p>
          </div>
        </div>

        {/* Custom Tailwind clip-path class */}
        {/* <style jsx>{`
       
      `}</style> */}
      </main>



      {/* mobile section */}
      <section className="relative bg-black min-h-screen block z-0 lg:hidden bg-[#1A1A1A] text-white text-center px-6 overflow-hidden">
        <div className="relative pt-[200px] z-10">
          {/* Red small heading */}
          <div className="text-[13px] font-semibold text-[#D0142C] mb-[12px]">
            140° Field of Vision
          </div>

          {/* Main heading */}
          <h2 className="text-[22px] font-semibold leading-[26px] mb-[12px]">
            Wide Angle View
          </h2>

          {/* Paragraph */}
          <p className="text-[13px] leading-[20px] text-[#A0A0A0] max-w-[320px] mx-auto">
            The lens captures more of what’s around you including lanes, nearby vehicles and surroundings so you get a complete view of every drive.
          </p>
        </div>

        {/* Chevron bottom shape */}
        <div
         ref={MobileRef}  
         className="absolute  bottom-0   left-[-67] w-[136vw] z-10 h-full bg-black clip-chevron" />
      </section>
    </>
  )
}