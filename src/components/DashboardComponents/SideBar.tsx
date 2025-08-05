'use client';
import Image from "next/image";
import HeadLogo from '../../../public/Images/dashboard/headLogo.png';
import { signOut } from 'firebase/auth';
import { auth } from '../../app/utils/Firebase/firebaseConfig';
import { LogOut } from "lucide-react";
import { useRouter } from 'next/navigation';
import { models } from "@/lib/models";



interface SideBarProps {
  selectedModel: string;
   onSelectModel: (collection: string, name: string) => void;
  
}


export default function SideBar({ selectedModel, onSelectModel }: SideBarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };


  //  const models = [
  //   { name: "VREC-Z820DC", collection: "detailed_specs" },
  //   { name: "VREC-H520DC", collection: "detailed_specs_H520DC" },
  //   { name: "VREC-H320SC", collection: "detailed_specs_H320SC" },
  //   { name: "VREC-H120DC", collection: "detailed_specs_H120DC" },
  // ];

  return (
    <aside className="bg-[#0D0D0D] text-white w-[230px] h-screen flex flex-col justify-between py-8 px-4 border-r border-[#1F1F1F]">
      <div>
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src={HeadLogo}
            alt="Pioneer Logo"
            className="w-[120px] h-auto"
            priority
          />
        </div>

        {/* Divider line */}
        <div className="border-t border-[#1F1F1F] mb-6"></div>

        {/* Section Title */}
        <p className="text-[10px] font-medium tracking-widest text-[#666666] mb-4 px-2">
          PRODUCT MODELS
        </p>

        {/* Model List */}
        <ul className="flex flex-col space-y-1">
          {models.map((model, i) => (
            <li
              key={i}
         onClick={() => onSelectModel(model.collection,    model.name )}
            className={`text-[13px] px-3 py-2 rounded font-medium cursor-pointer transition-colors ${
  selectedModel === model.collection
    ? "bg-[#AD2239]/30 text-white"
    : "text-[#B3B3B3] hover:bg-[#1A1A1A] hover:text-white"
}`}

            >
              {model.name }
            </li>
            
            
          ))}
          
        </ul>
      </div>

      {/* Sign Out */}
      <div className="border-t border-[#1F1F1F] pt-4 px-2 flex items-center gap-2 text-sm text-[#B3B3B3] hover:text-white cursor-pointer transition-colors" onClick={handleLogout}>
        <LogOut size={16} />
        <span>Sign Out</span>
      </div>
    </aside>
  );
}
