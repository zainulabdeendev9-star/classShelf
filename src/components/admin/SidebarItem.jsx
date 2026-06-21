import React from 'react';
import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `block px-6 py-3 rounded-md transition-colors duration-200 font-medium ${isActive ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-200'}`
            }
            end
        >
            {children}
        </NavLink>
    );
};

export default SidebarItem;