
import DriveSmarter from '@/components/HomepageComponents/DriveSmarter/DriveSmarter'
import DriveAlert from '@/components/HomepageComponents/DrivingAlert/DriveAlert'
import EverythingNeedToKnow from '@/components/HomepageComponents/EverythingNeedToKnow/EverythingNeedToKnow'
import ProductFeatureTable from '@/components/HomepageComponents/ProductFeatureTable/ProductFeatureTable'
import { Compare } from '@/components/HomepageComponents/SparklesCore/Compare'
import WhatCamerMiss from '@/components/HomepageComponents/WhatCameraMiss/WhatCameraMiss'
import ZenVue from '@/components/HomepageComponents/ZenVue/ZenVue'
import DriveAlert1 from '@/components/Page1Components/DriveAlert/DriveAlert1'
import DualCamComponent from '@/components/Page1Components/DualCamComponent/DualCamComponent'
import DynamicContent from '@/components/Page1Components/DynamicContent/DynamicContent'
import Features from '@/components/Page1Components/Features/Features'
import FieldOfVision from '@/components/Page1Components/FieldOfVision/FieldOfVision'
import GpsLogger from '@/components/Page1Components/GpsLogger/GpsLogger'
import GSensor from '@/components/Page1Components/GSensor/GSensor'
import HeroSection from '@/components/Page1Components/HeroSection/HeroSection'
import IpsDisplay from '@/components/Page1Components/IpsDisplay/IpsDisplay'
import OptionalParking from '@/components/Page1Components/OptionalParking/OptionalParking'
import SharpVision from '@/components/Page1Components/SharpVision/SharpVision'
import VideoResolution from '@/components/Page1Components/VideoResolution/VideoResolution'
import React from 'react'
import { faqData } from '../utils/FaqData/FaqData'
import FourKVideo from '@/components/Page1Components/FourKVideo/FourKVideo'
import HdrRecording from '@/components/Page1Components/HdrRecording/HdrRecording'
import { defaultProducts } from '../utils/ProductData/ProductData'


