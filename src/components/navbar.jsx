import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="mx-auto bg-cyan-600 w-full text-white px-8 py-2 fixed z-9999 top-0">

        <div className="flex justify-end md:hidden">
          <LuMenu 
            classname= "text-3xl" 
            onClick={() => setIsMenuOpen(prev => !prev)}
          />
        </div>

        {/* desktop view */}
        <ul className="md:flex justify-end gap-20 hidden ">
          <li> 
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/project">PROJECTS</a>
          </li>
          <li>
            <a href="/skill">SKILLS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>

        {/* mobile view */}
        {isMenuOpen && (
        <ul className="flex flex-col items-center gap-6 py-6 md:hidden">
          <li className="hover:bg-amber-100">
            <a href="/">HOME</a>
          </li>
          <li className="hover:bg-amber-100">
            <a href="/about">ABOUT</a>
          </li>
          <li className="hover:bg-amber-100">
            <a href="/project">PROJECTS</a>
          </li>
          <li className="hover:bg-amber-100">
            <a href="/skill">SKILLS</a>
          </li>
          <li className="hover:bg-amber-100">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      )}
      </div>

    </>
  
  );
};

export default Navbar;
