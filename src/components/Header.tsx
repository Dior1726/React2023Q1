import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-10 py-6 flex justify-between items-center border-b border-white border-opacity-20">
      <h1 className="text-xl font-bold">RS SChool</h1>

      <nav className="flex gap-6">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
