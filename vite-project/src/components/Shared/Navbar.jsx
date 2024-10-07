import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { AiFillCar } from 'react-icons/ai';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Services",
      path: "/services/list"
    },
    {
      title: "Tutorials", // Add Tutorials link
      path: "/tutorials"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg">
        <AiFillCar className="text-4xl mr-4" />
        <span className="font-bold text-2xl">Moto-genZ</span>
      </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((link, index) => (
            <li key={index} className='list-none'>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;