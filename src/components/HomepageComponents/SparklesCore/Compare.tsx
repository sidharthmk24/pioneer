"use client"
import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utlis"
import { IconDotsVertical } from "@tabler/icons-react"
import { SparklesCore } from "./SparklesCore"

type tabDataProps = {
  heading: string
  subheading: string
  compareHeading: string
  compareSubheading: string
  tabtitle: string
  image1: string
  image2: string
  labelLeft?: string
  labelRight?: string
}

export const Compare = ({ tabs }: { tabs: tabDataProps[] }) => {
  const [sliderXPercent, setSliderXPercent] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)

  const sliderRef = useRef<HTMLDivElement>(null)
  const currentTab = Array.isArray(tabs) && tabs.length > activeTab ? tabs[activeTab] : null
  if (!currentTab) return null

  useEffect(() => {
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth)
    }
  }, [sliderRef.current, sliderXPercent])

  const handleStart = (clientX: number) => setIsDragging(true)
  const handleEnd = () => setIsDragging(false)

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = (x / rect.width) * 100
    requestAnimationFrame(() => {
      setSliderXPercent(Math.max(0, Math.min(100, percent)))
    })
  }

  const sliderX = (sliderXPercent / 100) * containerWidth

  return (
    <section className="w-full bg-black text-white flex flex-col items-center py-16 px-4">
      <div className="text-center max-w-xl mb-12">
        <h2 className="text-3xl sm:whitespace-nowrap md:text-4xl font-semibold mb-4">
          {currentTab.heading}
        </h2>
        <p className="text-[#ABABAB] text-[13px] w-full md:text-base">
          {currentTab.subheading}
        </p>
      </div>

      <div className="w-full max-w-7xl px-3 h-[370px] sm:h-[600px] md:h-[800px] rounded-xl overflow-hidden relative mt-10">
        {activeTab !== 2 ? (
          <div
            ref={sliderRef}
            className="relative w-full h-full"
            style={{ cursor: "col-resize" }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={handleEnd}
            onMouseMove={(e) => isDragging && handleMove(e.clientX)}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            <motion.div
              className="absolute top-5 left-5 text-white text-xs sm:text-sm z-30 pointer-events-none"
              style={{
                WebkitMaskImage: `linear-gradient(to right, black ${sliderX}px, transparent ${sliderX}px)`,
                maskImage: `linear-gradient(to right, black ${sliderX}px, transparent ${sliderX}px)`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            >
              {currentTab.labelLeft || "Normal Dashcams"}
            </motion.div>

            <motion.div
              className="absolute top-8 right-12 text-white text-xs sm:text-lg w-[150px] text-right z-30 pointer-events-none"
              style={{
                WebkitMaskImage: `linear-gradient(to left, black ${containerWidth - sliderX}px, transparent ${containerWidth - sliderX}px)`,
                maskImage: `linear-gradient(to left, black ${containerWidth - sliderX}px, transparent ${containerWidth - sliderX}px)`,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            >
              {currentTab.labelRight || "VREC-H520DC’s crisp 2K HDR"}
            </motion.div>

            <motion.div
              className="h-full w-px absolute top-0 z-30 bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: `${sliderXPercent}%` }}
              transition={{ duration: 0 }}
            >
              <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-white/40 via-transparent to-transparent opacity-50" />
              <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-white/60 via-transparent to-transparent opacity-100" />
              <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
                <MemoizedSparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={800}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-lg">
                <IconDotsVertical className="h-4 w-4 text-black" />
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 w-full h-full overflow-hidden rounded-4xl"
              style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
              transition={{ duration: 0 }}
            >
              <img
                src={currentTab.image1}
                alt="Before"
                className="object-cover w-full h-full select-none"
                draggable={false}
              />
            </motion.div>

            <img
              src={currentTab.image2}
              alt="After"
              className="absolute top-0 left-0 z-[19] object-cover w-full h-full select-none"
              draggable={false}
            />

            <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-50 px-4 max-w-[90%]">
              <h3 className="text-white text-2xl font-semibold">
                {currentTab.compareHeading}
              </h3>
              <p className="text-white text-base mt-2">
                {currentTab.compareSubheading}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={currentTab.image2}
              alt="Full"
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
              draggable={false}
            />
            <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20 px-4 max-w-[90%]">
              <h3 className="text-white text-2xl font-semibold">
                {currentTab.compareHeading}
              </h3>
              <p className="text-white text-base mt-2">
                {currentTab.compareSubheading}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex justify-center mt-12">
        <div className="flex justify-center gap-5 sm:gap-6 md:gap-27 flex-wrap sm:flex-nowrap max-w-full">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "relative font-semibold text-[12px] sm:text-sm md:text-base transition-all duration-300 text-center",
                activeTab === index
                  ? "text-white after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:w-[100px] sm:after:w-[100px] lg:after:w-[190px] after:h-[2px] after:bg-white after:rounded-full"
                  : "text-gray-400 hover:text-gray-600/40"
              )}
            >
              <h4 className="sm:w-full w-[110px]">{tab.tabtitle}</h4>
            </button>
          ))}
        </div>
      </div>

      <div className="block md:hidden text-center mt-6 px-4 max-w-sm">
        <h3 className="text-white text-base font-semibold">
          {currentTab.compareHeading}
        </h3>
        <p className="text-gray-300 text-xs mt-2">
          {currentTab.compareSubheading}
        </p>
      </div>
    </section>
  )
}

const MemoizedSparklesCore = React.memo(SparklesCore)
