
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
import { defaultProducts } from '../utils/ProductData/ProductData'

const page = () => {
    return (
        <>
            <section>
                <HeroSection
                    heading="Every Drive Backed by Proof"
                    subheading="The VREC‑H320SC combines real-time driver alerts with built-in G Sensor for emergency recording."
                />
            </section>
            <section>
                <VideoResolution

                    highlightedText="Precision in Motion"
                    heading="Full HD Recording"
                    subheading=" The front camera records in crisp 1080p, giving you sharp visuals for everyday drives, traffic incidents or unexpected moments."
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
                    style="flex-col items-center justify-end sm:items-start sm:justify-center"
                    highlightedText='Sharp On-Screen Clarity'
                    heading='3.2" IPS Display'
                    subheading="The 8.1 cm built-in screen lets you review footage and adjust settings with sharp detail, all without taking up space on your dash."

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
                <FieldOfVision


                    highlightedText="See More Than Just the Lane Ahead"
                    heading="139° Wide-Angle Lens"
                    subheading="Captures multiple lanes and surrounding details, giving you a broader view of every situation on the road."


                />
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
                            tabtitle: "Want Driving Alerts?",

                            heading: "Get More from Your Daily Drive",
                            subheading: "The VREC-H320SC adds smart driving support, automatic event recording and clear video built for real road conditions.",
                            compareHeading: "Helps You Focus on the Drive",
                            compareSubheading: "Built-in alerts respond to sudden shifts and lane drifts, giving you a second set of eyes when the road gets busy.",
                            image1: "/images/GLOW_BEFORE.webp",
                            image2: "/images/GLOW_AFTER.webp",

                        },
                        {
                            tabtitle: "Prefer Auto Recording?",

                            heading: "Get More from Your Daily Drive",
                            subheading: "The VREC-H320SC adds smart driving support, automatic event recording and clear video built for real road conditions.",
                            compareHeading: "Always Ready to Record",
                            compareSubheading: "When motion or impact is detected, the VREC-320SC begins recording automatically. With parking mode enabled, it helps to capture unexpected incidents even while your car is parked.",
                            image1: "/images/NOISE_BEFORE.webp",
                            image2: "/images/NOISE_AFTER.webp",
                        },
                        {

                            tabtitle: "Need Clear Footage?  ",
                            heading: "Get More from Your Daily Drive",
                            subheading: "The VREC-H320SC adds smart driving support, automatic event recording and clear video built for real road conditions.",
                            compareHeading: "Built for Shifting Light Conditions",
                            compareSubheading: "From harsh sunlight to shaded corners, WDR and Full HD work together to keep your video balanced and clear.",
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
                    priorityProductIndex={2}
                />
            </section>
            <section>
                <EverythingNeedToKnow
                   collectionName="faq_detailed_specs_H320SC"

                    faqData={faqData.set3}
                />
            </section>

            <section>
                <DriveSmarter

                    subText="Drive with confidence, capture every moment, & stay protected. Explore what the H320SC brings to every drive."
                    image="/images/modelImages/H320SC1.png"
                />
            </section>

            <Features />


        </>)
}

export default page