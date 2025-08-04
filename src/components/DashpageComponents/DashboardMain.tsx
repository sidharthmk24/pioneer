'use client';
import ProductHighlight from './ProductHighlight';
import ComparisonChart from './ComparisonChart';
import DetailedSpec from './DetailedSpec';
import Faq from './Faq';
import RetailerHyperlinks from './RetailerHyperlinks';
import { useState } from 'react';



export default function DashboardMain() {
const [comparisonSaveFn, setComparisonSaveFn] = useState<() => void>(() => () => {});
  const [detailedSpecSaveFn, setDetailedSpecSaveFn] = useState<() => void>(() => () => {});
  const [faqSaveFn, setFaqSaveFn] = useState<() => void>(() => () => {});

   const handleSaveAll = () => {
    comparisonSaveFn();
    detailedSpecSaveFn();
    faqSaveFn();
  };
  
  return (
    <div className="text-white px-13 overflow-y-auto h-[calc(100vh-80px)] bg-[#0D0D0D]">
      {/* <ProductHighlight /> */}
      <ComparisonChart  onSaveRegister={(fn) => setComparisonSaveFn(() => fn)}/>
      <DetailedSpec onSaveRegister={(fn) => setDetailedSpecSaveFn(() => fn)} />
      <Faq onSaveRegister={(fn) => setFaqSaveFn(() => fn)} />
      <RetailerHyperlinks />
    </div>
  );
} 