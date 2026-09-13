import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";

const ProjectPage = () => {
  const projacts = [
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

  return (
    <>
      <Navbar />
      <section className="h-screen space-y-8 pt-15 px-8 mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">My Projects</h1>
          <p className="text-sm">
            A collection of projects I've created while learning, exploring and
            growing as a developer.
          </p>
        </div>

        <div className="flex">
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-10 text-center">
            {/* Project Card */}
            {projacts.map((project) => (
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

            <div className="flex gap-5 px-4 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="ehrm1.png" className="md:w-70 rounded-md" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">HRM SYSTEM</h3>
                <p className="text-sm">
                  A simple Human Resource Management System with employees
                  management features
                </p>

                <div className="flex gap-5 justify-center">
                  <div className="flex items-center gap-2 font-bold border rounded-md bg-gray-300 px-4 py-2">
                    <a
                      href="http://exactehrm.co.tz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      LIVE DEMO
                    </a>
                    <IoOpenOutline className="text-xl" />
                  </div>

                  <div className="flex items-center gap-2 font-bold border rounded-md bg-cyan-600 px-4 py-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      VIEW CODE
                    </a>
                    <IoLogoGithub className="text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 px-4 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-70 rounded-md" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">MY PORTFOLIO</h3>
                <p className="text-sm">
                  A simple Human Resource Management System with employees
                  management features
                </p>

                <div className="flex gap-5 justify-center">
                  <div className="flex items-center gap-2 font-bold border rounded-md bg-gray-300 px-4 py-2">
                    <a
                      href="https://atupye.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      LIVE DEMO
                    </a>
                    <IoOpenOutline className="text-xl" />
                  </div>

                  <div className="flex items-center gap-2 font-bold border rounded-md bg-cyan-600 px-4 py-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      VIEW CODE
                    </a>
                    <IoLogoGithub className="text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 px-8 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-50 rounded-md" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">PROJECT 3</h3>
                <p className="text-sm">
                  A simple Human Resource Management System with employees
                  management features
                </p>

                <div className="flex gap-5 justify-center">
                  <div className="flex items-center gap-2 font-bold border rounded-md bg-gray-300 px-4 py-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      LIVE DEMO
                    </a>
                    <IoOpenOutline className="text-xl" />
                  </div>

                  <div className="flex items-center gap-2 font-bold border rounded-md bg-cyan-600 px-4 py-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      VIEW CODE
                    </a>
                    <IoLogoGithub className="text-xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 px-8 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-50 rounded-md" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">PROJECT 4</h3>
                <p className="text-sm">
                  A simple Human Resource Management System with employees
                  management features
                </p>

                <div className="flex gap-5 justify-center">
                  <div className="flex items-center gap-2 font-bold border rounded-md bg-gray-300 px-4 py-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      LIVE DEMO
                    </a>
                    <IoOpenOutline className="text-xl" />
                  </div>

                  <div className="flex items-center gap-2 font-bold border rounded-md bg-cyan-600 px-4 py-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      VIEW CODE
                    </a>
                    <IoLogoGithub className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
