import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="mx-auto bg-cyan-600 w-full text-white px-8 py-2 fixed z-9999 top-0">
        <div className="flex justify-end md:hidden">
          <LuMenu
            classname="text-3xl"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* desktop view */}
        <ul className="md:flex justify-end gap-20 hidden ">
          <li className="hover:text-amber-300">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-amber-300">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hover:text-amber-300">
            <Link to="/project">PROJECTS</Link>
          </li>
          <li className="hover:text-amber-300">
            <Link to="/skill">SKILLS</Link>
          </li>
          <li className="hover:text-amber-300">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* mobile view */}
        {isMenuOpen && (
          <div className="bg-cyan-500 absolute top-8 right-0 w-1/2 md:hidden">
            <ul className="w-full justify-items-center py-4">
              <li className="hover:text-amber-300">
                <Link to="/">HOME</Link>
              </li>
              <li className="hover:text-amber-300">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="hover:text-amber-300">
                <Link to="/project">PROJECTS</Link>
              </li>
              <li className="hover:text-amber-300">
                <Link to="/skill">SKILLS</Link>
              </li>
              <li className="hover:text-amber-300">
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
