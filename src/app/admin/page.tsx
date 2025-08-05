'use client';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/utils/Firebase/firebaseConfig';

export default function page() {
  const specs = [
  { feature: "Resolution", value: "1296P (1.5K)" },
  { feature: "Power supply", value: "5V , 2A Cigarette Charger or Hardwire Kit" },
  { feature: "G sensor", value: "Yes" },
  { feature: "Storage", value: "Micro SD card (Up to 128GB)" },
  { feature: "Dimensions", value: "31.12mm x 28.8mm x 37.33mm" },
  { feature: "Viewing Angle", value: "120° Diagonal" },
  { feature: "Image Sensor", value: "GC2083, 2MP" },
  { feature: "No of Cameras", value: "1 ( front )" },
  { feature: "Mounting", value: "Double Sided Adhesive" },
  { feature: "Display Size", value: "3\" IPS" },
  { feature: "Parking Mode", value: "Yes" },
  { feature: "Smartphone App", value: "Android + iOS" }
];

const handleUpload = async () => {
  const collectionName = 'detailed_specs_H120DC';
  console.log('Uploading specs to:', collectionName); // 🔍 Log for debugging

  try {
    for (const spec of specs) {
      console.log('Adding:', spec); // 🔍 Log each spec
      await addDoc(collection(db, collectionName), spec);
    }
    alert('All specs uploaded successfully!');
  } catch (error) {
    console.error('Error uploading specs:', error); // ❗ Log errors
  }
};

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Detailed Specs</h1>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Upload Specs to Firestore
      </button>
    </div>
  );
}
