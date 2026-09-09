import Navbar from "../components/Navbar";

const ProjectPage = () => {
  return ( 
    <>
      <Navbar />
      <section className="h-screen items-center space-y-8 pt-15 mx-auto">

        <div>
          <h1 className="text-center text-2xl md:text-5xl font-bold">My Projects</h1>
        </div>

        <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-10 text-center">
                    
          <div className="block px-8 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="md:w-50 rounded-md"/>
            </div>
            <h3 className="text-2xl">Project 1</h3>
          </div>

          <div className="block px-8 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="md:w-50 rounded-md"/>
            </div>
            <h3 className="text-2xl">Project 2</h3>
          </div>

          <div className="block px-8 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="md:w-50 rounded-md"/>
            </div>
            <h3 className="text-2xl">Project 3</h3>
          </div> 

          <div className="block px-8 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="md:w-50 rounded-md"/>
            </div>                  
            <h3 className="text-2xl">Project 4</h3>
          </div>

          </div>

        </div>

      </section>
    </>
  );
}
 
export default ProjectPage;