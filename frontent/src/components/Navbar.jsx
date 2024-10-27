import React, { useState } from "react";
import NavbarRes from "./NavbarRes";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    <nav className="flex justify-between items-center p-8">
      <h2 className="text-2xl px-10">iFaiyan</h2>
      <img className="w-8 md:hidden" onClick={toggleMenu} src="/menu.png" alt="menu png" />
      <ul className="hidden md:flex md:gap-16 md:px-10">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    {isMenuOpen && <NavbarRes />}
    </>
  );
};

export default Navbar;
