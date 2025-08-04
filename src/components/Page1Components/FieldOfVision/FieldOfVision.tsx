
'use client'

import { clipPath } from "framer-motion/client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"


type FieldOfVisionProps = {
  highlightedText?: string;
  heading: string;
  subheading: string;
}

gsap.registerPlugin(ScrollTrigger)

export default function FieldOfVision({ highlightedText, heading, subheading }: FieldOfVisionProps) {
  const clipRef = useRef(null)
  const MobileRef = useRef(null)
    const contentRef = useRef(null)

  useEffect(() => {

    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.content',
        start: "top top ",
        toggleActions: "play reverse play reverse",
        scrub: true,
        pin: true,
        
        end: "+=300", // Adjust this value based on your content height

      },
      defaults: { duration: 1.5, ease: "power4.inOut" },
    });

    tl.to(
      clipRef.current,
      {
        // no keyframes needed here, just a single clip-path change
        //  clipPath: "polygon(49.25% 0%, 49.25% 0%, 49.25% 0%, 49.25% 0%,  50.41% 66.01%)",
        //   duration: 1.5,
        keyframes: [
          { clipPath: "polygon(0% 26%, 0% 0%, 100% 0%, 100% 25%, 50.41% 66.01%)" },
          { clipPath: "polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%, 50.41% 66.01%)" },
          { clipPath: "polygon(49.75% 0%, 49.75% 0%, 49.75% 0%, 49.75% 0%, 50.41% 66.01%)" }


        ]

      },
      0
    );
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: MobileRef.current,
        start: "top 30%",
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
    )
    //  const tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: contentRef.current,
    //     start: "top top",
    //     end: "+=400", // Adjust as needed
    //     scrub: true,
    //     pin: true,
    //     markers: true,
    //   },
    // });
  }, []);
  


  return (
    <>
      <main className="relative min-h-screen bg-black overflow-hidden text-white px-4 hidden sm:block " >
        {/* Top angled background */}
        <div
          //       style={{
          //   background: 'radial-gradient(circle, #ffffffc9 0%, #8a8a8aff 50%,  #8a8a8aff, transparent 80%)',
          // }}
          ref={clipRef}
          className="absolute top-0 left-0 w-full h-[600px] bg-[#202020] z-0 clip-path-angle" />

        {/* Content */}
        <div 
        // ref={contentRef}
        className=" content  relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center min-h-screen max-w-7xl mx-auto pt-32 lg:pt-12 px-6 lg:px-12">
          {/* Left side heading */}
          <div className="space-y-2 max-w-sm">
            <p className="text-sm text-[#AD2239] text-center font-bold">{highlightedText}</p>
            <h1 className="text-[56px] sm:text-4xl font-medium text-white">
              {heading}
            </h1>
          </div>

          {/* Right side description */}
          <div className="mt-8 lg:mt-0 max-w-md text-[18px] text-[#ABABAB] leading-relaxed lg:text-center">
            <p>
              {subheading}
            </p>
          </div>
        </div>

        {/* Custom Tailwind clip-path class */}
        {/* <style jsx>{`
       
      `}</style> */}
      </main>



      {/* mobile section */}
      <section className="relative bg-gray min-h-screen block z-0 lg:hidden bg-[#1A1A1A] text-white text-center px-6 overflow-hidden">
        <div className="relative pt-[200px] z-10">
          {/* Red small heading */}
          <div className="text-[13px] font-semibold text-[#D0142C] mb-[12px]">
            {highlightedText}
          </div>

          {/* Main heading */}
          <h2 className="text-[22px] font-semibold leading-[26px] mb-[12px]">
            {heading}
          </h2>

          {/* Paragraph */}
          <p className="text-[13px] leading-[20px] text-[#A0A0A0] max-w-[320px] mx-auto">
            {subheading}
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