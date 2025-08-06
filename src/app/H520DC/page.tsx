
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
import { defaultProducts } from '../utils/ProductData/ProductData'

const page = () => {
    return (
        <>
            <section>
                <HeroSection
                    heading="When Detail Matters the Most"
                    subheading="VREC‑H520DC captures sharp 2K video, even in low light and on the move."
                />
            </section>
            <section>
                <VideoResolution

                    highlightedText="See the Road in High Definition"
                    heading="2K Video Resolution"
                    subheading=" From morning commutes to late-night returns, the front camera records in sharp 2K while the rear captures in Full HD. Whether it’s a close call or a scenic stretch, you’ll have a clear, reliable record from both angles."
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
                <GSensor
                    style='flex items-end sm:items-center justify-center sm:justify-end'


                    highlightedText='Automatic Event Recording'
                    heading='Built-in G-Sensor'
                    subheading='Stay protected with built-in G-sensor technology that automatically locks important footage during emergencies.'

                />
            </section>
            <section>
                <DynamicContent
                    style="flex-col items-center justify-end sm:items-center sm:justify-bottom"
                    highlightedText='Sharp On-Screen Clarity'
                    heading='3.2" IPS Display'
                    subheading="The 8.1 cm built-in screen lets you review footage and adjust settings with sharp detail, all without taking up space on your dash."

                />
            </section>


            <section>
                <DriveAlert1

                    highlightedText="ADAS Enabled"
                    heading="Smart Alerts for Safer Driving"
                    subheading="Smart Alerts for Safer Driving Get audio alerts for lane departure, forward collision and stop-and-go alert so you stay aware of your surroundings and respond faster to sudden changes on the road."
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


                    highlightedText="Dual Camera Setup"
                    heading="Front and Rear in Focus"
                    subheading="The VREC‑H520DC captures your journey from both ends with 2K clarity in front and Full HD behind, giving you balanced, high-quality footage wherever the road takes you."
                />
            </section>

            <section>
                <FieldOfVision


                    highlightedText="Wide Angle View"
                    heading="140° Field of Vision"
                    subheading="The lens captures more of what’s around you including lanes, nearby vehicles and surroundings so you get a complete view of every drive."


                />
                {/* <DynamicContent
                style="flex-col items-center justify-end sm:items-start sm:justify-center"
                                    highlightedText='Sharp On-Screen Clarity'
                                    heading='3.2" IPS Display'
                                    subheading="The 8.1 cm built-in screen lets you review footage and adjust settings with sharp detail, all without taking up space on your dash."
                
                                /> */}

            </section>
            <section>
                <OptionalParking
                    style='flex flex-col items-center sm:items-start justify-center sm:justify-center'

                    highlightedText='Stay Secure While Parked'
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
                            tabtitle: "Drive every day?",

                            heading: "Discover the Tools Built for Real Roads",
                            subheading: "Smartly built for everyday drives, the H520DC offers clear 2K HDR footage, wide-road coverage and helpful driving alerts, all tuned for real conditions.",
                            compareHeading: "Clear Footage in Motion and Light",
                            compareSubheading: "With 2K HDR recording, the H520DC keeps your video sharp across bright sun, moving traffic, and fast-changing streets.",
                            image1: "/images/GLOW_BEFORE.webp",
                            image2: "/images/GLOW_AFTER.webp",

                        },
                        {
                            tabtitle: "Need Wider Visibility?",

                            heading: "Discover the Tools Built for Real Roads",
                            subheading: "Smartly built for everyday drives, the H520DC offers clear 2K HDR footage, wide-road coverage and helpful driving alerts, all tuned for real conditions.",
                            compareHeading: "Built for a Broader View ",
                            compareSubheading: "The VREC-H520DC captures a wider view with its 140-degree lens, letting you see more of the road, side lanes, and unexpected moments others often miss.",
                            image1: "/images/NOISE_BEFORE.webp",
                            image2: "/images/NOISE_AFTER.webp",
                        },
                        {

                            tabtitle: "Prefer Dual Coverage?",
                            heading: "Discover the Tools Built for Real Roads",
                            subheading: "Smartly built for everyday drives, the H520DC offers clear 2K HDR footage, wide-road coverage and helpful driving alerts, all tuned for real conditions.",
                            compareHeading: "Coverage That Looks Both Ways",
                            compareSubheading: "The dual-channel Dash Cam records front and rear in high resolution, with sharp 2K footage ahead and Full HD behind for clear synchronized coverage.",
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
                    priorityProductIndex={1}
                />            </section>
            <section>
                <EverythingNeedToKnow
                   collectionName="faq_detailed_specs_H520DC"

                    faqData={faqData.set2}
                />
            </section>

            <section>
                <DriveSmarter

                    subText="Drive with confidence, capture every moment, & stay protected. Explore what the H520DC brings to every drive."
                    image="/images/modelImages/H520DC1.png"
                />
            </section>

            <Features />


        </>)
}

export default page