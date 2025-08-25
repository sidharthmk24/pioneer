'use client';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, doc, updateDoc, addDoc, query } from 'firebase/firestore';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { db } from '../../app/utils/Firebase/firebaseConfig';

interface FaqData {
  id: string;
  question: string;
  answer: string;
  disclaimer?: string;
  isNew?: boolean;
  isVisible?: boolean;
}

interface FaqProps {
  onSaveRegister: (fn: () => void) => void;
  collectionName: string;
}

export default function Faq({ onSaveRegister, collectionName }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [faqsData, setFaqsData] = useState<FaqData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

 useEffect(() => {
    if (!collectionName) return;

    setLoading(true);
    const q = query(collection(db, collectionName));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const firestoreData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isVisible: true,
          isNew: false,
        })) as FaqData[];

        // ✅ Merge existing Firestore docs with local unsaved FAQs
        setFaqsData((prev) => {
          const unsaved = prev.filter((faq) => faq.isNew);
          return [...firestoreData, ...unsaved];
        });

        setLoading(false);
      },
      (error) => {
        console.error('Real-time listener error:', error);
        setError(`Error: ${error.message}`);
        setLoading(false);
      }
    );
 return () => unsubscribe();
  }, [collectionName]);

  const handleChange = (index: number, field: keyof FaqData, value: string) => {
    const updatedFaqs = [...faqsData];
    updatedFaqs[index][field] = value;
    setFaqsData(updatedFaqs);
  };

const handleSaveAll = async () => {
  setIsSaving(true);
  try {
    const updatePromises = faqsData.map(async (faq) => {
      if (faq.isNew) {
        const docRef = await addDoc(collection(db, collectionName), {
          question: faq.question,
          answer: faq.answer,
          disclaimer: faq.disclaimer,
        });

        console.log('Added new FAQ:', docRef.id);

        // ✅ Update local state with Firestore ID
        setFaqsData((prev) =>
          prev.map((f) =>
            f.id === faq.id ? { ...f, id: docRef.id, isNew: false } : f
          )
        );
      } else {
          await updateDoc(doc(db, collectionName, faq.id), {
        question: faq.question,
          answer: faq.answer,
          disclaimer: faq.disclaimer,
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
  onSaveRegister(() => handleSaveAll());
}, [faqsData, collectionName]);

  return (
    <div className="border-b border-gray-700/30 py-1">
      <div
        className="flex justify-between items-center cursor-pointer py-6 px-4 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white text-[35px] font-medium">FAQs</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div>
          <div className="flex justify-between items-center px-8 pb-4">
            <p className="text-[#ABABAB] text-[16px]">
              Edit the fields and click 'Save' to update the website
            </p>
          </div>

          <div className="px-4 md:px-4 pb-8">
            {/* {error && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-700/50 rounded text-red-300">
                {error}
              </div>
            )} */}

            {loading ? (
              <div className="text-center text-[#ABABAB] py-8">Loading FAQs...</div>
            ) : faqsData.length === 0 ? (
              <div className="text-center text-[#ABABAB] py-8">There is no FAQ data</div>
            ) : (
              faqsData.map((faq, index) => (
                <div key={faq.id} className="bg-[#0D0D0D] px-6 py-6 mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white text-[15px] font-semibold">
                      FAQ #{index + 1}
                    </span>
                    <div className="flex gap-0">
                      <button
                        onClick={() => {
                          const updated = [...faqsData];
                          updated[index].isVisible = true;
                          setFaqsData(updated);
                        }}
                        className={`px-3 py-[2px] text-[12px] font-medium uppercase tracking-[0.05em] rounded-sm transition-colors border border-[#444] ${
                          faq.isVisible ? 'bg-[#ABABAB] text-black' : 'text-white/50'
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
                        className={`px-3 py-[2px] text-[12px] font-medium uppercase tracking-[0.05em] rounded-sm transition-colors border border-[#444] ${
                          !faq.isVisible ? 'bg-[#ABABAB] text-black' : 'text-white/50'
                        }`}
                      >
                        Hide
                      </button>
                    </div>
                  </div>

                  {faq.isVisible && (
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-12 items-center gap-4">
                        <label className="col-span-2 text-[#ABABAB] text-sm">Question</label>
                        <input
                          type="text"
                          className="col-span-10 scrollbar-hide border border-gray-700/50 rounded px-4 py-2 text-white bg-transparent w-full focus:outline-none focus:ring focus:border-gray-500"
                          value={faq.question}
                          onChange={(e) => handleChange(index, 'question', e.target.value)}
                          placeholder="Enter heading here"
                        />
                      </div>

                      <div className="grid grid-cols-12 items-start gap-4">
                        <label className="col-span-2 text-[#ABABAB] text-sm mt-2">Answers</label>
                        <textarea
                          className="col-span-10 scrollbar-hide border border-gray-700/50 rounded px-4 py-3 text-[#ABABAB] bg-transparent w-full focus:outline-none focus:ring focus:border-gray-500"
                          value={faq.answer}
                          rows={3}
                          onChange={(e) => handleChange(index, 'answer', e.target.value)}
                          placeholder="Enter description here"
                        />
                      </div>

                      <div className="grid grid-cols-12 items-start gap-4">
                        <label className="col-span-2 text-[#ABABAB] text-sm mt-2">Disclaimer</label>
                        <textarea
                          className="col-span-10 scrollbar-hide border border-gray-700/50 rounded px-4 py-3 text-[#ABABAB] bg-transparent w-full focus:outline-none focus:ring focus:border-gray-500"
                          value={faq.disclaimer}
                          rows={3}
                          onChange={(e) => handleChange(index, 'disclaimer', e.target.value)}
                          placeholder="Enter Disclaimer here"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}

            <div className="mt-6">
              <button
                onClick={() =>
                  setFaqsData([
                    ...faqsData,
                    {
                      id: Date.now().toString(),
                      question: '',
                      answer: '',
                      disclaimer: '',
                      isNew: true,
                      isVisible: true,
                    },
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
