import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from '@/Pages/Admin/Account';
import Profile from '@/Pages/Admin/Profile';
import Layout from '@/Layouts/AdminLayout';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/settings/profile" element={<Profile />} />
          <Route path="/settings/account" element={<Account />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
