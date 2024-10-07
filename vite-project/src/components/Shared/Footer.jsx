import { Facebook, Twitter, Instagram, Apple, Smartphone } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full bg-theme-background text-theme-text border-t-2 border-primary/50">
      {/* Main Content Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-8 py-6">
        
        {/* Left Side: Copyright and Additional Links */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start text-lg font-bold mb-4 md:mb-0">
          <span>© moto-genz 2024</span>
          <div className="mt-2 flex flex-col gap-2">
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/careers" className="hover:underline">Careers</Link>
          </div>
        </div>

        {/* Center: Logo or Brand Information */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-lg font-bold mb-4 md:mb-0">
          <span className="text-2xl">Moto-GenZ found @</span>
          <div className="mt-2 flex flex-col gap-2">
            <p>Bangalore</p>
            <p>Chennai</p>
            <p>Coimbatore</p>
            <p>Hyderabad</p>
            <p>Mumbai</p>
          </div>
        </div>
        
        {/* Right Side: Social Media Icons and Download Our App */}
        <div className="w-full md:w-1/3 flex flex-col items-end text-right">
          <div className="flex justify-end gap-8 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">Experience the best of Moto-GenZ on your mobile device.</p>
          <p className="font-bold mb-2">Download Our App</p>
          <div className="flex flex-col items-end gap-2 mb-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Apple className="h-8 w-8 text-primary" />
              <span className="ml-2">App Store</span>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Smartphone className="h-8 w-8 text-primary" />
              <span className="ml-2">Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
