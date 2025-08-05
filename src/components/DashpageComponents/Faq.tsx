'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, doc, updateDoc, addDoc, query } from 'firebase/firestore';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { db } from '../../app/utils/Firebase/firebaseConfig';
import { data } from 'framer-motion/client';


interface FaqData {
  id: string;
  question: string;
  answer: string;
  isNew?: boolean; // <-- flag to check if not saved yet
 isVisible?: boolean;
}

interface FaqProps {
  onSaveRegister: (fn: () => void) => void;
    collectionName: string;
}

export default function Faq({ onSaveRegister,collectionName }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [faqsData, setFaqsData] = useState<FaqData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);




useEffect(() => {
  if (!collectionName) return;

  setLoading(true); // Show loading when switching collections

  const q = query(collection(db, collectionName));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      isVisible:true,
    })) as FaqData[];

    setFaqsData(data);
    setLoading(false);
  }, (error) => {
    console.error('Real-time listener error:', error);
    setError(`Error: ${error.message}`);
    setLoading(false);
  });

  return () => unsubscribe();
}, [collectionName]);

  const handleChange = (index: number, field: keyof FaqData, value: string) => {
    const updatedFaqs = [...faqsData];
    updatedFaqs[index][field] = value;
    setFaqsData(updatedFaqs);
  };

  const handleAddFaq = () => {
  const newFaq: FaqData = {
    id: Date.now().toString(), // temporary ID
    question: '',
    answer: '',
    isNew: true,
    isVisible: true
  };

  setFaqsData(prev => [...prev, newFaq]);
};

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      const updatePromises = faqsData.map(async (faq) => {
        if (faq.isNew) {
          // New document
         await addDoc(collection(db, collectionName), {
            question: faq.question,
            answer: faq.answer
          });
          console.log(faq.question,"ssss");
          
        } else {
          // Existing document
        await updateDoc(doc(db, collectionName, faq.id), {
            question: faq.question,
            answer: faq.answer
          });
        }
      });

      await Promise.all(updatePromises);
      console.log('All FAQs updated successfully.');
    } catch (error: any) {
      console.error('Error saving FAQs:', error);
      setError(`Error saving: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    onSaveRegister(handleSaveAll);
  }, [faqsData]);

  return (
    <div className="border-b border-gray-700/30 py-1">
      <div className="flex justify-between items-center cursor-pointer py-6 px-4 md:px-8" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-white text-[42px] font-medium">FAQs</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div>
          <div className="flex justify-between items-center px-8 pb-4">
            <p className="text-[#ABABAB] text-[16px]">Edit the fields and click 'Save' to update the website</p>
          </div>

          <div className="px-4 md:px-22 pb-8">
            {error && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-700/50 rounded text-red-300">
                {error}
              </div>
            )}

            {loading ? (
              <div className="text-center text-[#ABABAB] py-8">Loading FAQs...</div>
            ) : faqsData.length === 0 ? (
              <div className="text-center text-[#ABABAB] py-8">There is no FAQ data</div>
            ) : (
        faqsData.map((faq, index) => (
  <div
    key={faq.id}
    className="bg-[#0D0D0D] px-6 py-6 mb-6"
  >
    {/* Header row: FAQ ID and Show/Hide */}
   <div className="flex justify-between items-center mb-6">
  <span className="text-white text-[13px] font-semibold">FAQ #{index + 1}</span>
  <div className="flex gap-2">
    <button
      onClick={() => {
        const updated = [...faqsData];
        updated[index].isVisible = true;
        setFaqsData(updated);
      }}
      className={`px-3 py-[2px] text-[10px] font-semibold uppercase tracking-[0.05em] rounded-sm transition-colors border border-[#444] ${
        faq.isVisible ? 'bg-white text-black' : 'text-white/50'
      }`}
    >
      Show
    </button>
    <button
      onClick={() => {
        const updated = [...faqsData];
        updated[index].isVisible = false;
        setFaqsData(updated);
      }}
      className={`px-3 py-[2px] text-[10px] font-semibold uppercase tracking-[0.05em] rounded-sm transition-colors border border-[#444] ${
        !faq.isVisible ? 'bg-white text-black' : 'text-white/50'
      }`}
    >
      Hide
    </button>
  </div>
</div>

    {/* Inputs only shown if visible */}
    {faq.isVisible && (
  <div className="flex flex-col gap-6">
    {/* Heading row */}
    <div className="grid grid-cols-12 items-center gap-4">
      <label className="col-span-2 text-[#ABABAB] text-sm">Heading</label>
      <input
        type="text"
        className="col-span-10 border border-gray-700/50 rounded px-4 py-2 text-white bg-transparent w-full focus:outline-none focus:ring focus:border-gray-500"
        value={faq.question}
        onChange={(e) => handleChange(index, 'question', e.target.value)}
        placeholder="Enter heading here"
      />
    </div>

    {/* Description row */}
    <div className="grid grid-cols-12 items-start gap-4">
      <label className="col-span-2 text-[#ABABAB] text-sm mt-2">Description</label>
      <textarea
        className="col-span-10 border border-gray-700/50 rounded px-4 py-3 text-[#ABABAB] bg-transparent w-full focus:outline-none focus:ring focus:border-gray-500"
        value={faq.answer}
        rows={3}
        onChange={(e) => handleChange(index, 'answer', e.target.value)}
        placeholder="Enter description here"
      />
    </div>
  </div>
)}
  </div>
))
            )}

            {/* ➕ Add FAQ Button */}
           <div className="mt-6">
  <button
    onClick={() =>
     setFaqsData([
      ...faqsData,
      {
        id: Date.now().toString(),
        question: '',
        answer: '',
        isNew: true,         // ✅ Crucial!
        isVisible: true
      }
    ])
    }
    className="w-full border border-[#2A2A2A] text-[#ABABAB] py-3 text-sm hover:bg-[#1a1a1a] transition-colors"
  >
    + ADD NEW FAQ
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  );
}
