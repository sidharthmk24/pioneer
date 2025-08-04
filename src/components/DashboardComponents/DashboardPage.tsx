'use client';
import DashboardMain from '../DashpageComponents/DashboardMain';

interface DashboardPageProps {
  onSave: (fn: () => void) => void;
}

export default function DashboardPage({ onSave }: DashboardPageProps) {
  return (
    <div className="flex h-screen bg-[#0D0D0D]">
      {/* Sidebar would go here if needed */}
      <div className="flex-1">
        <DashboardMain onSave={onSave} />
      </div>
    </div>
  );
}
