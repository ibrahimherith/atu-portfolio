import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";

const SkillsPage = () => {
  const skills =[
    {
      id: 1,
      title: "HTML",
      description:"4 years Experience",
      icon: "logos:html-5"
    },
    {
      id: 2,
      title: "CSS",
      description:"4 years Experience",
      icon: "logos:css-3"
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      description:"4 years Experience",
      icon: "logos:javascript"
    },
    {
      id: 4,
      title: "REACT",
      description:"4 years Experience",
      icon: "logos:react"
    },
    {
      id: 5,
      title: "TAILWIND CSS",
      description:"4 years Experience",
      icon: "logos:tailwindcss-icon"
    },
    {
      id: 6,
      title: "FIGMA",
      description:"4 years Experience",
      icon: "logos:figma"
    }
  ]
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

            {skills.map((skill)=>(
              <div 
                key={skill.id}
                className="flex flex-col items-center rounded-md shadow-md shadow-cyan-800 w-full px-2 py-2">
                <Icon icon={skill.icon} className="text-5xl" />
                <h3 className="text-xl md:text-2xl">{skill.title}</h3>
                <p className="bg-cyan-300/50 rounded-full px-4">{skill.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
