import { Eye } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-[#0B3D91] text-white shadow-md fixed top-0 w-full z-50">
      {/* Top Strip for Language/Login */}
      <div className="flex justify-end items-center text-sm px-4 py-1 bg-[#002B5B]">
        <button className="hover:underline mr-4">हिन्दी</button>
        <button className="hover:underline">Login</button>
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* <img src="/bharat-logo.png" alt="Bharat Emblem" className="h-10 w-10" /> */}
          <Eye/>
          <div>
            <h1 className="text-lg font-semibold">CivicEye</h1>
            <p className="text-xs text-gray-200">Citizen-Government Feedback Portal</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#report" className="hover:text-yellow-300">Report Issue</a>
          <a href="#dashboard" className="hover:text-yellow-300">Transparency Dashboard</a>
          <a href="#departments" className="hover:text-yellow-300">Departments</a>
          <a href="#community" className="hover:text-yellow-300">Community</a>
          <a href="#about" className="hover:text-yellow-300">About Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
