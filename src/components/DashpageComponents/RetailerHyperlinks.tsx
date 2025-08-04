'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown, X } from 'lucide-react';
import { db, storage } from '../../app/utils/Firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

interface Retailer {
  id: number;
  name: string;
  logo: string;
  productLink: string;
  countryCode: string;
}

export default function RetailerHyperlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [retailers, setRetailers] = useState<Retailer[]>([
    {
      id: 1,
      name: 'Amazon',
      logo: '',
      productLink: '',
      countryCode: ''
    },
    {
      id: 2,
      name: 'Noon',
      logo: '',
      productLink: '',
      countryCode: ''
    }
  ]);

  const [retailerFiles, setRetailerFiles] = useState<Record<number, File | null>>({});

  const removeRetailer = (id: number) => {
    setRetailers(prev => prev.filter(retailer => retailer.id !== id));
    setRetailerFiles(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const updateRetailer = (id: number, field: keyof Retailer, value: string) => {
    setRetailers(prev =>
      prev.map(retailer =>
        retailer.id === id ? { ...retailer, [field]: value } : retailer
      )
    );
  };

  const addRetailer = () => {
    const newId = retailers.length > 0 ? Math.max(...retailers.map(r => r.id)) + 1 : 1;
    setRetailers(prev => [
      ...prev,
      {
        id: newId,
        name: '',
        logo: '',
        productLink: '',
        countryCode: ''
      }
    ]);
  };

  const uploadImage = async (file: File, retailerId: number): Promise<string> => {
    const storageRef = ref(storage, `retailer_logos/${retailerId}_${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

const saveRetailers = async () => {
  try {
    const updatedRetailers = await Promise.all(
      retailers.map(async (retailer) => {
        let logoUrl = retailer.logo;

        // If a new file is selected, upload and get new URL
        const file = retailerFiles[retailer.id];
        if (file) {
          logoUrl = await uploadImage(file, retailer.id);
        }

        return {
          name: retailer.name,
          logo: logoUrl,
          productLink: retailer.productLink,
          countryCode: retailer.countryCode,
        };
      })
    );

    await setDoc(doc(db, 'dashboard', 'retailerHyperlinks'), {
      retailers: updatedRetailers,
    });

console.log('Starting save function...');
console.log('Retailers:', retailers);
console.log('Retailer Files:', retailerFiles);
    console.log('Retailers saved successfully');
  } catch (err) {
    console.error('Error saving retailers:', err);
  }

};
  return (
    <div className="border-b border-gray-700">
      <div
        className="flex justify-between items-center cursor-pointer py-6 px-4 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white text-[48px] font-medium">Retailer Hyperlinks Management</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div className="px-4 md:px-8 pb-8">
          {retailers.map((retailer) => (
            <div key={retailer.id} className="flex flex-wrap md:flex-nowrap items-start gap-4 mb-6">
              {/* Left Section - Logo Upload */}
              <div className="relative w-full md:w-[355px] h-[177px] border border-gray-700 rounded flex items-center justify-center overflow-hidden">
                {retailerFiles[retailer.id] ? (
                  <img
                    src={URL.createObjectURL(retailerFiles[retailer.id]!)}
                    alt="Preview"
                    className="h-10 object-contain"
                  />
                ) : retailer.logo ? (
                  <img
                    src={retailer.logo}
                    alt={retailer.name}
                    className="h-10 object-contain"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Upload SVG Logo</span>
                )}
                <input
                  type="file"
                  accept="image/svg+xml"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setRetailerFiles(prev => ({ ...prev, [retailer.id]: file }));
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <button
                  className="absolute top-2 right-2 text-white hover:text-red-400"
                  onClick={() => removeRetailer(retailer.id)}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Right Section - Inputs */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Enter Hyperlink"
                  value={retailer.productLink}
                  onChange={(e) =>
                    updateRetailer(retailer.id, 'productLink', e.target.value)
                  }
                  className="w-full h-[177px] border border-gray-700 p-3 rounded text-white bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Enter Country Code"
                  value={retailer.countryCode}
                  onChange={(e) =>
                    updateRetailer(retailer.id, 'countryCode', e.target.value)
                  }
                  className="w-full h-[177px] border border-gray-700 p-3 rounded text-white bg-transparent"
                />
              </div>
            </div>
          ))}

          {/* Add Retailer Button */}
          <button
            onClick={addRetailer}
            className="w-full border border-gray-700 text-white py-3 mt-4 hover:bg-[#2a2a2a] text-center"
          >
            + ADD MORE RETAILERS
          </button>

          {/* Save Button (optional) */}
          <button
            onClick={saveRetailers}
            className="w-full border border-green-700 text-white py-3 mt-4 hover:bg-green-900 text-center"
          >
            SAVE CHANGES
          </button>
        </div>
      )}
    </div>
  );
}
