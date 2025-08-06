"use client";

import Footer from "@/components/Common/Footer/Footer";
import AnimateDiv from "@/components/HomepageComponents/AnimateDiv/AnimateDiv";
import BuiltInGps from "@/components/HomepageComponents/BuiltInGps/BuiltInGps";
import DriveSmarter from "@/components/HomepageComponents/DriveSmarter/DriveSmarter";
import DriveAlert from "@/components/HomepageComponents/DrivingAlert/DriveAlert";
import DualCam from "@/components/HomepageComponents/DualCam/DualCam";
import EverythingNeedToKnow from "@/components/HomepageComponents/EverythingNeedToKnow/EverythingNeedToKnow";
import HdrRecording from "@/components/HomepageComponents/HdrRecordingComponent/HdrRecording";
import ParkingMode from "@/components/HomepageComponents/ParkingMode/ParkingMode";
import ProductFeatureTable from "@/components/HomepageComponents/ProductFeatureTable/ProductFeatureTable";
import { Compare } from "@/components/HomepageComponents/SparklesCore/Compare";
import { SparklesCore } from "@/components/HomepageComponents/SparklesCore/SparklesCore";
// import { SparklesCore } from "@/components/HomepageComponents/SparklesCore/SparklesCore";
import WhatCamerMiss from "@/components/HomepageComponents/WhatCameraMiss/WhatCameraMiss";
import WideCam from "@/components/HomepageComponents/WideCam/WideCam";
import ZenVue from "@/components/HomepageComponents/ZenVue/ZenVue";
import metaUrl from '../../public/Images/dashboard/headLogo.png'




export const metadata = {
  title: 'Rubber Tapping App',
  description: 'Monitor and manage rubber tapping efficiently.',
  openGraph: {
    title: 'Rubber Tapping App',
    description: 'Monitor and manage rubber tapping efficiently.',
    url: 'https://pioneer1.vercel.app/',
    siteName: 'Pioneer',
    images: [
      {
        url: {metaUrl},
        width: 800,
        height: 600,
        alt: 'Rubber Tapping',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};


export default function Home() {

  
  return (
    <>

      <section>
        <HdrRecording />
      </section>
<section>
  <AnimateDiv/>
</section>
      <section>
        <DriveAlert />
      </section>
      <section>
        <DualCam />
      </section>
      <section>
        <WideCam />
      </section>
   


      <section>
        <ParkingMode />
      </section>
         <section>
        <BuiltInGps />
      </section>
      {/* <section>
        <Compare />


      </section>


      <section className="mt-10rem">
        <ZenVue />
      </section>
      <section>
        <ProductFeatureTable />
      </section>
      <section>
        <EverythingNeedToKnow />
      </section>
      <section className="mt-[10rem]" >
        <DriveSmarter />
      </section> */}

      <section>
        <Footer />
      </section>
    </>
  )
}