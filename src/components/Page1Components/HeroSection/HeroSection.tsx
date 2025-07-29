import { ChevronDown } from "lucide-react";


type HeroSectionProps={

  heading: string;
  subheading?: string;
}

export default function HeroSection({heading,subheading}:HeroSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-center px-4">
      <div className="text-center max-w-screen mx-auto">
        <h1 className="text-[40px] md:text-[90px] font-medium mb-4 text-white lg:py-2">
          {heading}
        </h1>
        <p className="text-[17px] md:text-[30px] text-[#ABABAB] mb-6">
         {subheading}
        </p>

        {/* Centered Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-[#262626] text-white px-6 py-2 rounded-full text-md font-normal hover:bg-[#333333] transition">
            Explore the features
            <span className="flex items-center justify-center bg-[#4F4C4C] rounded-full h-5 w-5">
              <ChevronDown className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
