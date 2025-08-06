
import Image from "next/image";
import dashIcon from "../../../public/Images/dashboard/svgs/dash1.svg";
import editIcon from "../../../public/Images/dashboard/svgs/edit.svg";
import { ChevronRight } from "lucide-react";






interface HeaderProps {
  onSaveClick: () => void;
  selectedModel:string;
    modelName: string;
      onToggleSidebar: () => void; // 👈 new prop

}

export default function Header({ onSaveClick,selectedModel,modelName,onToggleSidebar }: HeaderProps) {
  return (
    <>
       {/* Responsive Header */}
      <div className="flex flex-wrap justify-between items-center py-4 px-4 sm:px-6 md:px-12 w-full border-gray-700 gap-y-4">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm">
          <span className="mr-1 cursor-pointer" onClick={onToggleSidebar}>
            <Image
              className="w-6 h-auto md:w-[34px]"
              src={dashIcon}
              alt="Dashboard Icon"
              width={100}
              height={100}
            />
          </span>
          <span className="text-[#313131] hidden sm:inline">|</span>
          <span className="mr-1">
            <Image
              className="w-6 h-auto md:w-[34px]"
              src={editIcon}
              alt="Edit Icon"
              width={100}
              height={100}
            />
          </span>
          <span>
            <ChevronRight className="h-5 w-4 text-[#313131]" />
          </span>
          <span className="font-medium text-base sm:text-lg text-white break-words">
            {modelName}
          </span>
        </div>

        {/* Save Button */}
        <button
          onClick={onSaveClick}
          className="bg-[#AD2239]/80 hover:bg-red-700/60 transition text-white text-sm sm:text-base px-2 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>

      {/* Underline Divider */}
      <div className="px-4 sm:px-6 md:px-8">
        <div className="border-t border-[#1F1F1F] w-full mb-6 mt-[-5px]"></div>
      </div>
    </>

    
  );
}
