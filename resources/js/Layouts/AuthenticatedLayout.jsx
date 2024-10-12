
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import Account from '@/Pages/Admin/Account'
import Profile from '@/Pages/Admin/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '@/Components/Admin/Sidebar'
import Topbar from '@/Components/Admin/Topbar'
import React, {useState}  from 'react';


export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

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
     <BrowserRouter>
        <Sidebar isOpen={isSidebarOpen} isLargeScreenOpen={isLargeScreenSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Topbar toggleSidebar={toggleSidebar} toggleLargeScreenSidebar={toggleLargeScreenSidebar} isLargeScreenOpen={isLargeScreenSidebarOpen} />
        <div className="bg-red-200">
            <main>

                {children}

            </main>
            </div>
            </div>
        </BrowserRouter>
    </div>

    );
}
