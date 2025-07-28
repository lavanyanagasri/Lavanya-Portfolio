import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
<<<<<<< HEAD
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 md:ml-80">
        <div className="p-8 md:p-12">
=======
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <main className="md:ml-80">
        <div className="p-8 md:p-12 min-h-screen">
>>>>>>> 2decc54 (Initial commit)
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;