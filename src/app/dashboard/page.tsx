'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import DashboardPage from '@/components/DashboardComponents/DashboardPage';
import Header from '@/components/DashboardComponents/Header';
import SideBar from '@/components/DashboardComponents/SideBar';

const Page = () => {
  const [saveTrigger, setSaveTrigger] = useState(0);
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSaveClick = () => {
    setSaveTrigger(prev => prev + 1);
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); // redirect if not logged in
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 bg-[#0D0D0D] h-screen flex flex-col">
        <Header onSaveClick={handleSaveClick} />
        <DashboardPage saveTrigger={saveTrigger} />
      </main>
    </div>
  );
};

export default Page;
