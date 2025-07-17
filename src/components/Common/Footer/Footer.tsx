'use client';

import Image from 'next/image';
import Link from 'next/link';
import pioneerLogo from '../../../../public/Images/svgs/pioneer.svg';    // Put your logo in /public
import instagramIcon from '../../../../public/Images/svgs/instagram.svg';     // Replace with your icon
import facebookIcon from '../../../../public/Images/svgs/meta.svg';       // Replace with your icon

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0000] to-[#6e0b0f] text-gray-300 text-sm pt-12 pb-6 md:pb-10 px-4 md:px-16 lg:px-32  ">
      {/* Top Links */}
    <div className="max-w-5xl mt-[10rem] mx-auto grid grid-cols-2 md:grid-cols-4  gap-x-8 md:gap-x-12 mb-10 ">
  <div className="space-y-6  ">
  <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Dashcam Manual</p></Link>
  <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2   hover:text-white">Software & Firmware</p></Link>
</div>
  <div className="space-y-6">
    <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Service Centres</p></Link>
    <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Distributors</p></Link>
  </div>
  <div className="space-y-6">
    <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Dashcam EULA Document</p></Link>
    <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Dashcam Privacy Policy</p></Link>
  </div>
  <div className="space-y-6">
    <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Product Manuals</p></Link>
    <Link href="#"><p className=" text-[#FFFFFF] tracking-wide  text-[16px]  mt-2  hover:text-white">Product Catalogues</p></Link>
  </div>
</div>


      {/* Middle Bar */}
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8">
  {/* LEFT SECTION: logo + links in one row */}
  <div className="flex flex-col  md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0 w-full md:w-auto">
    {/* Pioneer Logo */}
    <div className="flex items-center">
      <Image src={pioneerLogo} alt="Pioneer Logo" className="h-6 w-auto md:h-8" />
    </div>

    {/* Links next to logo */}
    <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-12 ms-9 text-gray-300">
      <Link href="#">
        <p className="text-[#FFFFFF] tracking-wide text-[16px] hover:text-white">Our Products</p>
      </Link>
      <Link href="#">
        <p className="text-[#FFFFFF] tracking-wide text-[16px] hover:text-white">Our History</p>
      </Link>
      <Link href="#">
        <p className="text-[#FFFFFF] tracking-wide text-[16px] hover:text-white">Pioneer Global</p>
      </Link>
      <Link href="#">
        <p className="text-[#FFFFFF] tracking-wide text-[16px] hover:text-white">Contact Us</p>
      </Link>
    </div>
  </div>

  {/* RIGHT SECTION: social icons */}
  <div className="flex space-x-4">
    <Link href="#"><Image src={instagramIcon} alt="Instagram" className="h-5 w-5 md:h-6 md:w-6" /></Link>
    <Link href="#"><Image src={facebookIcon} alt="Facebook" className="h-5 w-5 md:h-6 md:w-6" /></Link>
  </div>
</div>


      {/* Divider */}
      <div className="border-t border-gray-400/30 my-12"></div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-400 max-w-7xl mx-auto">
        © 2025 Pioneer Gulf FZE. All Rights Reserved <br className="hidden md:inline" />
        Powered by Megamind Advertising Private Limited
      </div>
    </footer>
  );
}
