'use client';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/utils/Firebase/firebaseConfig';

export default function page() {
  const faqs = [
 { feature: 'Resolution', value: '2K, HDR + Full HD' },
  { feature: 'Power supply', value: '5V, 2A Cigarette Charger or Hardwire Kit' },
  { feature: 'G sensor', value: 'Yes' },
  { feature: 'Storage', value: 'Micro SD card (Up to 512GB)' },
  { feature: 'Dimensions', value: '88mm x 29.3mm x 55.6mm' },
  { feature: 'Viewing Angle', value: '143° Diagonal' },
  { feature: 'Image Sensor', value: 'Sony STARVIS 2 IMX675, 5MP' },
  { feature: 'No of Cameras', value: '2 (front + rear)' },
  { feature: 'Mounting', value: 'Double Sided Adhesive' },
  { feature: 'Display Size', value: '3" IPS' },
  { feature: 'GPS', value: 'Inbuilt' },
  { feature: 'Wi-Fi', value: 'Inbuilt' },
  { feature: 'Parking Mode', value: 'Yes' },
  { feature: 'Smartphone App', value: 'Android + iOS' },
  { feature: 'Advanced Driver-Assistance System (ADAS)', value: 'FCWS, LDWS, Stop and Go' }
];

  const handleUpload = async () => {
    const collectionName = 'detailed_specs_H520DC';
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
