import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 md:ml-80">
        <div className="p-8 md:p-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;