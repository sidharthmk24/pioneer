'use client';
import DashboardMain from '../DashpageComponents/DashboardMain';


export default function DashboardPage({ saveTrigger,selectedModel }: { saveTrigger: number,selectedModel:string }) {
  return (
    <div className="flex h-screen bg-[#0D0D0D]">
      {/* Sidebar would go here if needed */}
      <div className="flex-1">
        <DashboardMain selectedModel={selectedModel} saveTrigger={saveTrigger} />
      </div>
    </div>
  );
}
