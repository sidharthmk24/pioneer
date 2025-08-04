'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { collection, doc, updateDoc, writeBatch } from 'firebase/firestore';
import { db } from '../app/utils/Firebase/firebaseConfig';

interface FaqItem {
  id?: string;
  question: string;
  answer: string;
}

interface EditContextType {
  pendingChanges: FaqItem[];
  isEditing: boolean;
  isSaving: boolean;
  addChange: (item: FaqItem) => void;
  removeChange: (id: string) => void;
  saveChanges: () => Promise<void>;
  clearChanges: () => void;
  setIsEditing: (editing: boolean) => void;
}

const EditContext = createContext<EditContextType | undefined>(undefined);

export const useEditContext = () => {
  const context = useContext(EditContext);
  if (!context) {
    throw new Error('useEditContext must be used within an EditProvider');
  }
  return context;
};

interface EditProviderProps {
  children: ReactNode;
}

export const EditProvider: React.FC<EditProviderProps> = ({ children }) => {
  const [pendingChanges, setPendingChanges] = useState<FaqItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const addChange = useCallback((item: FaqItem) => {
    setPendingChanges(prev => {
      const existingIndex = prev.findIndex(change => change.id === item.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = item;
        return updated;
      }
      return [...prev, item];
    });
  }, []);

  const removeChange = useCallback((id: string) => {
    setPendingChanges(prev => prev.filter(item => item.id !== id));
  }, []);

  const saveChanges = useCallback(async () => {
    if (pendingChanges.length === 0) return;

    setIsSaving(true);
    try {
      const batch = writeBatch(db);
      
      pendingChanges.forEach(item => {
        if (item.id) {
          // Update existing document
          const docRef = doc(db, 'faqs', item.id);
          batch.update(docRef, {
            question: item.question,
            answer: item.answer,
            updatedAt: new Date()
          });
        } else {
          // Add new document
          const newDocRef = doc(collection(db, 'faqs'));
          batch.set(newDocRef, {
            question: item.question,
            answer: item.answer,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        }
      });

      await batch.commit();
      clearChanges();
      
      // Show success feedback
      console.log('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving changes:', error);
      throw error;
    } finally {
      setIsSaving(false);
    }
  }, [pendingChanges]);

  const clearChanges = useCallback(() => {
    setPendingChanges([]);
    setIsEditing(false);
  }, []);

  const value: EditContextType = {
    pendingChanges,
    isEditing,
    isSaving,
    addChange,
    removeChange,
    saveChanges,
    clearChanges,
    setIsEditing
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};
