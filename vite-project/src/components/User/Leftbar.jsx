import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

const Leftbar = () => {
    const navigate = useNavigate();

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        }
    ];

    const handleLogout = () => {
        // Implement logout logic here, e.g., clear auth tokens
        navigate('/'); // Redirect to home page
    };

    return (
        <div className='h-screen w-1/6 flex flex-col justify-between items-center shadow-sm shadow-primary pt-10'>
            <div className='text-primary font-bold text-2xl flex justify-center items-center mb-6'>
                Moto-genZ
            </div>
            <div className='w-full flex flex-col justify-start items-center gap-2'>
                {AdminLinks.map((data, index) => (
                    <NavLink 
                        key={index} 
                        to={data.link}  
                        className={({ isActive }) => `p-5 bg-primary/5 hover:bg-primary/10 font-bold mt-2 w-full ${isActive ? 'bg-primary/10' : ''}`}
                    >
                        <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                            {React.createElement(data.icon, { size: 20 })}
                            {data.title}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className='w-full mb-6 mt-auto flex justify-center'>
                <Button 
                    className='p-3 bg-red-500 hover:bg-red-600 font-bold w-fit'
                    onClick={handleLogout}
                >
                    <span className='flex flex-row items-center justify-start h-full w-full gap-2 text-white'>
                        <LogOut className='h-5 w-5' /> Log Out
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default Leftbar;
