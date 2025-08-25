'use client';

import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/app/utils/Firebase/firebaseConfig';

export default function Page() {
  // Comparison chart data extracted from the table screenshot
  const comparisonData = [
    {
      feature: "Video Resolution",
      priority: 1,
      Z820DC: "4K",
      H520DC: "2K",
      H320SC: "Full HD",
      H120SC: "1.5K",
    },
    {
      feature: "AI Enabled Night Vision",
      priority: 2,
      Z820DC: "Yes",
      H520DC: "-",
      H320SC: "-",
      H120SC: "-",
    },
    {
      feature: "Camera Setup",
      priority: 3,
      Z820DC: "Front + Rear",
      H520DC: "Front + Rear",
      H320SC: "Front + Rear (Optional)",
      H120SC: "Front",
    },
    {
      feature: "Model Dimensions",
      priority: 4,
      Z820DC: "104mm x 26.7mm x 43mm",
      H520DC: "90mm x 34.8mm x 54.25mm",
      H320SC: "90mm x 34.8mm x 54.25mm",
      H120SC: "31.12mm x 28.8mm x 37.33mm",
    },
    {
      feature: "ADAS Alerts",
      priority: 5,
      Z820DC: "Yes",
      H520DC: "Yes",
      H320SC: "Yes",
      H120SC: "-",
    },
    {
      feature: "ZenVue App Support",
      priority: 6,
      Z820DC: "Yes",
      H520DC: "Yes",
      H320SC: "Yes",
      H120SC: "Yes",
    },
    {
      feature: "Storage Capacity",
      priority: 7,
      Z820DC: "Up to 512GB",
      H520DC: "Up to 512GB",
      H320SC: "Up to 512GB",
      H120SC: "Up to 128GB",
    },
  ];

  // Function to upload comparison chart data
  const handleUpload = async () => {
    const collectionName = 'comparison_chart';
    console.log('Uploading comparison data to:', collectionName);

    try {
      for (const row of comparisonData) {
        console.log('Adding feature row:', row);
        await addDoc(collection(db, collectionName), row);
      }
      alert('All comparison rows uploaded successfully!');
    } catch (error) {
      console.error('Error uploading comparison chart:', error);
      alert('Upload failed. Check console for details.');
    }
  };

  // Function to delete entire collection
  const handleDelete = async () => {
    const collectionName = 'comparison_chart';
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const deletePromises = querySnapshot.docs.map((document) =>
        deleteDoc(doc(db, collectionName, document.id))
      );
      await Promise.all(deletePromises);

      console.log(`Collection '${collectionName}' deleted successfully ✅`);
      alert(`Collection '${collectionName}' deleted successfully!`);
    } catch (error) {
      console.error("Error deleting collection: ", error);
      alert("Error deleting collection. Check console for details.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Comparison Chart Manager</h1>
      
      <div className="flex gap-4">
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Upload Chart Data to Firestore
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete comparison_chart Collection
        </button>
      </div>
    </div>
  );
}
