import Navbar from "../components/Navbar";
const SkillsPage = () => {
    return ( 
        <>
            <Navbar />
            <section
                className="h-screen items-center pt-15 mx-auto"
            >
                <h1 className="text-center text-5xl font-bold">My Skills</h1>

                <div className="min-h-100 flex justify-center items-center overflow-hidden">
                    <div className="grid grid-cols-3 grid-rows-2 gap-10">
                    
                        <div className="block px-2 py-2">
                            <h3 className="text-2xl">HTML</h3>
                            <p className="">4 years Experience</p>
                        </div>

                        <div className="block px-2 py-2">
                            <h3 className="text-2xl">CSS</h3>
                            <p className="">4 years Experience</p>
                        </div>

                        <div className="block px-2 py-2">
                            <h3 className="text-2xl">JAVASCRIPT</h3>
                            <p className="">4 years Experience</p>
                        </div> 

                        <div className="block px-2 py-2">
                            <h3 className="text-2xl">REACT</h3>
                            <p className="">4 years Experience</p>
                        </div>

                        <div className="block px-2 py-2">
                            <h3 className="text-2xl">TAILWIND</h3>
                            <p className="">4 years Experience</p>
                        </div>

                        <div className="block px-2 py-2">
                            <h3 className="text-2xl">FIGMA</h3>
                            <p className="">4 years Experience</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default SkillsPage;
 