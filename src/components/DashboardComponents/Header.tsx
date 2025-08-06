
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
      {/* Header (full width, no padding) */}
    <div className="flex justify-between items-center py-6 px-12 w-full border-gray-700">
      <div className="text-gray-400 text-sm breadcrumbs relative flex flex-row gap-2">
        <span className="mr-2" onClick={onToggleSidebar}>
          <Image className="w-[34px] h-[24px]" src={dashIcon} alt="" width={100} height={100} />
        </span>
        <h1 className="text-[#313131]">|</h1>
        <span className="mr-2">
          <Image className="w-[34px] h-[24px]" src={editIcon} alt="" width={100} height={100} />
        </span>
        <span>
          <ChevronRight className="h-6 w-4 text-[#313131]" />
        </span>
        <span className="font-medium text-[18px] text-[#FFFFFF]">{modelName}</span>
      </div>

      {/* Save Button */}
      <button
        onClick={onSaveClick}
        className="bg-[#AD2239]/80 hover:bg-red-700/60 transition text-white px-4 py-2 rounded-lg"
      >
        Save Changes
      </button>
    </div>

    {/* Underline with side padding */}
    <div className="px-8">
      <div className="border-t border-[#1F1F1F] w-full mb-6 mt-[-5px]"></div>
    </div>
    </>

    
  );
}
