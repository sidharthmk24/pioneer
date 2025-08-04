'use client';
import DashboardMain from '../DashpageComponents/DashboardMain';


export default function DashboardPage({ saveTrigger }: { saveTrigger: number }) {
  return (
    <div className="flex h-screen bg-[#0D0D0D]">
      {/* Sidebar would go here if needed */}
      <div className="flex-1">
        <DashboardMain saveTrigger={saveTrigger} />
      </div>
    </div>
  );
}
