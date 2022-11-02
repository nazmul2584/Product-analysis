import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' mt-12 h-16 pt-4 text-2xl text-transparent bg-gradient-to-t  bg-clip-text from-blue-500 to-green-500'>
            <NavLink  className=' hover:text-sky-700 rounded underline underline-offset-8' to='/home'>Home </NavLink>
            <NavLink className=' hover:text-sky-700  rounded underline underline-offset-8' to='/Review'>Review </NavLink>
            <NavLink className=' hover:text-sky-700  rounded underline underline-offset-8' to='/Dashbord'>Dashbord </NavLink>
            <NavLink className=' hover:text-sky-700  rounded underline underline-offset-8' to='/Blog'>Blog </NavLink>
             <NavLink className=' hover:text-sky-700 rounded underline underline-offset-8' to='/about'>About </NavLink>
        </div>
    );
};

export default Header; 