const page = () => {
    return (
        <>
            <section>
                <HeroSection
                    heading="4K Clarity Meets AI Intelligence"
                    subheading="VREC-Z820DC Keeps the Road on Record"
                    headingMobile="Records What You Don’t See"
                />
            </section>
            <section>
                <VideoResolution

                    highlightedText="Sharp Footage in Low Light"
                    heading="AI Powered Night Vision"
                    subheading="An 8MP sensor that captures sharp, detailed video with high sensitivity, preserving image quality even during night drives and low-light conditions."
                />
            </section>

            <section>
                <FourKVideo

                    highlightedText="Details Stay Intact"
                    heading="4K Video Resolution"
                    subheading="The VREC-Z820DC records in true 4K, producing sharp video that makes plates, signs and unexpected moments easy to identify when needed."/>
            </section>
            <section>
                <SharpVision

                    highlightedText="Clarity That Goes Further"
                    heading="High-Performance Imaging"
                    subheading='The VREC-Z820DC uses a Sony STARVIS IMX415 sensor, an f/1.8 aperture and a 7-layer glass lens. Together, they capture sharp, bright footage with accurate detail even in low or uneven lighting.'
                />
            </section>
            <section>
                <DynamicContent
style="flex-col items-center justify-end sm:items-start sm:justify-center"
                    highlightedText='Sharp On-Screen Clarity'
                    heading='3.2" IPS Display'
                    subheading="The 8.1 cm built-in screen lets you review footage and adjust settings with sharp detail, all without taking up space on your dash."

                />
            </section>
            <section>
                <HdrRecording

                    highlightedText='Adapts to Any Light'
                    heading='WDR & HDR Recording'
                    subheading='It adjusts exposure in real time, preserving visibility and fine detail, so footage stays clear in both bright and low-light conditions.'

                />
            </section>


            <section>
                <DriveAlert1

                    highlightedText="Built to Notice Before You Do"
                    heading="ADAS  Alerts"
                    subheading="The VREC-Z820DC monitors lane position, vehicle distance and traffic flow to deliver timely alerts and help you stay in control."
                    alert1Image="/images/svgs/laneIcon.svg"
                    alert2Image="/images/svgs/collisionIcon.svg"
                    alert3Image="/images/svgs/stopnGoIcon.svg"
                    alert1="Lane Departure Alert"
                    alert2="Forward Collision Alert"
                    alert3="Stop & Go Alert"
                />
            </section>

            <section>
                <DualCamComponent


                    highlightedText="Every Angle Matters"
                    heading="Dual Camera setup"
                    subheading="The VREC-Z820DC pairs a 4K front and HD rear camera to record both directions at once, delivering clearer evidence and wider coverage."
                />
            </section>

            <section>
                <FieldOfVision


                    highlightedText="Comprehensive Coverage"
                    heading="137° Wide-Angle View"
                    subheading="Gives you a broader view of the road, capturing side lanes, nearby traffic and details that other cameras might miss."


                />
            </section>
            <section>
                <OptionalParking
                                style='flex flex-col items-center sm:items-start justify-center sm:justify-center'

                    highlightedText='Monitors While You’re Away'
                    heading='Optional Parking Mode'
                    subheading='Parking mode requires additional installation of an external Hardwire Kit, which enables power supply to the Dash Camera directly from the vehicle battery.'
                    description='*Disclaimer: Parking mode requires additional installation of an external Hardwire Kit, which enables power supply to the Dash Camera directly from the vehicle battery.'


                />
            </section>
            <section>
                <GpsLogger

                    highlightedText='Every Trip Logged'
                    heading='GPS Logger'
                    subheading='Automatically record your driving routes with GPS logging, making it easy to revisit past trips whenever needed.'
                    description='*Disclaimer: Route tracking is available only for footage downloaded to the user’s mobile device via the app. An active internet connection is required to display route details on the map.'

                />
            </section>

            <section>

                <Compare

                    tabs={[
                        {
                            heading: "See What Most Cameras Miss",
                            subheading: "Real footage in real conditions. The VREC-Z820DC doesn’t just record, it gives you clarity and context.",
                            compareHeading: "Designed for the Details",
                            compareSubheading: "Most dashcams blur the truth at night. The Z820DC, equipped with night vision AI and a STARVIS sensor, captures license plates, movements and moments even in low light.",
                            tabtitle: "Drive Late?",
                            image1: "/images/GLOW_BEFORE.webp",
                            image2: "/images/GLOW_AFTER.webp",

                        },
                        {
                            heading: "See What Most Cameras Miss",
                            subheading: "Real footage in real conditions. The VREC-Z820DC doesn’t just record, it gives you clarity and context.",
                            compareHeading: "Clarity That Keeps Up With Your Commute ",
                            compareSubheading: "From sharp sunlight to shadowy underpasses, the Sony STARVIS sensor adapts in real time — handling glare, contrast and light shifts with ease for clear and consistent footage in every driving condition.",
                            tabtitle: "On The Road Daily?",
                            image1: "/images/NOISE_BEFORE.webp",
                            image2: "/images/NOISE_AFTER.webp",
                        },
                        {
                            heading: "See What Most Cameras Miss",
                            subheading: "Real footage in real conditions. The VREC-Z820DC doesn’t just record, it gives you clarity and context.",
                            compareHeading: "Clarity That Keeps Up With Your Commute",
                            compareSubheading: "From sharp sunlight to shadowy underpasses, the Sony STARVIS sensor adapts in real time — handling glare, contrast and light shifts with ease for clear and consistent footage in every driving condition.",
                            tabtitle: "Prefer Dual 4K Coverage?",
                            image2: "/images/CarBroken.png",
                            image1: "/images/page1Images/frontCamera2.webp",
                        }


                    ]}


                />
            </section>
            <section>
                <ZenVue />
            </section>
            <section>
                <ProductFeatureTable 
                
                 products={defaultProducts}
  priorityProductIndex={0}
                />
            </section>
            <section>
                <EverythingNeedToKnow

                    faqData={faqData.set1}
                />
            </section>

            <section>
                <DriveSmarter

                    subText="Drive with confidence, capture every moment, & stay protected. Explore what the Z820DC brings to every drive."
                    image="/images/modelImages/dashCamLogo.png"
                />
            </section>

            <Features />

        </>)
}

export default page