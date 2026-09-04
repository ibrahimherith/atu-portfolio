const Navbar = () => {
  return (
    <div className="bg-cyan-600 text-white mx-auto w-[90%] py-2 rounded-3xl">
      <ul className="flex justify-center gap-20">
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
