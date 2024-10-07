import React from 'react';
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow pb-0"> {/* Reduced padding-bottom */}
      <Outlet />
    </main>
    <Footer /> {/* Set margin-top to zero */}
  </div>
);

export default HomeLayout;
