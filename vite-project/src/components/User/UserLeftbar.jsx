import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { LogOut } from 'lucide-react'; // Removed Edit import
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const UserLeftbar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        phone: '',
        profilePicture: '' // Placeholder image
    });

    useEffect(() => {
        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        if (savedUserData) {
            setUserData(savedUserData);
        } else {
            setUserData({
                username: 'John Doe',
                email: 'john.doe@example.com',
                phone: '+1234567890',
                // profilePicture: 'https://via.placeholder.com/150'
            });
        }
    }, []);

    const handleLogout = () => {
        navigate('/'); // Redirect to home page
    };

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(userData));
        setIsModalOpen(false);
    };

    return (
        <div className='h-screen w-1/6 flex flex-col justify-between items-center shadow-sm shadow-primary pt-10'>
            <div className='text-primary font-bold text-2xl flex justify-center items-center mb-6'>
                Moto-genZ
            </div>
            <div className='w-full flex flex-col items-center gap-4 mb-6'>
                {/* Removed profile picture section */}
                <div className='text-primary font-bold text-xl'>
                    {userData.username}
                </div>
                <NavLink 
                    to="/user/dashboard" 
                    className={({ isActive }) => `text-primary font-bold text-lg mt-4 ${isActive ? 'text-blue-500' : ''}`}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/user/users" 
                    className={({ isActive }) => `text-primary font-bold text-lg mt-2 ${isActive ? 'text-blue-500' : ''}`}
                >
                    Profile
                </NavLink>
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

            {/* Profile Edit Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
                    <div className='bg-white p-6 rounded shadow-lg w-96'>
                        <h2 className='text-lg font-bold mb-4'>Edit Profile</h2>
                        <form onSubmit={handleFormSubmit} className="grid gap-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="profilePicture">Profile Picture URL</Label>
                                <Input
                                    id="profilePicture"
                                    value={userData.profilePicture}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    value={userData.username}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <Button type="button" onClick={() => setIsModalOpen(false)} className='w-1/2 bg-red-400 hover:bg-red-500'>
                                    Cancel
                                </Button>
                                <Button type="submit" className='w-1/2'>
                                    Save changes
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserLeftbar;
