import Sidebar from '@/Components/Admin/Sidebar'
import Topbar from '@/Components/Admin/Topbar'
import React, { useState } from 'react'

const AdminLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLargeScreenSidebarOpen, setIsLargeScreenSidebarOpen] = useState(true);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleLargeScreenSidebar = () => {
      setIsLargeScreenSidebarOpen(!isLargeScreenSidebarOpen);
    };

    return (
      <div className="flex h-screen bg-slate-300 dark:bg-gray-800 dark:text-white">
        <Sidebar isOpen={isSidebarOpen} isLargeScreenOpen={isLargeScreenSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Topbar toggleSidebar={toggleSidebar} toggleLargeScreenSidebar={toggleLargeScreenSidebar} isLargeScreenOpen={isLargeScreenSidebarOpen} />
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </div>
    );
}




export default AdminLayout
