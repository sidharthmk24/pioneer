'use client';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/utils/Firebase/firebaseConfig';

export default function page() {
  const faqs =[
 { 
    question: "What resolution does the VREC-Z820DC record in?",
    answer: "The VREC-Z820DC captures footage in stunning 4K Ultra HD using a Sony STARVIS sensor, delivering exceptional detail and clarity in both day and night conditions."
  },
  { 
    question: "Can the VREC-Z820DC record while parked?",
    answer: "Absolutely. With the optional RD-HWK300 hardware kit, the dash cam supports Parking Mode, which records incidents even when your vehicle is turned off."
  },
  { 
    question: "What safety alerts are included with ADAS?",
    answer: "The Advanced Driver Assistance System (ADAS) includes Lane Departure Warning, Forward Collision Alert, Stop & Go Alert, and Speed Limit Sign Detection for proactive, real-time driving support."
  },
  { 
    question: "Does the VREC-Z820DC support night recording?",
    answer: "Yes, it features Night Vision AI with super low-light performance, ensuring clear footage even in dark environments."
  },
  { 
    question: "How much storage does the dash cam support?",
    answer: "The VREC-Z820DC supports up to 512 GB via microSD™ (Class 10 or above, sold separately), allowing extended loop recording and time-lapse functionality."
  },
  { 
    question: "Can I view footage on my phone?",
    answer: "Yes. With built-in Wi-Fi and the ZanVue App (available for Android and iOS), you can easily access, download, and share footage directly from your smartphone."
  },
  { 
    question: "Is GPS tracking included?",
    answer: "Yes, the VREC-Z820DC features built-in GPS that logs location, speed, and route data alongside your video recordings."
  }
]

  const handleUpload = async () => {
    const collectionName = 'faq_detailed_specs_Z820DC';
    console.log('Uploading FAQs to:', collectionName);

    try {
      for (const faq of faqs) {
        console.log('Adding FAQ:', faq);
        await addDoc(collection(db, collectionName), faq);
      }
      alert('All FAQs uploaded successfully!');
    } catch (error) {
      console.error('Error uploading FAQs:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Upload FAQs</h1>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload FAQs to Firestore
      </button>
    </div>
  );
}
