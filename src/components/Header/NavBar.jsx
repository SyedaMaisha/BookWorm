import React from 'react';
import { NavLink } from 'react-router';
import SignIn from './SignIn';
import "./NavBar.css"
import SignUp from './SignUp';

const NavBar = () => {
    const links = <>
        <li> <NavLink to="/" className='btn btn-outline btn-success hover:bg-white  m-2'>Home</NavLink> </li>
        <li>
        <NavLink to="/listedBooks" className='btn btn-outline btn-success hover:bg-white  m-2'>Listed Books</NavLink>
        </li>
        <li>
        <NavLink to="/pagesToRead" className='btn btn-outline btn-success hover:bg-white  m-2'>Pages to Read</NavLink >
        </li>
        
        
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex flex-1 items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn pl-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/" className="font-bold text-2xl ">BookWorm</NavLink >
            </div>
            <div className=" hidden lg:flex  justify-center">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className=" flex-1 navbar-end">
                <SignIn></SignIn>
                <SignUp></SignUp>
            </div>
        </div>
    );
};


export default NavBar;