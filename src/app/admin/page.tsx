'use client';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/utils/Firebase/firebaseConfig';

export default function page() {
  const faqs = [
{
    question: "What resolution does the VREC-H120SC record in?",
    answer: "It records in high-resolution 1.5K (1296P), capturing clear and detailed footage of your drive."
  },
  {
    question: "Is the VREC-H120SC easy to install?",
    answer: "Yes, its compact design and simple adhesive mount make installation quick and unobtrusive—ideal for first-time dashcam users."
  },
  {
    question: "Does it support Parking Mode?",
    answer: "Yes, the VREC-H120SC includes Parking Mode for motion and impact detection while parked.\n\nDisclaimer: This feature is available only with additional setup and components."
  },
  {
    question: "What is the field of view on this model?",
    answer: "It offers a 120° wide-angle view, providing solid front-road coverage while maintaining focus and clarity."
  },
  {
    question: "Can I expand the storage?",
    answer: "Yes, it supports microSD™ cards up to 128 GB (Class 10 or higher recommended) for continuous loop recording and event capture."
  },
  {
    question: "Is this a single or dual camera setup?",
    answer: "The VREC-H120SC is a single front-facing camera, optimized for simplicity, clarity, and compact installation."
  }

  ];

  const handleUpload = async () => {
    const collectionName = 'faq_detailed_specs_H520DC';
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
