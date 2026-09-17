import { useState } from "react";
import { LuX, LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center mx-auto bg-cyan-600 w-full text-white px-8 py-2 fixed z-9999 top-0">

        {/* <div className="bg-white/80 w-10 md:w-20 rounded-full">
          <img src="logo1.png" className="w-full h-auto"/>
        </div> */}

        {/* desktop view */}
        <ul className="md:flex justify-end gap-20 hidden ">
          <li className="hover:text-amber-300">
            <Link to="/">HOME</Link>
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

        <button className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <LuX /> : <LuMenu />}
        </button>
        
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}
      
      {/* mobile view */}
      {isMenuOpen && (
        <div className="bg-cyan-500 flex absolute top-8 right-0 w-1/2 md:hidden">
          <ul className="w-full justify-items-center py-4">
            <li className="hover:text-amber-300">
              <Link to="/">HOME</Link>
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

          {/* <div>
            <LuX onClick={() => setIsMenuOpen(false)}/>
          </div> */}
        </div>
      )}

    </>
  );
};

export default Navbar;
