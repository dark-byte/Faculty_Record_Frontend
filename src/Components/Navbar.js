import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* Title on the left */}
      <div className="navbar-brand">{title}</div>

      {/* User profile section on the right */}
      <div className="user-profile d-flex align-items-center">
      <IoPersonCircleOutline className='admin-pfp'/>
        <span className="username">Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;
