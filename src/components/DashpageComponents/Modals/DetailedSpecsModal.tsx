'use client';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../app/utils/Firebase/firebaseConfig';

interface DetailedSpecsModalProps {
  onAdded: () => void;
}

export default function DetailedSpecsModal({ onAdded }: DetailedSpecsModalProps) {
  const [formData, setFormData] = useState({
    feature: '',
    value: ''
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

    if (!formData.value.trim()) {
      setMessage('Value is required.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');
      
      console.log('Attempting to add detailed spec to Firebase...');
      console.log('Data to be added:', {
        feature: formData.feature.trim(),
        value: formData.value.trim(),
      });

      if (!db) {
        throw new Error('Firebase database is not initialized');
      }

      const docRef = await addDoc(collection(db, 'detailed_specs'), {
        feature: formData.feature.trim(),
        value: formData.value.trim(),
      });

      console.log('Document written with ID:', docRef.id);

      setFormData({ feature: '', value: '' });
      setMessage('Spec added successfully!');
      onAdded();
      setTimeout(() => setMessage(''), 3000);
      
    } catch (error: any) {
      console.error('Error adding data:', error);
      let errorMessage = 'Error adding spec. Please try again.';
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
          <label className="block text-white font-bold text-[48px]">Feature</label>
          <input
            type="text"
            name="feature"
            value={formData.feature}
            onChange={handleChange}
            // placeholder="Enter feature name"
            className="w-1/2  border border-gray-600/50 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[#ABABAB] font-medium text-sm">Value</label>
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleChange}
            // placeholder="Enter value"
            className="w-1/2  border border-gray-600/50 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AD2239] transition-colors"
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
  );
} 

