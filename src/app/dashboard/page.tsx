'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import DashboardPage from '@/components/DashboardComponents/DashboardPage';
import Header from '@/components/DashboardComponents/Header';
import SideBar from '@/components/DashboardComponents/SideBar';
import { motion } from 'framer-motion';



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
    setSelectedFaqCollection("faq_" + collection.split("_").pop()); // fix: use dynamic string
  };

  const handleSaveClick = () => {
    setSaveTrigger(prev => prev + 1);
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
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
    <motion.div className="flex h-screen" layout>
      {/* Sidebar */}
     <motion.div
  layout

  animate={{ width: sidebarOpen ? 250 : 0 ,
              opacity:sidebarOpen?1:0
  }}
  transition={{ duration: 0.4 }}
  className="h-full bg-[#121212] overflow-hidden"
>
  <SideBar selectedModel={selectedModel} onSelectModel={handleModelSelect} />
</motion.div>

      {/* Main Content */}
      <motion.main
        layout
        transition={{ duration: 0.3 }}
        className="flex-1 bg-[#0D0D0D] h-full flex ms-[-20px] flex-col"
      >
        <Header
          onToggleSidebar={handleToggleSidebar}
          selectedModel={selectedModel}
          modelName={selectedModelName}
          onSaveClick={handleSaveClick}
        />
        <DashboardPage saveTrigger={saveTrigger} selectedModel={selectedModel} />
      </motion.main>
    </motion.div>
  );
};

export default Page;
