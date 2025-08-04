

import DashboardPage from '@/components/DashboardComponents/DashboardPage'
import Header from '@/components/DashboardComponents/Header'
import SideBar from '@/components/DashboardComponents/SideBar'
import React from 'react'

const page = () => {
  return (
 <>
 <div className="flex">
      <SideBar />
      <main className="flex-1 bg-[#0D0D0D] h-screen flex flex-col">
        <Header />
        <DashboardPage />
      </main>
    </div>
 </>
  )
}

export default page