const Navbar = () => {
  return (
    <div className="bg-cyan-600 text-white mx-auto w-[90%] py-2 rounded-3xl">
      <ul className="flex justify-center gap-20">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href=" ">PROJECTS</a>
        </li>
        <li>
          <a href=" ">SKILLS</a>
        </li>
        <li>
          <a href=" ">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
