'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '@/app/utils/Firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  modelKey: string; // 👈 new prop to determine which collection to fetch from
}

export const SpecsModal: React.FC<SpecsModalProps> = ({ isOpen, onClose, modelKey }) => {
  const [specs, setSpecs] = useState<{ feature: string; value: string }[]>([]);

  useEffect(() => {
    if (!isOpen || !modelKey) return;

    const fetchSpecs = async () => {
      try {
        const snapshot = await getDocs(collection(db, `detailed_specs_${modelKey}`)); // collection name like "specs_Z820DC"
        const specData: { feature: string; value: string }[] = [];
        snapshot.forEach(doc => {
          specData.push(doc.data() as any);
        });
        setSpecs(specData);
      } catch (error) {
        console.error('Error fetching specs:', error);
      }
    };
    

    fetchSpecs();
  }, [isOpen, modelKey]);

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-none border-gray-700/50 border-3 text-white rounded-2xl w-full max-w-3xl h-[90vh] relative overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition z-10"
              aria-label="Close"
            >
              <img src="/images/svgs/closeIcon.svg" alt="Close" />
            </button>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto h-full px-4 md:px-[6rem] py-8 md:py-12 bg-none"
              style={{
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE 10+
              }}
            >
            <style jsx>{`
                 div::-webkit-scrollbar {
                   display: none;
                 }
               `}</style>

              <h2 className="text-[22px] md:text-[37px] font-semibold mt-4 mb-8 md:mt-12 md:mb-17 text-center md:text-left">
                Detailed Specifications
              </h2>

              <div className="space-y-6">
              {specs.map((spec, index) => (
            <li key={index} className="flex justify-between text-sm text-[#d0d0d0]">
              <span className="w-1/2 text-[#ABABAB] text-[18px]">{spec.feature}</span>
              <span className="w-1/2 text-right text-[24px] text-[#E2E2E2]">{spec.value}</span>
            </li>
          ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

  );
};
