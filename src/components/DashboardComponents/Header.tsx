'use client';
import Image from "next/image";
import dashIcon from "../../../public/Images/dashboard/svgs/dash1.svg"
import editIcon from "../../../public/Images/dashboard/svgs/edit.svg"
import { ChevronRight } from "lucide-react";
import { useEditContext } from "../../context/EditContext";

export default function Header() {
  const { saveChanges, isSaving, pendingChanges } = useEditContext();

  const handleSaveChanges = async () => {
    try {
      await saveChanges();
      console.log(`Successfully saved ${pendingChanges.length} changes`);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };
  

  return (
    <div className="flex justify-between items-center py-6 px-22 w-full border-gray-700">
      <div className="text-gray-400 text-sm breadcrumbs relative flex flex-row gap-2">
        <span className="mr-2">
          <Image className="w-[34px] h-[24px]" src={dashIcon} alt="" width={100} height={100}/>
        </span>
        <h1 className="text-[#313131]">|</h1>
        <span className="mr-2">
          <Image className="w-[34px] h-[24px]" src={editIcon} alt="" width={100} height={100}/>
        </span>
        <span><ChevronRight className="h-6 w-4 text-[#313131]"/></span>
        <span className="font-medium text-[18px] text-[#FFFFFF]">VREC-Z820DC</span>
      </div>
      
      <button 
        onClick={handleSaveChanges}
        disabled={isSaving || pendingChanges.length === 0}
        className="bg-[#AD2239] hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
      >
        {isSaving ? 'Saving...' : `Save Changes ${pendingChanges.length > 0 ? `(${pendingChanges.length})` : ''}`}
      </button>
      
      <div className="absolute bottom-0 left-22 right-22 border-b border-gray-700"></div>
    </div>
  );
}
