'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { db } from '../../app/utils/Firebase/firebaseConfig';
import AddComparisonModal from '../DashpageComponents/Modals/ComparisionModal';

interface ComparisonData {
  feature: string;
  Z820DC: string;
  H520DC: string;
  H320SC: string;
  H120SC: string;
}

export default function ComparisonChart() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comparisonData, setComparisonData] = useState<ComparisonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const testFirebaseConnection = async () => {
    try {
      console.log('Testing Firebase connection...');
      const snapshot = await getDocs(collection(db, 'comparison_chart'));
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

      const snapshot = await getDocs(collection(db, 'comparison_chart'));
      const data = snapshot.docs.map(doc => doc.data() as ComparisonData);
      console.log('Fetched data:', data);
      setComparisonData(data);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Real-time listener for data changes
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'comparison_chart'), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data() as ComparisonData);
      console.log('Real-time data update:', data);
      setComparisonData(data);
      setLoading(false);
      setError('');
    }, (error) => {
      console.error('Error in real-time listener:', error);
      setError(`Real-time listener error: ${error.message}`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddFeature = () => {
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
        <h2 className="text-white text-[42px] font-medium">Comparison Chart</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div className="">
               <div className="flex justify-between mb-4">
                               <p className='px-8 text-[#ABABAB] text-18px'>Edit the text in the fields below and click 'Save' to update the website</p>
                                  {/* <button
                                  onClick={handleAddFeature}
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
            {/* <h3 className="text-white text-lg font-semibold">Comparison Data</h3>
            <button
              onClick={handleAddFeature}
              className="flex items-center gap-2 px-4 py-2 bg-[#AD2239] hover:bg-[#911c30] text-white rounded-lg font-medium transition-colors"
            >
              <Plus size={20} />
              Add 
            </button> */}
          </div>

          {/* Modal */}
          {showModal && (
            <div 
              className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ease-in-out ${
                isModalVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
              onClick={handleModalClose}
            >
              <div 
                className={`bg-[#1A1A1A] border border-gray-700/50 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl transition-all duration-300 ease-in-out transform ${
                  isModalVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-4 opacity-0 scale-95'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white text-2xl font-semibold">Feature</h3>
                  <button
                    onClick={handleModalClose}
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <AddComparisonModal 
                  onAdded={() => {
                    fetchData();
                    handleModalClose();
                  }} 
                />
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-600/30 rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-8 border border-gray-600/30 text-left text-[#ABABAB] font-medium text-[20px]"></th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] font-medium text-[20px]">VREC - Z820DC</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] font-medium text-[20px]">VREC - H520DC</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] font-medium text-[20px]">VREC - H320SC</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] font-medium text-[20px]">VREC - H120SC</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-[#ABABAB]">
                      Loading data...
                    </td>
                  </tr>
                ) : comparisonData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-[#ABABAB]">
                      No data available. Click "Add New Feature" to get started.
                    </td>
                  </tr>
                ) : (
                  comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-[#1A1A1A]/50">
                      <td className="px-6 w-[240px] py-9 border-r border-gray-600/30 text-white font-medium text-[20px]">
                        {row.feature || '-'}
                      </td>
                      <td className="px-6 py-4 w-[240px] border-r border-gray-600/30 text-center text-[#ABABAB] text-[20px]">
                        {row.Z820DC || '-'}
                      </td>
                      <td className="px-6 py-4 w-[240px] border-r border-gray-600/30 text-center text-[#ABABAB] text-[20px]">
                        {row.H520DC || '-'}
                      </td>
                      <td className="px-6 py-4 w-[240px] border-r border-gray-600/30 text-center text-[#ABABAB] text-[20px]">
                        {row.H320SC || '-'}
                      </td>
                      <td className="px-6 py-4 w-[240px] text-center text-[#ABABAB] text-[20px]">
                        {row.H120SC || '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
