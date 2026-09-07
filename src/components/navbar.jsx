import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="mx-auto bg-cyan-600 w-full text-white px-8 py-2 fixed z-9999 top-0">
      <LuMenu className="block lg:hidden text-2xl" />
      <ul className="lg:flex justify-end gap-20 hidden ">
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
    </div>
  );
};

export default Navbar;
