import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { images } from './images';
import { FiMenu, FiX } from 'react-icons/fi'; // Import the icons you want to use

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img className="h-8 w-auto" src={images.logo} alt="Logo" />
              <img className="h-8 w-auto ml-2" src={images.gitex} alt="Gitex" />
            </a>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition ease-in-out duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="h-6 w-6 ease-in-out duration-500" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
              <NavItem to="https://nnia.ng/about" currentPath={location.pathname}>About Us</NavItem>
              <NavItem to="/roadshow" currentPath={location.pathname}>Gitex Road Show</NavItem>
              <NavItem to="/prizes" currentPath={location.pathname}>Prizes</NavItem>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden transition ease-in-out duration-300`} id="mobile-menu">
        <ul className={`px-2 pt-2 pb-3 space-y-1 ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}`}>
          <NavItem to="/" currentPath={location.pathname}>Home</NavItem>
          <NavItem to="https://nnia.ng/about" currentPath={location.pathname}>About Us</NavItem>
          <NavItem to="/roadshow" currentPath={location.pathname}>Gitex Road Show</NavItem>
          <NavItem to="/prizes" currentPath={location.pathname}>Prizes</NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, currentPath, children }) => {
  const isActive = to === currentPath;
  return (
    <li>
      <a
        href={to}
        className={`text-gray-700 hover:text-secondary font-medium ${isActive ? 'text-secondary' : ''}`}
      >
        {children}
      </a>
    </li>
  );
};

export default Navigation;
