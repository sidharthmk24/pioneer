"use client";

import Image from "next/image";

export default function ZenVue() {
  return (
     <section className="relative w-full min-h-screen bg-gradient-to-b from-[#00000] via-[#a82137] to-[#000000] text-white">
      {/* Main Content */}
      <div className="relative z-10 max-w-[screen] mx-auto px-4 sm:px-6 md:px-[4rem] lg:px-[5rem] py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row justify-between gap-10 sm:gap-14 md:gap-20 items-center lg:items-start">

        {/* Mobile Header */}
        <div className="block sm:block md:block lg:hidden text-center w-full mt-4 sm:mt-6">
          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-white/70">Control at Your Fingertips</p>
        </div>

        {/* ZenVue Heading (Mobile) */}
        <div className="block sm:block md:block lg:hidden w-full text-center mt-[-2rem] sm:mt-[-3rem] md:mt-[-4rem]">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.1] font-bold">ZenVue</h1>
        </div>

        {/* App Description (Mobile) */}
        <p className="block sm:block md:block lg:hidden text-white/80 text-[12px] sm:text-[13px] md:text-[14px] max-w-sm mx-auto text-center mt-[-2rem] sm:mt-[-2.5rem] md:mt-[-3rem] px-3">
          The Pioneer ZenVue Dash Camera App gives you instant access to your recordings,
          making it easy to view, download, and share footage on the go. With its intuitive,
          user-friendly interface, the experience is seamless from start to finish.
        </p>

        {/* Mobile Image */}
        <div className="block sm:block md:block lg:hidden flex justify-center mt-[-4rem] sm:mt-[-4.5rem] md:mt-[-5rem]">
          <div className="w-full sm:w-[300px] md:w-[500px] h-auto">
            <Image
              src="/images/zenVueIMg.png"
              alt="Mobile Device"
              width={1200}
              height={1200}
              className="w-full h-auto object-contain drop-shadow-7xl"
            />
          </div>
        </div>

        {/* Mobile "Available on" + Logos */}
        <div className="block sm:block md:block lg:hidden text-center mt-[-1rem] sm:mt-[-1.5rem] md:mt-[-2rem]">
          <p className="text-[12px] sm:text-[13px] text-white/70 mb-2">Available on</p>
          <div className="flex justify-center gap-4 sm:gap-5 md:gap-6">
            <Image
              src="/images/googlePlay.png"
              alt="Google Play"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/images/appStore.png"
              alt="App Store"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Content (Desktop) */}
        <div className="hidden sm:hidden md:hidden lg:block flex-1 space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left order-3 lg:order-none">
          <p className="text-sm text-white/70 sm:mx-6 md:mx-8 lg:mx-8">Control at Your Fingertips</p>
          <h1 className="tracking-wider text-[200px] sm:text-[220px] md:text-[200px] lg:text-[150px] lg2:text-[240px] leading-none mt-[-10px] sm:mt-[-12px] md:mt-[-14px] ms-5 font-bold text-white">Zen</h1>
          <p className="text-white/80 text-[12px] lg-text-[10px] sm:text-[14px] md:text-base max-w-md mx-auto sm:mx-8 md:mx-10 lg:mx-2 mt-6 sm:mt-7 md:mt-8">
            The Pioneer ZenVue Dash Camera App gives you instant access to your recordings,
            making it easy to view, download, and share footage on the go. With its intuitive,
            user-friendly interface, the experience is seamless from start to finish.
          </p>
        </div>

        {/* Center Image for Desktop */}
        <div className="hidden sm:hidden md:hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-[54%] -translate-y-[48%] z-20 w-auto h-[600px] sm:h-[650px] md:h-[700px] items-center justify-center">
          <Image
            src="/images/zenVueIMg.png"
            alt="Mobile Device"
            width={1000}
            height={1000}
            className="drop-shadow-3xl w-full h-full object-cover"
          />
        </div>

        {/* Right Title & Store Buttons (Desktop) */}
        <div className="hidden sm:hidden md:hidden lg:flex flex-col items-end mt-[-3rem] sm:mt-[-3.2rem] md:mt-[-3.5rem] flex-2 text-right space-y-4">
          <h1 className="text-[200px] sm:text-[220px] md:text-[240px] lg:text-[150px] lg2:text-[240px] tracking-wider ml-5 mt-[4rem] sm:mt-[4.6rem] md:mt-[5.3rem] leading-none font-bold text-white">Vue</h1>
          <p className="text-sm text-white/70 mr-4 sm:mr-5 md:mr-6">Available on</p>
          <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-0 mr-4 sm:mr-5 md:mr-6">
            <Image
              src="/images/googlePlay.png"
              alt="Google Play"
              width={140}
              height={45}
              className="object-contain"
            />
            <Image
              src="/images/appStore.png"
              alt="App Store"
              width={140}
              height={45}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
