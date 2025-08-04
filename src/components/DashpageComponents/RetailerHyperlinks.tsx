'use client';
import { useState } from 'react';
import { ChevronUp, ChevronDown, X } from 'lucide-react';

interface Retailer {
  id: number;
  name: string;
  logo: string;
  productLink: string;
}

export default function RetailerHyperlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [retailers, setRetailers] = useState<Retailer[]>([
    {
      id: 1,
      name: 'Amazon',
      logo: '/Images/svgs/amazon.svg',
      productLink: ''
    },
    {
      id: 2,
      name: 'Noon',
      logo: '/Images/svgs/noon.svg',
      productLink: ''
    }
  ]);

  const removeRetailer = (id: number) => {
    setRetailers(prev => prev.filter(retailer => retailer.id !== id));
  };

  const updateRetailer = (id: number, field: 'name' | 'productLink', value: string) => {
    setRetailers(prev => prev.map(retailer => 
      retailer.id === id ? { ...retailer, [field]: value } : retailer
    ));
  };

  const addRetailer = () => {
    const newId = Math.max(...retailers.map(r => r.id)) + 1;
    setRetailers(prev => [...prev, {
      id: newId,
      name: '',
      logo: '',
      productLink: ''
    }]);
  };

  return (
    <div className="border-b border-gray-700">
      <div
        className="flex justify-between items-center cursor-pointer py-6 px-4 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h2 className="text-white text-[48px] font-medium">Retailer Hyperlinks Management</h2>
        </div>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>
      
      {isOpen && (
        <div className="px-4 md:px-8 pb-8">
          <div className="space-y-4">
          {retailers.map((retailer) => (
  <div key={retailer.id} className="flex flex-wrap md:flex-nowrap items-start gap-2 mb-6">
    {/* Logo Box */}
    <div className="relative w-full md:w-[390px] h-[177px]  border border-gray-700 rounded flex items-center justify-center">
      {retailer.logo && (
        <img 
          src={retailer.logo} 
          alt={retailer.name}
          className="h-10 object-contain"
        />
      )}
      <button
        className="absolute top-2 right-2 text-white hover:text-red-400"
        onClick={() => removeRetailer(retailer.id)}
      >
        <X size={16} />
      </button>
    </div>

    {/* Input Fields */}
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2">
      <input 
        type="text"
        placeholder="Enter Hyperlink"
        value={retailer.productLink}
        onChange={(e) => updateRetailer(retailer.id, 'productLink', e.target.value)}
        className="w-[390px] h-[177px]  border border-gray-700 p-3 rounded text-white"
      />
      <input 
        type="text"
        placeholder="Enter Country Code"
        className="w-[390px] h-[177px] border border-gray-700 p-3 rounded text-white"
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

          </div>
          
       
        </div>
      )}
    </div>
  );
} 