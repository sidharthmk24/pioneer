'use client';
import DashboardMain from '../DashpageComponents/DashboardMain';


export default function DashboardPage({ saveTrigger,selectedModel, modelName }: {  modelName:string, saveTrigger: number,selectedModel:string }) {
  return (
    <div className="flex h-screen bg-[#0D0D0D]">
      {/* Sidebar would go here if needed */}
      <div className="flex-1">
        <DashboardMain modelName={modelName} selectedModel={selectedModel} saveTrigger={saveTrigger} />
      </div>
    </div>
  );
}
