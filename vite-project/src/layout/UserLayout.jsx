// import Leftbar from '@/components/Admin/Leftbar';
import Topbar from '@/components/Admin/Topbar';
import UserLeftbar from '@/components/User/UserLeftbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <UserLeftbar /> {/* Sidebar for user layout */}
      <div className='h-screen w-5/6 flex flex-col'>
        <Topbar /> {/* Topbar for user layout */}
        <div className='h-[92vh] w-full'>
          <Outlet /> {/* Renders the matched child route */}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
