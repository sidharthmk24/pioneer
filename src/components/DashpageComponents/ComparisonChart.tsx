'use client';
import { useEffect, useState } from 'react';
import { collection, doc, getDocs, onSnapshot, updateDoc } from 'firebase/firestore';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { db } from '../../app/utils/Firebase/firebaseConfig';

interface ComparisonData {
  id: string;
  feature: string;
  Z820DC: string;
  H520DC: string;
  H320SC: string;
  H120SC: string;
}

interface ComparisonChartProps {
  onSaveRegister: (fn: () => void) => void;
}

export default function ComparisonChart({ onSaveRegister }: ComparisonChartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [comparisonData, setComparisonData] = useState<ComparisonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, 'comparison_chart'));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as ComparisonData[];
      setComparisonData(data);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const saveAllChanges = async () => {
    try {
      for (const row of comparisonData) {
        const docRef = doc(db, 'comparison_chart', row.id);
        const { id, ...data } = row;
        await updateDoc(docRef, data);
      }
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      setError('Failed to save changes. Please try again.');
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'comparison_chart'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as ComparisonData[];
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

  useEffect(() => {
    onSaveRegister(saveAllChanges);
  }, [comparisonData]);


  return (
    <div className="border-b border-gray-700/30 py-1">
      <div
        className="flex justify-between items-center cursor-pointer py-2 px-4 md:px-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-white text-[35px] font-medium">Comparison Chart</h2>
        {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
      </div>

      {isOpen && (
        <div className="px-4 md:px-22 pb-8">
          <div className="flex justify-between mb-4">
            <p className="text-[#ABABAB] text-[18px]">
              Edit the text in the fields below and click 'Save' to update the website.
            </p>
            {/* <button
              onClick={saveAllChanges}
              className="bg-[#AD2239] text-white px-5 py-2 rounded hover:bg-[#911c30] transition"
            >
              Save Changes
            </button> */}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-700/50 rounded text-red-300">
              {error}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-600/30 rounded-lg">
              <thead>
                <tr>
                  <th className="px-6 py-4 border border-gray-600/30 text-left text-[#ABABAB] text-[20px]">Feature</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] text-[20px]">VREC - Z820DC</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] text-[20px]">VREC - H520DC</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] text-[20px]">VREC - H320SC</th>
                  <th className="px-6 py-4 border border-gray-600/30 text-center text-[#ABABAB] text-[20px]">VREC - H120SC</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-[#ABABAB]">Loading data...</td>
                  </tr>
                ) : comparisonData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-[#ABABAB]">No data available</td>
                  </tr>
                ) : (
                  comparisonData.map((row, rowIndex) => (
                    <tr key={row.id} className="hover:bg-[#1A1A1A]/50">
                      {['feature', 'Z820DC', 'H520DC', 'H320SC', 'H120SC'].map((field) => (
                        <td
                          key={field}
                          className="px-4 py-9   w-[240px] border-r border-gray-600/30 text-center"
                        >
                          <input
                            type="text"
                            className="w-full bg-transparent text-white text-center  border-transparent focus:outline-none focus:border-gray-500"
                            value={row[field as keyof Omit<ComparisonData, 'id'>] || ''}
                            onChange={(e) => {
                              const newData = [...comparisonData];
                              newData[rowIndex] = {
                                ...newData[rowIndex],
                                [field]: e.target.value,
                              };
                              setComparisonData(newData);
                            }}
                          />
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}