import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <header className="px-10 py-6 flex justify-between items-center border-b border-white border-opacity-20">
        <h1 className="text-xl font-bold text-green-500">RS SChool</h1>

        <nav className="flex gap-6">
          <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
            Home
          </NavLink>
          <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-green-500' : '')}>
            About
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
