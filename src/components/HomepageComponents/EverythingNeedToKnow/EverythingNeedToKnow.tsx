'use client'

import React, { useState } from 'react'
import { faqData } from '@/app/utils/FaqData/FaqData';
import { Minus, Plus } from 'lucide-react';

export default function EverythingNeedToKnow() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-black text-white px-4 py-12 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-20 items-start max-w-6xl mx-auto">
        {/* LEFT COLUMN - HEADING */}
        <div className="min-h-full">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight text-[#E2E2E2] max-w-sm lg:top-6 sticky top-5 self-start">
            Everything You Need to Know
          </h2>
        </div>

        {/* RIGHT COLUMN - ACCORDION */}
        <div className="divide-y divide-gray-700 w-full">
          {faqData.map((item, index) => (
            <div key={index} className="py-4 mt-5">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-[18px] md:text-[20px] font-semibold text-[#E2E2E2]">
                  {item.question}
                </span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#ABABAB]" />
                  ) : (
                    <Plus className="w-5 h-5 md:w-6 md:h-6 text-[#ABABAB]" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 mt-2'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[16px] mt-5 md:text-[18px] text-[#ABABAB]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
