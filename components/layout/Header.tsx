import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">ALX Listing</div>

        {/* Navigation */}
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-500">Rooms</a>
          <a href="#" className="hover:text-blue-500">Mansions</a>
          <a href="#" className="hover:text-blue-500">Countryside</a>
        </nav>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-md"
        />

        {/* Sign In / Sign Up */}
        <div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
            Sign In
          </button>
          <button className="px-4 py-2 text-blue-500 border rounded-md ml-2">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
