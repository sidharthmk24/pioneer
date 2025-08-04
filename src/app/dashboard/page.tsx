"use client";
import { useState } from 'react';
import DashboardPage from '@/components/DashboardComponents/DashboardPage';
import Header from '../../components/DashboardComponents/Header';
import SideBar from '@/components/DashboardComponents/SideBar';

const Page = () => {
  const [saveAllChangesFn, setSaveAllChangesFn] = useState<() => void>(() => () => {});

  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 bg-[#0D0D0D] h-screen flex flex-col">
        <Header onSave={saveAllChangesFn} />
        <DashboardPage onSave={setSaveAllChangesFn} />
      </main>
    </div>
  );
};

export default Page;
