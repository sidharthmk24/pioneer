'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { db } from '../../app/utils/Firebase/firebaseConfig';
import DetailedSpecsModal from './Modals/DetailedSpecsModal';
import { updateDoc, doc } from 'firebase/firestore';

interface SpecData {
  id: string;
  feature: string;
  value: string;
}

interface DetailedSpecProps {
  onSaveRegister: (fn: () => void) => void;
}


export default function DetailedSpec({ onSaveRegister,selectedCollection }: { onSaveRegister: (fn: () => void) => void ;selectedCollection:string}) {

console.log(selectedCollection);

  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [specsData, setSpecsData] = useState<SpecData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


    useEffect(() => {
    onSaveRegister(saveChanges);
  }, [specsData]);
  


  const saveChanges = async () => {
  try {
    console.log("Saving specsData:", specsData); // Debug

    for (const row of specsData) {
      const { id, ...rest } = row;
      console.log("Updating doc:", id, rest); // Debug

      const docRef = doc(db, selectedCollection, id);
      await updateDoc(docRef, rest);
    }

    // alert('Detailed specs saved successfully!');
  } catch (err) {
    console.error('Error saving detailed specs:', err);
    alert('Failed to save detailed specs.');
  }
};

  const testFirebaseConnection = async () => {
    try {
      console.log('Testing Firebase connection for detailed specs...');
      const snapshot = await getDocs(collection(db, selectedCollection));
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

      const snapshot = await getDocs(collection(db, selectedCollection));
      // const data = snapshot.docs.map(doc => doc.data() as SpecData);
 const data = snapshot.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
})) as (SpecData & { id: string })[];
 
      console.log('Fetched detailed specs data:', data);
      setSpecsData(data);
    } catch (error: any) {
      console.error('Error fetching detailed specs data:', error);
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Real-time listener for data changes
useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, selectedCollection), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<SpecData, 'id'>),
    }));

    // Only update if not actively editing (optional, but safer)
    setSpecsData((prev) => {
      const isSame = JSON.stringify(prev) === JSON.stringify(data);
      if (isSame) return prev; // skip overwrite
      return data;
    });

    setLoading(false);
    setError('');
  }, (error) => {
    console.error('Error in real-time listener:', error);
    setError(`Real-time listener error: ${error.message}`);
    setLoading(false);
  });

  if (onSaveRegister) {
    onSaveRegister(saveChanges);
  }

  return () => unsubscribe();
}, [selectedCollection]);

  const handleAddSpec = () => {
    setShowModal(true);
    // Small delay to ensure state is set before animation
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    // Wait for animation to complete before hiding modal
    setTimeout(() => setShowModal(false), 300);
  };

  console.log(specsData,"spec");
  

//   useEffect(()=>{
// specsData.filter()
//   },[])

  const handleInputChange = (index: number, field: 'feature' | 'value', value: string) => {
  const updatedSpecs = [...specsData];
  updatedSpecs[index] = { ...updatedSpecs[index], [field]: value };
  setSpecsData(updatedSpecs);
};
console.log("Rendering specsData:", specsData); // ✅ Safe here

  return (
    <div className="border-b border-gray-700/30 py-1">
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-4 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white text-[35px] font-medium">Detailed Specs</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div className="">
           <div className="flex justify-between mb-4">
                     <p className='px-8 text-[#ABABAB] text-18px'>Edit the text in the fields below and click 'Save' to update the website</p>
                        {/* <button
                        onClick={handleAddSpec}
                        className="flex me-27 items-center gap-2 px-4 py-2 bg-[#AD2239] hover:bg-[#911c30] text-white rounded-lg font-medium transition-colors"
                      >
          
          
          
                        save changes
                      </button> */}
                   </div>
        <div className="px-4 md:px-22 pb-8">
          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-700/50 rounded text-red-300">
              {error}
            </div>
          )}
{/*           
          <div className="mb-6 flex justify-between items-center">
            <h3 className="text-white text-lg font-semibold">Specifications</h3>
           
          </div> */}

          {/* Modal */}
          {/* {showModal && (
            <div 
              className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out ${
                isModalVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              onClick={handleModalClose}
            >
              <div 
                className={`bg-[#0D0D0D] border border-gray-700/50 rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ease-in-out transform ${
                  isModalVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-4 opacity-0 scale-95'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  {/* <h3 className="text-white text-2xl font-semibold">Add New Specification</h3> */}
                  {/* <button
                    onClick={handleModalClose}
                    className="text-gray-400 hover:text-white text-3xl font-light transition-colors"
                  >
                    ×
                  </button>
                </div>
                <DetailedSpecsModal 
                  onAdded={() => {
                    fetchData();
                    handleModalClose();
                  }} 
                />
              </div>
            </div>
          )} */} 

          <div className="space-y-4">
            {loading ? (
              <div className="text-center text-[#ABABAB] py-8">
                Loading specifications...
              </div>
            ) : specsData.length === 0 ? (
              <div className="text-center text-[#ABABAB] py-8">
                Add specifications
                
              </div>
              
            ) : (
              
              
            specsData.map((spec, index) => (
              
  <div key={spec.id} className="flex items-center space-x-4 mb-4">
    <div className="w-1/3">
      <input
        type="text"
        className="w-full bg-transparent  border-gray-600 p-3 rounded text-white font-medium"
        value={spec.feature}
        onChange={(e) => handleInputChange(index, 'feature', e.target.value)}
      />
    </div>
    <div className="w-2/3">
      <input
        type="text"
        className="w-full bg-transparent border border-gray-600/50 p-3 rounded text-gray-300"
        value={spec.value}
        onChange={(e) => handleInputChange(index, 'value', e.target.value)}
      />
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
