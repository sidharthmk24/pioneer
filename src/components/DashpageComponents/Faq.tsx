'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { db } from '../../app/utils/Firebase/firebaseConfig';
import FaqModal from './Modals/FaqModal';
import { p } from 'framer-motion/client';

interface FaqData {
  question: string;
  answer: string;
}

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [faqsData, setFaqsData] = useState<FaqData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const testFirebaseConnection = async () => {
    try {
      console.log('Testing Firebase connection for FAQs...');
      const snapshot = await getDocs(collection(db, 'faqs'));
      console.log('Firebase connection successful. Found', snapshot.docs.length, 'documents');
      return true;
    } catch (error) {
      console.error('Firebase connection test failed:', error);
      setError('Firebase connection failed. Please check your internet connection and Firebase configuration.');
      return false;
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');

      // Test connection first
      const isConnected = await testFirebaseConnection();
      if (!isConnected) return;

      const snapshot = await getDocs(collection(db, 'faqs'));
      const data = snapshot.docs.map(doc => doc.data() as FaqData);
      console.log('Fetched FAQs data:', data);
      setFaqsData(data);
    } catch (error: any) {
      console.error('Error fetching FAQs data:', error);
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Real-time listener for data changes
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'faqs'), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data() as FaqData);
      console.log('Real-time FAQs data update:', data);
      setFaqsData(data);
      setLoading(false);
      setError('');
    }, (error) => {
      console.error('Error in real-time listener:', error);
      setError(`Real-time listener error: ${error.message}`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddFaq = () => {
    setShowModal(true);
    // Small delay to ensure state is set before animation
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    // Wait for animation to complete before hiding modal
    setTimeout(() => setShowModal(false), 300);
  };

  return (
    <div className="border-b border-gray-700/30 py-1">
      <div
        className="flex justify-between items-center cursor-pointer py-6 px-4 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white text-[42px] font-medium">FAQs</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div className="">
         <div className="flex justify-between">
           <p className='px-8 text-[#ABABAB] text-18px'>Edit the text in the fields below and click 'Save' to update the website</p>
              {/* <button
              onClick={handleAddFaq}
              className="flex me-27 items-center gap-2 px-4 py-2 bg-[#AD2239] hover:bg-[#911c30] text-white rounded-lg font-medium transition-colors"
            >
              <Plus size={20} />



              Add
            </button> */}
         </div>
        <div className="px-4 md:px-22 pb-8">
          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-700/50 rounded text-red-300">
              {error}
            </div>
          )}

          <div className="mb-6 flex justify-between items-center">
        
          </div>

          {/* Modal */}
          {showModal && (
            <div
              className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out ${isModalVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
                }`}
              onClick={handleModalClose}
            >
              <div
                className={`bg-[#0D0D0D] border border-gray-700/50 rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ease-in-out transform ${isModalVisible
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-4 opacity-0 scale-95'
                  }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  {/* <h3 className="text-white text-2xl font-semibold">Add New FAQ</h3> */}
                  <button
                    onClick={handleModalClose}
                    className="text-gray-400 hover:text-white text-3xl font-light transition-colors"
                  >
                    ×
                  </button>
                </div>
                <FaqModal
                  onAdded={() => {
                    fetchData();
                    handleModalClose();
                  }}
                />
              </div>
            </div>
          )}

          <div className="space-y-4">
            {loading ? (
              <div className="text-center text-[#ABABAB] py-8">
                Loading FAQs...
              </div>
            ) : faqsData.length === 0 ? (
              <div className="text-center text-[#ABABAB] py-8">
                There is no FAQ data
              </div>
            ) : (
            faqsData.map((faq, index) => (
  <div
    key={index}
    className="flex flex-row justify-between gap-6 p-6 mb-6 bg-[#0D0D0D]"
  >
    {/* Left Column */}
    <div className="flex flex-col w-1/3 text-white text-sm font-medium">
      <span className="mb-6">FAQ #{index + 1}</span>

      <div className="flex flex-col gap-6">
        <div>
          <label className="text-[#ABABAB] text-sm block mb-1">Heading</label>
        </div>
        <div>
          <label className="text-[#ABABAB] text-sm block mb-1">Description</label>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col w-2/3 text-sm space-y-4">
      {/* Show/Hide Buttons */}
      <div className="flex gap-3 justify-end mb-2">
        <button className="px-4 py-1 bg-[#ABABAB] text-black text-xs font-medium rounded">
          SHOW
        </button>
        <button className="px-4 py-1 bg-black/20 text-[#ABABAB] text-xs font-medium rounded border border-[#282828]">
          HIDE
        </button>
      </div>

      {/* Question (aligned with "Heading") */}
      <div className="border border-gray-700/50 rounded px-4 py-2 text-white">
        {faq.question}
      </div>

      {/* Answer (aligned with "Description") */}
      <div className="border border-gray-700/50 rounded px-4 py-3 text-[#ABABAB]">
        {faq.answer}
      </div>
    </div>
  </div>
))
            )}
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
