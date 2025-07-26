"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)



export default function AnimateDiv() {
  const leftOverlayRef = useRef(null)
  const rightOverlayRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
     scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // when top of section hits 80% of viewport
        toggleActions: "play reverse play reverse", // play on enter
        scrub: true, // smooth scrubbing
      },
     defaults: { duration: 1.5, ease: "power4.inOut" }
   })

 
      tl.to(leftOverlayRef.current, {

        keyframes:[
{clipPath: "polygon(50% 0%, 50% 25%, 0% 68.5%, 0% 52%, 0% 0%)"},
{clipPath: "polygon(50% 0%, 50% 25%, 14.75% 88.78%, 0% 85%, 0% 0%)"},

{clipPath: "polygon(50% 0%, 50% 25%, 35.5% 79.03%, 0% 74%, 0% 0%)"},
{clipPath: "polygon(50% 0%, 50% 25%, 50% 79.53%, 0% 74%, 0% 0%)"},



        ],
      
      duration: 1.5,
      ease: "power2.inOut",
    },0)
 tl.to(rightOverlayRef.current, {
  keyframes: [
    {
      clipPath:
        " polygon(50% 0%, 50% 25%, 100% 67.5%, 100% 50%, 100% 0%);",
    },
    {
      clipPath:
        "polygon(50% 0%, 50% 25%, 90% 91.03%, 100% 81.75%, 100% 1%);",
    },
    {
      clipPath:
        "polygon(50% 0%, 50% 25%, 50% 83%, 100% 83%, 100% 0%)",
    },
    {
      clipPath:
        "polygon(50% 0%, 50% 25%, 50% 83%, 100% 83%, 100% 0%)",
    },
  ],
  duration: 1.5,
  ease: "power2.inOut",
}, 0)
  }, [])

  return (
    <div  className="w-full h-screen bg-black relative overflow-hidden">
      {/* Notched base */}
      <div ref={sectionRef} className="absolute bottom-0 left-0 w-full h-1/2 bg-[#202020] clip-notch z-0" />

      {/* Left triangle overlay */}
      <div
        ref={leftOverlayRef}
        className="absolute top-47 left-0 w-full h-full bg-gray-500 clip-left z-20"
        style={{
          transformOrigin: "top left",
        }}
      />

      {/* Right triangle overlay */}
      <div
        ref={rightOverlayRef}
        className="absolute top-47 right-0 w-full h-full bg-red-500 clip-right z-20"
        style={{
          transformOrigin: "top right",
        }}
      />
    </div>
  )
}
