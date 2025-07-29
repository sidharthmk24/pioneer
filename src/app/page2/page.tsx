
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

                    highlightedText='Automatic Event Recording'
                    heading='Built-in G-Sensor'
                    subheading='Stay protected with built-in G-sensor technology that automatically locks important footage during emergencies.'

                />
            </section>


            <section>
                <DriveAlert1

                    highlightedText="Built to Notice Before You Do"
                    heading="ADAS  Alerts"
                    subheading="The VREC-Z820DC monitors lane position, vehicle distance and traffic flow to deliver timely alerts and help you stay in control."
                    alert1Image="/images/svgs/laneIcon.svg"
                    alert2Image="/images/svgs/collisionIcon.svg"
                    alert3Image="/images/svgs/stowebpoIcon.svg"
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
                            // image2: "/images/page1Images/frontCamera2.webp",
                        }


                    ]}


                />
            </section>
            <section>
                <ZenVue />
            </section>
            <section>
                <ProductFeatureTable
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


</>  )
}

export default page