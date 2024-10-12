import Account from '@/Pages/Admin/Account'
import Profile from '@/Pages/Admin/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '@/Components/Admin/Sidebar'
import Topbar from '@/Components/Admin/Topbar'
import React from 'react'
import { useState } from 'react'

const AppRoute = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLargeScreenSidebarOpen, setIsLargeScreenSidebarOpen] = useState(true);


    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleLargeScreenSidebar = () => {
      setIsLargeScreenSidebarOpen(!isLargeScreenSidebarOpen);
    };

  return (
    <>
     <div className="flex h-screen bg-slate-300 dark:bg-gray-800 dark:text-white">
     <BrowserRouter>
        <Sidebar isOpen={isSidebarOpen} isLargeScreenOpen={isLargeScreenSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1">
          <Topbar toggleSidebar={toggleSidebar} toggleLargeScreenSidebar={toggleLargeScreenSidebar} isLargeScreenOpen={isLargeScreenSidebarOpen} />
          <main className="flex-1 p-4">
            <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            {/* <Route path="/settings" element={<Settings />} /> */}



            <Route path="/settings/profile" element={ <Account />} />
            <Route path="/settings/account" element={ <Profile />} />
            {/* <Route path="/users" element={<Users />} />
            <Route path="/users/list" element={<UsersList />} />
            <Route path="/users/roles" element={<UsersRoles />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/list" element={<CoursesList />} />
            <Route path="/courses/categories" element={<CoursesCategories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/list" element={<ProductsList />} />
            <Route path="/products/categories" element={<ProductsCategories />} />
            <Route path="/more" element={<More />} />
            <Route path="/more/reports" element={<Reports />} />
            <Route path="/more/settings" element={<MoreSettings />} /> */}
          </Routes>
          </main>
        </div>
        </BrowserRouter>
    </div>
    </>
  )
}

export default AppRoute
