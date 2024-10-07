import React, { useState, useEffect } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
// import { ModeToggle } from '../mode-toggle';

const UserUsers = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    profilePicture: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setUserData(savedUserData);
    } else {
      setUserData({
        username: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        location: "New York",
        profilePicture: "https://via.placeholder.com/150",
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsEditing(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-full flex justify-center mb-6">
          {/* <img
                        src={userData.profilePicture}
                        alt='Profile'
                        className='w-32 h-32 rounded-full border-2 border-primary'
                    /> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>

        {/* Conditional Rendering for Edit Mode */}
        {isEditing ? (
          <div className="w-full max-w-lg">
            {/* Editable Fields */}
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-700 text-left"
              >
                Username:
              </label>
              <input
                id="username"
                type="text"
                value={userData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 text-left"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={userData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700 text-left"
              >
                Phone:
              </label>
              <input
                id="phone"
                type="text"
                value={userData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="location"
                className="block text-lg font-medium text-gray-700 text-left"
              >
                Location:
              </label>
              <input
                id="location"
                type="text"
                value={userData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-lg"
              />
            </div>
            {/* Save and Cancel Buttons */}
            <div className="flex justify-between space-x-4">
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg">
            {/* Display User Data */}
            <div className="mb-6">
              <div className="text-lg font-bold text-gray-900">
                {userData.username}
              </div>
              <div className="text-lg mb-2">
                <span className="font-semibold">Email: </span>
                {userData.email}
              </div>
              <div className="text-lg mb-2">
                <span className="font-semibold">Phone: </span>
                {userData.phone}
              </div>
              <div className="text-lg mb-2">
                <span className="font-semibold">Location: </span>
                {userData.location}
              </div>
            </div>
            {/* Edit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center px-6 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserUsers;
