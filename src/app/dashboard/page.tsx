'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import DashboardPage from '@/components/DashboardComponents/DashboardPage';
import Header from '@/components/DashboardComponents/Header';
import SideBar from '@/components/DashboardComponents/SideBar';






const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [saveTrigger, setSaveTrigger] = useState(0);
  const { user, loading } = useAuth();
  const router = useRouter();
  const [selectedModelName, setSelectedModelName] = useState("VREC-H520DC");
    const [selectedModel, setSelectedModel] = useState("detailed_specs_H520DC");
const [selectedFaqCollection, setSelectedFaqCollection] = useState("faq_h520dc");
  



  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleModelSelect = (collection: string, name: string) => {
    setSelectedModel(collection);
    setSelectedModelName(name);
     setSelectedFaqCollection(faqCol);
  };


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
      {sidebarOpen && (
        <SideBar
          selectedModel={selectedModel}
          onSelectModel={handleModelSelect}
        />
      )}

      <main className="flex-1 bg-[#0D0D0D] h-screen flex flex-col">
        <Header  onToggleSidebar={handleToggleSidebar} selectedModel={selectedModel}
          modelName={selectedModelName}
          onSaveClick={handleSaveClick} />
        <DashboardPage saveTrigger={saveTrigger} selectedModel={selectedModel} />
      </main>
    </div>
  );
};

export default Page;
