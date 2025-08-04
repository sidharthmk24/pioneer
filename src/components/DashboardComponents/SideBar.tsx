import Image from "next/image";
import HeadLogo from '../../../public/Images/dashboard/headLogo.png'

// components/Sidebar.tsx
export default function SideBar() {
  return (
    <aside className="bg-[#121212] text-white w-64 h-screen p-6 flex flex-col  justify-between">
      <div>
        {/* <h1 className="text-3xl font-bold mb-10">Pioneer</h1> */}
    <Image
    className="h-[32px] w-[223px]"
    src={HeadLogo}
    alt="Pioneer Logo"
    width={100}
    height={100} />
        <h2 className="text-sm font-semibold mb-2 text-gray-400">PRODUCT MODELS</h2>
        <ul className="space-y-2">
          {["VREC-Z820DC", "VREC-H520DC", "VREC-H320SC", "VREC-H120DC"].map((item, i) => (
            <li
              key={i}
              className={`px-3 py-2 rounded ${
                i === 0 ? "bg-[#64222B] text-white" : "text-gray-300 hover:bg-[#222]"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="text-gray-400 hover:text-white text-sm">Sign Out</button>
    </aside>
  );
}
