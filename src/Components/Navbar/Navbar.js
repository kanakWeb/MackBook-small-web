import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navBar '>
         <Link className='text-decoration-none mx-2' to='/'>Home</Link>
         <Link className='text-decoration-none mx-2' to='/Reviews'>Reviews</Link>
         <Link className='text-decoration-none mx-2' to='/DashBoard'>DashBoard</Link>
         <Link className='text-decoration-none mx-2' to='/Blogs'>Blogs</Link>
         <Link className='text-decoration-none mx-2' to='/About'>About</Link>
        </div>
    );
};

export default Navbar;