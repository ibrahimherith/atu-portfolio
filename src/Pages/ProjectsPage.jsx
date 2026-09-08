import Navbar from "../components/Navbar";

const ProjectPage = () => {
  return ( 
    <>
      <Navbar />
      <section className="h-screen items-center pt-15 mx-auto">

        <h1 className="text-center text-5xl font-bold">My Projects</h1>

        <div className="min-h-100 flex justify-center items-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-10 text-center">
                    
          <div className="block px-2 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="w-50 rounded-md"/>
            </div>
            <h3 className="text-2xl">Project 1</h3>
          </div>

          <div className="block px-2 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="w-50 rounded-md"/>
            </div>
            <h3 className="text-2xl">Project 2</h3>
          </div>

          <div className="block px-2 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="w-50 rounded-md"/>
            </div>
            <h3 className="text-2xl">Project 3</h3>
          </div> 

          <div className="block px-2 py-2 hover:bg-amber-100">
            <div className="">
              <img src="dev 2.jpg" className="w-50 rounded-md"/>
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