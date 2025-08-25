
import DriveAlert from '@/components/HomepageComponents/DrivingAlert/DriveAlert'
import EverythingNeedToKnow from '@/components/HomepageComponents/EverythingNeedToKnow/EverythingNeedToKnow'
import ProductFeatureTable from '@/components/HomepageComponents/ProductFeatureTable/ProductFeatureTable'
import { Compare } from '@/components/HomepageComponents/SparklesCore/Compare'
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
import DriveSmarter from '@/components/HomepageComponents/DriveSmarter/DriveSmarter'
import HdrRecording from '@/components/Page1Components/HdrRecording/HdrRecording'
import RightFieldOfView from '@/components/Page4Components/RightFieldOfView/RightFieldOfView'
import { defaultProducts } from '../utils/ProductData/ProductData'

const page = () => {





    
    return (
        <>
            <section>
                <HeroSection
                    heading="Compact Design That Stays Out of the Way"
                    subheading="VREC‑H120SC is a compact dash cam that captures clear 1.5K footage while staying out of the way."
                />
            </section>
            <section>
                <VideoResolution

                    highlightedText="Sharper Footage in Any Light"
                    heading="1.5K Recording with WDR"
                    subheading=" The VREC-H120SC captures clear, steady video in all kinds of light, combining 1.5K resolution with smart brightness control for better visibility day and night.(Resolution can be enabled through the ZenVue app.)"
                />
            </section>



            <section>
                <HdrRecording

                    highlightedText='Clarity in Changing Light'
                    heading='Wide Dynamic Range (WDR)'
                    subheading='From tunnels to tree cover, WDR balances bright and dark areas in real time so your footage stays detailed and easy to review.'

                />
            </section>

            <section>
                <DriveAlert1

                    highlightedText="Timely Warnings When It Matters"
                    heading="ADAS Alerts"
                    subheading="Get audio cues for lane departure and forward collision so you can stay aware, avoid surprises and respond faster on busy roads."
                    alert1Image="/images/svgs/laneIcon.svg"
                    alert2Image="/images/svgs/collisionIcon.svg"
                    alert3Image="/images/svgs/stopnGoIcon.svg"
                    alert1="Lane Departure Alert"
                    alert2="Forward Collision Alert"
                    alert3="Stop & Go Alert"
                />
            </section>
            <section>
                <RightFieldOfView



                    highlightedText="A minimal build that delivers maximum road coverage"
                    heading="120° Field of View"
                    subheading="Whether a bike cuts in from the side or something happens just outside your lane, this lens captures it. Designed to record the bigger picture without needing a bulky setup."


                />
            </section>

            <section>
                <DynamicContent
                    style="flex-col items-center justify-end sm:items-start sm:justify-center"
                    highlightedText='Store More Footage with Ease'
                    heading='Supports up to 128GB microSD'
                    subheading="Gives you the space to record and save more of your drives without worrying about running out of memory."

                />
            </section>



            <section>
                <GSensor
                    style='flex items-end sm:items-end justify-center sm:justify-center'

                    highlightedText='Automatic Event Recording'
                    heading='Built-in G-Sensor'
                    subheading='Stay protected with built-in G-sensor technology that automatically locks important footage during emergencies.'

                />
            </section>



            <section>
                <OptionalParking
                    style='flex flex-col items-center sm:items-end justify-center sm:justify-center'
                    highlightedText='Stay Secure While Parked'
                    heading='Optional Parking Mode'
                    subheading='Parking mode requires additional installation of an external Hardwire Kit, which enables power supply to the Dash Camera directly from the vehicle battery.'
                    description='*Disclaimer: Parking mode requires additional installation of an external Hardwire Kit, which enables power supply to the Dash Camera directly from the vehicle battery.'


                />
            </section>








            {/* <section>
                <GpsLogger

                    highlightedText='Every Trip Logged'
                    heading='GPS Logger'
                    subheading='Automatically record your driving routes with GPS logging, making it easy to revisit past trips whenever needed.'
                    description='*Disclaimer: Route tracking is available only for footage downloaded to the user’s mobile device via the app. An active internet connection is required to display route details on the map.'

                />
            </section>

            <section>
                <SharpVision

                    highlightedText="STARVIS 2 Sensor + HDR"
                    heading="Sharp Vision in Every Frame"
                    subheading='Equipped with Sony’s STARVIS 2 sensor and HDR processing, the VREC-H520DC delivers clear, balanced video with improved contrast and visibility, especially in challenging lighting.'
                />
            </section>
            <section>
                <DynamicContent

                    highlightedText='Consistent Clarity in Any Light'
                    heading='High Dynamic Range'
                    subheading="HDR keeps exposure balanced so footage stays sharp and detailed whether you're driving under bright sunlight, through shadows or into low-light conditions."

                />
            </section>
           
         



            <section>
                <DualCamComponent


                    highlightedText="Dual Camera Setup"
                    heading="Front and Rear in Focus"
                    subheading="The VREC‑H520DC captures your journey from both ends with 2K clarity in front and Full HD behind, giving you balanced, high-quality footage wherever the road takes you."
                />
            </section> */}

            <section>

                {/* <DynamicContent
                style="flex-col items-center justify-end sm:items-start sm:justify-center"
                                    highlightedText='Sharp On-Screen Clarity'
                                    heading='3.2" IPS Display'
                                    subheading="The 8.1 cm built-in screen lets you review footage and adjust settings with sharp detail, all without taking up space on your dash."
                
                                /> */}

            </section>




            {/* <section>
                <GpsLogger

                    highlightedText='Every Trip Logged'
                    heading='GPS Logger'
                    subheading='Automatically record your driving routes with GPS logging, making it easy to revisit past trips whenever needed.'
                    description='*Disclaimer: Route tracking is available only for footage downloaded to the user’s mobile device via the app. An active internet connection is required to display route details on the map.'

                />
            </section> */}






            <section>

                <Compare

                    tabs={[
                        {
                            tabtitle: "Need something compact?",

                            heading: "Designed to Keep Things Simple ",
                            subheading: "The VREC-H120SC is built for simplicity with a clean design, Full HD clarity and essential features that fit into any drive, without getting in the way.",
                            compareHeading: "A Compact Fit for Every Drive",
                            compareSubheading: "This model fits neatly into your windshield space without blocking your view. A clean look with no distractions, just smart recording.",
                            image1: "/images/GLOW_BEFORE.webp",
                            image2: "/images/GLOW_AFTER.webp",

                        },
                        {
                            tabtitle: "First dashcam?",

                            heading: "Designed to Keep Things Simple ",
                            subheading: "The VREC-H120SC is built for simplicity with a clean design, Full HD clarity and essential features that fit into any drive, without getting in the way.",
                            compareHeading: "Built for Beginners",
                            compareSubheading: "The VREC-H120SC keeps things simple with clear recording and no complicated setup, making it ideal if you're new to dashcams.",
                            image1: "/images/NOISE_BEFORE.webp",
                            image2: "/images/NOISE_AFTER.webp",
                        },
                        {

                            tabtitle: "Want a simple setup? ",
                            heading: "Designed to Keep Things Simple ",
                            subheading: "The VREC-H120SC is built for simplicity with a clean design, Full HD clarity and essential features that fit into any drive, without getting in the way.",
                            compareHeading: "Clarity in a minimal design ",
                            compareSubheading: "The VREC-H120SC records in 1296p with a 2MP sensor, giving you sharper footage that makes it easier to read plates, spot signs and review details when it matters.",
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
                    // products={defaultProducts}
                    priorityProductIndex={3}
                />
            </section>
            <section>
                <EverythingNeedToKnow
                   collectionName="faq_detailed_specs_H120SC"

                    // faqData={faqData.set3}
                />
            </section>

            <section>
                <DriveSmarter

                    subText="Drive with confidence, capture every moment, & stay protected. Explore what the H120SC brings to every drive."
                    image="/images/modelImages/H120SC1.png"
                />
            </section>

            <Features />


        </>)
}

export default page