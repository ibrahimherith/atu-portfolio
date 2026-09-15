import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";

const ProjectPage = () => {

  const projects = [
    {
      id: 1,
      title: "MY PORTIFOLIO",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta quis cumque laboriosam, velit rerum tempora eius dolore corporis at. Porro mollitia tempora veritatis excepturi quo aperiam, tenetur beatae quos.",
      link1: "http://exactehrm.co.tz",
      link2: "http://exactehrm.co.tz",
      image: "toon1.png"
    },
    {
      id: 2,
      title: "EHRM SYSTEM",
      description: 
        "A simple Human Resource Management System with employees management features",
      link1: "http://exactehrm.co.tz",
      link2: "http://exactehrm.co.tz",
      image: "ehrm1.png"
    },
    {
      id: 3,
      title: "FIRE ALARM SYSTEM",
      description: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dicta quis cumque laboriosam, velit rerum tempora eius dolore corporis at. Porro mollitia tempora veritatis excepturi quo aperiam, tenetur beatae quos.",
      link1: "http://exactehrm.co.tz",
      link2: "http://exactehrm.co.tz",
      image: "dev 1.jpg"
    }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-15 px-8 mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">My Projects</h1>
          <p className="text-sm">
            A collection of projects I've created while learning, exploring and
            growing as a developer.
          </p>
        </div>

        <div className="flex md:p-10">
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-10 text-center">
            
            {/* Practice Card */}
            {projects.map((item) => (
              <div key={item.id}
                className="flex flex-col gap-5 items-center text-sm p-4 rounded-2xl shadow-xl border border-amber-300/30">

                <div className="w-70">
                  <img src={item.image} className="w-full h-auto rounded-md" />
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
      </div>
    </>
  );
};

export default ProjectPage;
