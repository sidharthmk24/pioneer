'use client';
import { useEffect, useState } from 'react';
import ProductHighlight from './ProductHighlight';
import ComparisonChart from './ComparisonChart';
import DetailedSpec from './DetailedSpec';
import Faq from './Faq';
import RetailerHyperlinks from './RetailerHyperlinks';

interface DashboardMainProps {
  saveTrigger: number;
  selectedModel: string; // ✅ NEW
}

export default function DashboardMain({ saveTrigger, selectedModel }: DashboardMainProps) {
  const [comparisonSaveFn, setComparisonSaveFn] = useState<() => void>(() => () => { });
  const [detailedSpecSaveFn, setDetailedSpecSaveFn] = useState<() => void>(() => () => { });
  const [faqSaveFn, setFaqSaveFn] = useState<() => void>(() => () => { });
  const [retailerSaveFn, setRetailerSaveFn] = useState<() => void>(() => {});
  

  const handleSaveAll = () => {
    console.log('Save All Triggered');
    comparisonSaveFn();
    detailedSpecSaveFn();
    faqSaveFn();
      retailerSaveFn?.(); 
  };

  useEffect(() => {
    handleSaveAll();
  }, [saveTrigger]);

  return (
    <div className="text-white px-13 overflow-y-auto h-[calc(100vh-80px)] bg-[#0D0D0D] scrollbar-hide">
      {/* <h1 className="text-xl font-semibold mb-4">Current Model: {selectedModel}</h1> */}

      {/* Pass selectedModel to each section */}
      <ComparisonChart model={selectedModel} onSaveRegister={(fn) => setComparisonSaveFn(() => fn)} />


      <DetailedSpec
        selectedCollection={selectedModel}
        onSaveRegister={(fn) => setDetailedSpecSaveFn(() => fn)}


      />    
<Faq
  collectionName={`faq_${selectedModel.replace(/-/g, '')}`}
  onSaveRegister={(fn) => setFaqSaveFn(() => fn)}
/>

      <RetailerHyperlinks  onSaveRegister={(fn) => setRetailerSaveFn(() => fn)}
  model={selectedModel} />
    </div>
  );
}
