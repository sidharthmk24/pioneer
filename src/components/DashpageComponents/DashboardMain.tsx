'use client';
import { useEffect, useState } from 'react';
import ProductHighlight from './ProductHighlight';
import ComparisonChart from './ComparisonChart';
import DetailedSpec from './DetailedSpec';
import Faq from './Faq';
import RetailerHyperlinks from './RetailerHyperlinks';

interface DashboardMainProps {
  saveTrigger: number;
}

export default function DashboardMain({ saveTrigger }: DashboardMainProps) {
  const [comparisonSaveFn, setComparisonSaveFn] = useState<() => void>(() => () => {});
  const [detailedSpecSaveFn, setDetailedSpecSaveFn] = useState<() => void>(() => () => {});
  const [faqSaveFn, setFaqSaveFn] = useState<() => void>(() => () => {});

  const handleSaveAll = () => {
    console.log('Save All Triggered');
    comparisonSaveFn();
    detailedSpecSaveFn();
    faqSaveFn();
  };

  // 🟡 Listen for trigger change and run save
  useEffect(() => {
    handleSaveAll();
  }, [saveTrigger]);

  return (
    <div className="text-white px-13 overflow-y-auto h-[calc(100vh-80px)] bg-[#0D0D0D] scrollbar-hide">
      {/* <ProductHighlight /> */}
      <ComparisonChart onSaveRegister={(fn) => setComparisonSaveFn(() => fn)} />
      <DetailedSpec onSaveRegister={(fn) => setDetailedSpecSaveFn(() => fn)} />
      <Faq onSaveRegister={(fn) => setFaqSaveFn(() => fn)} />
      <RetailerHyperlinks />
    </div>
  );
}
