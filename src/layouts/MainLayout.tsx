import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-gray-800 text-white">
      <Header />
      <main className="flex-grow min-h-0 flex flex-col p-10">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
