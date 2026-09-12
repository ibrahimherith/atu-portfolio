import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import Navbar from "../components/Navbar";

const ProjectPage = () => {
  return ( 
    <>
      <Navbar />
      <section className="h-screen space-y-8 pt-15 px-8 mx-auto">

        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">My Projects</h1>
          <p className="text-sm">A collection of projects I've created while learning, exploring and growing as a developer.</p>
        </div>

        <div className="flex">
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-10 text-center">
                      
            <div className="flex gap-5 px-8 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-70 rounded-md"/>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">HRM SYSTEM</h3>
                <p className="text-sm">A simple Human Resource Management System with employees management features</p>

                <div className="flex gap-5 justify-center">
                  <div className="flex items-center gap-2 font-bold border rounded-md bg-gray-300 hover:bg-amber-100 px-4 py-2">
                    <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                      className="">
                      LIVE DEMO
                    </a>
                    <IoOpenOutline className="text-xl" />
                    
                  </div>

                  <div className="flex items-center gap-2 font-bold border rounded-md bg-gray-300 hover:bg-amber-100 px-4 py-2"></div>
                    <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                      className="">
                      VIEW CODE
                    </a>
                    <IoLogoGithub className="text-xl" />
                  </div>

                </div>

            </div>
          

          <div className="flex gap-5 px-8 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-70 rounded-md"/>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">MY PORTFOLIO</h3>
                <p className="text-sm">A simple Human Resource Management System with employees management features</p>

                <div className="flex gap-5 justify-center">
                  <a href="http://atupye.vercel.app/" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-300 hover:bg-amber-100 border rounded-md font-bold px-4 py-2">
                    LIVE DEMO
                  </a>

                  <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                    className="inline-block bg-cyan-600 hover:bg-amber-100 border rounded-md font-bold px-4 py-2">
                    VIEW CODE
                  </a>
                </div>

              </div>
          </div>

          <div className="flex gap-5 px-8 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-70 rounded-md"/>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">PROJECT 3</h3>
                <p className="text-sm">A simple Human Resource Management System with employees management features</p>

                <div className="flex gap-5 justify-center">
                  <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-300 hover:bg-amber-100 border rounded-md font-bold px-4 py-2">
                    LIVE DEMO
                  </a>

                  <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                    className="inline-block bg-cyan-600 hover:bg-amber-100 border rounded-md font-bold px-4 py-2">
                    VIEW CODE
                  </a>
                </div>

              </div>
          </div>        

          <div className="flex gap-5 px-8 py-2 rounded-md shadow shadow-cyan-300 hover:bg-amber-100">
              <div className="">
                <img src="dev 2.jpg" className="md:w-70 rounded-md"/>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">PROJECT 4</h3>
                <p className="text-sm">A simple Human Resource Management System with employees management features</p>

                <div className="flex gap-5 justify-center">
                  <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-300 hover:bg-amber-100 border rounded-md font-bold px-4 py-2">
                    LIVE DEMO
                  </a>

                  <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
                    className="inline-block bg-cyan-600 hover:bg-amber-100 border rounded-md font-bold px-4 py-2">
                    VIEW CODE
                  </a>
                </div>

              </div>
          </div>
          </div>
        </div>

      </section>
    </>
  );
}
 
export default ProjectPage;