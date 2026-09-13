import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";

const SkillsPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-20 px-4 md:px-8 space-y-8">
        <div>
          <h1 className="text-center text-3xl md:text-4xl font-bold">
            My Skills
          </h1>
        </div>

        <div className="justify-items-center ">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-rows-2 gap-10">

            <div className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 w-full px-2 py-2">
              <Icon icon="logos:html-5" className="text-5xl" />
              <h3 className="text-xl md:text-2xl">HTML</h3>
              <p className="bg-cyan-300/50 rounded-full px-4">4 years Experience</p>
            </div>

            <div className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 px-2 py-2">
              <Icon icon="logos:css-3" className="text-5xl" />
              <h3 className="text-xl md:text-2xl">CSS</h3>
              <p className="bg-cyan-300/50 rounded-full px-4">4 years Experience</p>
            </div>

            <div className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 px-2 py-2">
              <Icon icon="logos:javascript" className="text-5xl" />
              <h3 className="text-xl md:text-2xl">JAVASCRIPT</h3>
              <p className="bg-cyan-300/50 rounded-full px-4">4 years Experience</p>
            </div>

            <div className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 px-2 py-2">
              <Icon icon="logos:react" className="text-5xl" />
              <h3 className="text-xl md:text-2xl">REACT</h3>
              <p className="bg-cyan-300/50 rounded-full px-4">4 years Experience</p>
            </div>

            <div className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 px-2 py-2">
              <Icon icon="logos:tailwindcss-icon" className="text-5xl" />
              <h3 className="text-xl md:text-2xl">TAILWIND</h3>
              <p className="bg-cyan-300/50 rounded-full px-4">4 years Experience</p>
            </div>

            <div className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 px-2 py-2">
              <Icon icon="logos:figma" className="text-5xl" />
              <h3 className="text-xl md:text-2xl">FIGMA</h3>
              <p className="bg-cyan-300/50 rounded-full px-4">4 years Experience</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
