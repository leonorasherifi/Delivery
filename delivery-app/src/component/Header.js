import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import logo from '../assest/logo.png';

export const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-13 px-2 md:px-4">
      <div className="flex items-center h-full justify-between">
        <Link to={''}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
