'use client';
import ProductHighlight from './ProductHighlight';
import ComparisonChart from './ComparisonChart';
import DetailedSpec from './DetailedSpec';
import Faq from './Faq';
import RetailerHyperlinks from './RetailerHyperlinks';

export default function DashboardMain() {
  return (
    <div className="text-white px-13 overflow-y-auto h-[calc(100vh-80px)] bg-[#0D0D0D]">
      {/* <ProductHighlight /> */}
      <ComparisonChart />
      <DetailedSpec />
      <Faq />
      <RetailerHyperlinks />
    </div>
  );
} 