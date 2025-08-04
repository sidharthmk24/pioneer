'use client';
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Feature {
    id: number;
    subHeading: string;
    heading: string;
    description: string;
    disclaimer?: string;
}

export default function ProductHighlight() {
    const [isOpen, setIsOpen] = useState(true);
    const [features, setFeatures] = useState<Feature[]>([
        {
            id: 1,
            subHeading: "Sharp Footage + Low Light",
            heading: "4K Resolution",
            description: "Record every detail, day and night, with high-quality, pixel-perfect images by incorporating 4K Ultra-HD resolution."
        },
        {
            id: 2,
            subHeading: "Data & Stay Safe!",
            heading: "G-Sensor",
            description: "The G-Sensor automatically detects collisions and saves the footage from power loss, ensuring important moments are not accidentally overwritten."
        },
        {
            id: 3,
            subHeading: "Crisp, Clear, Core Feature",
            heading: "High Performance Imaging",
            description: "The MIO-2000 uses a Sony IMX415 image sensor, an F1.8 aperture, and a 7-layer glass lens. Together, they capture crisp, clear footage with accurate colors even in low-light conditions."
        },
        {
            id: 4,
            subHeading: "Sharp On-Screen Clarity",
            heading: "3.5\" IPS Display",
            description: "The 3.5-inch IPS screen lets you view footage and adjust settings with ease, providing a clear and crisp view of your videos."
        },
        {
            id: 5,
            subHeading: "Adaptive Any Light",
            heading: "WDR & HDR Processing",
            description: "Adjusts exposure in real-time, improving visibility and fine detail, so footage looks clear in both bright and low-light conditions."
        },
        {
            id: 6,
            subHeading: "Automatic Extreme Fix-Up",
            heading: "ADAS Alerts",
            description: "The MIO-2000 monitors lane-keeping, vehicle distance, and traffic to provide timely alerts and help you stay safe."
        },
        {
            id: 7,
            subHeading: "Every Single Motion",
            heading: "Dual Camera Setup",
            description: "The MIO-2000 is equipped with a 170-degree front camera and a 140-degree rear camera, capturing a wider and more comprehensive coverage."
        },
        {
            id: 8,
            subHeading: "Connections and Coverage",
            heading: "170° Wide-Angle View",
            description: "Gives you a clear overview of the road, capturing side lanes, nearby traffic, and details that you might miss."
        },
        {
            id: 9,
            subHeading: "Monitor 24/7 Parking",
            heading: "Optional Parking Mode",
            description: "Record incidents, even when the car is parked, with optional parking mode. It captures events using the G-Sensor directly from the vehicle battery.",
            disclaimer: "*Disclaimer: Parking mode requires additional installation of an external Hardwire Kit, which enables power supply to the Dash Camera directly from the vehicle battery."
        },
        {
            id: 10,
            subHeading: "Even Trip Support",
            heading: "GPS Logger",

            description: "Automatically records your journey with GPS, giving real-time tracking, speed, and location data for every trip.",
            disclaimer: "*Disclaimer: Route tracking is available only for footage downloaded to the user’s mobile device via the app. An active internet connection is required to display route details on the map."
        }
    ]);

    return (
        <div className="border-b border-gray-700">
            <div
                className="flex justify-between items-center cursor-pointer py-6 px-4 md:px-8"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div>
                    <h2 className="text-white text-[48px] font-medium">Product Highlights</h2>
                </div>
                {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
            </div>

            {isOpen && (
                <div className="px-4 md:px-8 pb-8 space-y-6">
                    {/* Hero Section */}
                    <div className="space-y-4 p-4 rounded-lg">
                        <h3 className="text-white font-bold text-lg">Hero Section</h3>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-1/3">
                                    <span className="text-[#ABABAB] font-medium">Heading</span>
                                </div>
                                <div className="w-[900px]">
                                    <div className="border border-gray-600 p-3 rounded text-[#ABABAB]">
                                        4K Clarity Meets AI Intelligence
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="w-1">
                                    <span className="text-[#ABABAB] font-medium">Body</span>
                                </div>
                                <div className="w-[810px]">
                                    <div className="border border-gray-600 p-3 rounded text-[#ABABAB]">
                                        VREC-Z820DC Keeps the Road on Record
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-1/3">
                                    <span className="text-[#ABABAB] font-medium">Button</span>
                                </div>
                                <div className="w-[900px]">
                                    <div className="border border-gray-600 p-3 rounded text-[#ABABAB]">
                                        Explore the features
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    {features.map((feature) => (
                        <div key={feature.id} className="space-y-4 p-4 rounded-lg">
                            <h3 className="text-white font-bold text-lg">Feature {feature.id}</h3>

                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-1/3">
                                        <span className="text-[#ABABAB] font-medium">Sub-heading</span>
                                    </div>
                                    <div className="w-[900px]">
                                        <div className="border border-gray-600 p-3 rounded text-[#ABABAB]">
                                            {feature.subHeading}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-1/3">
                                        <span className="text-[#ABABAB] font-medium">Heading</span>
                                    </div>
                                    <div className="w-[900px]">
                                        <div className="border border-gray-600 p-3 rounded text-[#ABABAB]">
                                            {feature.heading}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <span className="text-[#ABABAB] font-medium">Description</span>
                                    </div>
                                    <div className="w-[900px]">
                                        <div className="border border-gray-600 p-3 rounded text-[#ABABAB] min-h-[80px]">
                                            {feature.description}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Disclaimers for specific features */}
                            {feature.id === 10 || feature.id === 9   && (
                            <div className="flex items-start">
                                <div className="w-1/3">
                                    <span className="text-[#ABABAB] font-medium">Disclaimer</span>
                                </div>
                                <div className="w-[900px]">
                                    <div className="border border-gray-600 p-3 rounded text-[#ABABAB] min-h-[80px]">
                                        {feature.disclaimer}
                                    </div>
                                </div>
                            </div>
                            )}

      
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
