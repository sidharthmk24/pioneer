'use client';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../app/utils/Firebase/firebaseConfig';

interface AddComparisonModalProps {
  onAdded: () => void;
}

export default function AddComparisonModal({ onAdded }: AddComparisonModalProps) {
  const [formData, setFormData] = useState({
    feature: '',
    Z820DC: '',
    H520DC: '',
    H320SC: '',
    H120SC: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.feature.trim()) {
      setMessage('Feature name is required.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');
      
      console.log('Attempting to add data to Firebase...');
      console.log('Data to be added:', {
        feature: formData.feature.trim(),
        Z820DC: formData.Z820DC.trim() || '-',
        H520DC: formData.H520DC.trim() || '-',
        H320SC: formData.H320SC.trim() || '-',
        H120SC: formData.H120SC.trim() || '-',
      });

      if (!db) {
        throw new Error('Firebase database is not initialized');
      }

      const docRef = await addDoc(collection(db, 'comparison_chart'), {
        feature: formData.feature.trim(),
        Z820DC: formData.Z820DC.trim() || '-',
        H520DC: formData.H520DC.trim() || '-',
        H320SC: formData.H320SC.trim() || '-',
        H120SC: formData.H120SC.trim() || '-',
      });

      console.log('Document written with ID:', docRef.id);

      setFormData({ feature: '', Z820DC: '', H520DC: '', H320SC: '', H120SC: '' });
      setMessage('Feature added successfully!');
      onAdded();
      setTimeout(() => setMessage(''), 3000);
      
    } catch (error: any) {
      console.error('Error adding data:', error);
      let errorMessage = 'Error adding feature. Please try again.';
      if (error.code === 'permission-denied') {
        errorMessage = 'Permission denied. Check Firebase security rules.';
      } else if (error.code === 'unavailable') {
        errorMessage = 'Firebase service unavailable. Check your internet connection.';
      } else if (error.code === 'unauthenticated') {
        errorMessage = 'Authentication required. Please sign in.';
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {message && (
        <div className={`p-4 rounded-lg text-sm font-medium ${
          message.includes('successfully') 
            ? 'bg-green-900/20 border border-green-700/50 text-green-300' 
            : 'bg-red-900/20 border border-red-700/50 text-red-300'
        }`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <input
            type="text"
            name="feature"
            value={formData.feature}
            onChange={handleChange}
            placeholder="Enter feature name"
            className="w-full bg-[#2A2A2A] border border-gray-600/50 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-white font-medium text-sm w-24">VREC-Z820DC</label>
            <input
              type="text"
              name="Z820DC"
              value={formData.Z820DC}
              onChange={handleChange}
              placeholder="Enter value"
              className="flex-1 bg-[#2A2A2A] border border-gray-600/50 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-white font-medium text-sm w-24">VREC-H520DC</label>
            <input
              type="text"
              name="H520DC"
              value={formData.H520DC}
              onChange={handleChange}
              placeholder="Enter value"
              className="flex-1 bg-[#2A2A2A] border border-gray-600/50 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-white font-medium text-sm w-24">VREC-H320SC</label>
            <input
              type="text"
              name="H320SC"
              value={formData.H320SC}
              onChange={handleChange}
              placeholder="Enter value"
              className="flex-1 bg-[#2A2A2A] border border-gray-600/50 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-white font-medium text-sm w-24">VREC-H120SC</label>
            <input
              type="text"
              name="H120SC"
              value={formData.H120SC}
              onChange={handleChange}
              placeholder="Enter value"
              className="flex-1 bg-[#2A2A2A] border border-gray-600/50 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3 bg-[#AD2239] hover:bg-[#911c30] disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
