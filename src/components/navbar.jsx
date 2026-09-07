import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto bg-cyan-600 container text-white px-8 py-2 fixed z-9999 top-0">
      <div><LuMenu className="text-2xl" /></div>
      <div className=""><ul className="flex justify-center gap-20">
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
      </ul></div>
    </div>
  );
};

export default Navbar;
