"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type RightFieldOfViewProps = {
  highlightedText?: string;
  heading: string;
  subheading: string;
};

export default function RightFieldOfView({
  highlightedText,
  heading,
  subheading,
}: RightFieldOfViewProps) {
  const clipRef = useRef<HTMLDivElement | null>(null); // ✅ correct place

  useEffect(() => {
    if (!clipRef.current) return;

    gsap.to(clipRef.current, {
      scrollTrigger: {
        trigger: clipRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
     keyframes: [
            
      
      {clipPath:" polygon(69% 0%, 75% 0%, 60% 50%, 75% 100%, 69% 100%, 0% 100%, 0% 0%)"},
      { clipPath: " polygon(100% 0%, 100% 0%, 60% 50%, 100% 100%, 100% 100%, 0% 100%, 0% 0%)", },
    
              { clipPath: "polygon(100% 0.25%, 100% 50%, 60% 50%, 100% 50%, 100% 100%, 0% 100%, 0% 0%)" },
            ]
    });
  }, []);

  return (
   <section className="relative h-screen  bg-[#1a1a1a] flex justify-end items-center overflow-hidden">
  {/* Clipped Background on the LEFT side */}
  <div
    ref={clipRef}
    className="absolute top-0 left-0 z-10 h-full w-full bg-black z-0 clip-field-view-left"
  ></div>

  {/* Content stays on the RIGHT side */}
  <div className="relative max-w-md w-[600px] px-6 text-center text-white sm:pr-20 z-0">
    <p className="text-[#AD2239] text-[20px] font-semibold mb-3 leading-snug sm:text-base">
      {highlightedText}
    </p>
    <h1 className="text-[28px] sm:text-[56px] font-bold mb-4">
      {heading}
    </h1>
    <p className="text-[#ababab] text-sm sm:text-[15px] leading-relaxed">
      {subheading}
    </p>
  </div>
</section>

  );
}
