import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Used Cars",
    "Auctions",
    "New Cars",
    "Sell Cars",
    "Local Dealers",
    "Support",
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md relative">
      {/* Logo */}
      <a href="#" className="flex items-center">
        <img src="Logo.png" alt="brandLogo" className="h-10 w-10" />
        
      </a>

      {/* Menu Button for Small Screens */}
      <button
        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="menu.png" alt="menuIcon" className="h-6 w-6" />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
        {navItems.map((data, index) => (
          <li key={index} className="hover:text-blue-600 transition">
            <a href="#">{data}</a>
          </li>
        ))}
        <li>
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
            <img src="person.png" alt="personIcon" className="h-5 w-5" />
            Sign Up
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 text-gray-700 lg:hidden">
          {navItems.map((data, index) => (
            <li key={index} className="hover:text-blue-600 transition">
              <a href="#">{data}</a>
            </li>
          ))}
          <li>
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <img src="person.png" alt="personIcon" className="h-5 w-5" />
              Sign Up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
