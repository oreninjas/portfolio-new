import React from 'react';

const NavbarRes = () => {
    return (
        <nav className='bg-[#e0e0e0] flex justify-center items-center'>
            <ul className='flex flex-col gap-1 py-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavbarRes;
