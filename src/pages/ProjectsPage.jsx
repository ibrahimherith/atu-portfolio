import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "HRM SYSTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.",
      projectLink: "http://exactehrm.co.tz",
      githubLink: "http://exactehrm.co.tz",
    },
    {
      id: 2,
      title: "Ekazi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.",
      projectLink: "http://exactehrm.co.tz",
      githubLink: "http://exactehrm.co.tz",
    },
    {
      id: 3,
      title: "Skillika",
      description:
        "A simple Human Resource Management System with employees management features",
      projectLink: "http://exactehrm.co.tz",
      githubLink: "http://exactehrm.co.tz",
    },
  ];

  const demoProjects = [
    {
      id: 1,
      title: "BILLING SYSTEM",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta quis cumque laboriosam, velit rerum tempora eius dolore corporis at. Porro mollitia tempora veritatis excepturi quo aperiam, tenetur beatae quos.",
      link1: "exactehrm.co.tz",
      link2: "exactehrm.co.tz"
    },
    {
      id: 2,
      title: "TICKETING SYSTEM",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta quis cumque laboriosam, velit rerum tempora eius dolore corporis at. Porro mollitia tempora veritatis excepturi quo aperiam, tenetur beatae quos.",
      link1: "exactehrm.co.tz",
      link2: "exactehrm.co.tz"
    },
    {
      id: 3,
      title: "FIRE ALARM SYSTEM",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta quis cumque laboriosam, velit rerum tempora eius dolore corporis at. Porro mollitia tempora veritatis excepturi quo aperiam, tenetur beatae quos.",
      link1: "exactehrm.co.tz",
      link2: "exactehrm.co.tz"
    }
  ]

  return (
    <>
      <Navbar />
      <section className="h-screen pt-15 px-8 mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">My Projects</h1>
          <p className="text-sm">
            A collection of projects I've created while learning, exploring and
            growing as a developer.
          </p>
        </div>

        <div className="flex p-10">
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-10 text-center">
            {/* Project Card */}
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center gap-4 p-4 rounded-2xl border border-gray-200 shadow-lg "
              >
                <div className="w-70">
                  <img src="toon1.png" className="w-full h-auto rounded-md" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>

                <div className="flex items-center gap-4 justify-between">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-blue-500 bg-blue-500 text-white hover:bg-blue-700 rounded-xl px-8 py-4 text-sm"
                  >
                    LIVE DEMO <IoOpenOutline />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-green-500 hover:bg-green-500 hover:text-white rounded-xl px-8 py-4 text-sm"
                  >
                    VIEW CODE <IoLogoGithub />
                  </a>
                </div>
              </div>
            ))}
            {/* End Project Card */}
            
            {/* Practice Card */}
            {demoProjects.map((item) => (
            <div key={item.id}
              className="flex flex-col gap-5 items-center text-sm p-4 rounded-2xl shadow-xl border border-amber-300/30">

              <div className="w-70">
                <img src="dev 2.jpg" className="w-full h-auto rounded-md" />
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="flex gap-4 items-center">
                <a href={item.link1} className="flex gap-2 bg-amber-500 hover:bg-amber-700 border border-amber-200 rounded-md py-2 px-4">
                  LIVE DEMO <IoOpenOutline />
                </a>
                <a href={item.link2} className="flex gap-2 hover:bg-violet-200 border border-violet-200 rounded-md py-2 px-4">
                  VIEW CODE <IoLogoGithub />
                </a>
              </div>

            </div>

            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
