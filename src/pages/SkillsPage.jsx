import Navbar from "../components/Navbar";

const SkillsPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen pt-20 px-4 md:px-8 space-y-8">
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            My Skills
          </h1>
        </div>

        <div className="justify-items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-rows-2 gap-10">
            <div className="block w-full px-2 py-2">
              <h3 className="text-xl md:text-2xl">HTML</h3>
              <p className="">
                4 years Experience sswtryhrsteychtikfuysctrfe6ytfikjx
              </p>
            </div>

            <div className="block px-2 py-2">
              <h3 className="text-xl md:text-2xl">CSS</h3>
              <p className="">4 years Experience</p>
            </div>

            <div className="block px-2 py-2">
              <h3 className="text-xl md:text-2xl">JAVASCRIPT</h3>
              <p className="">
                4 years Experience srtgeruztuzyiu;iduydcxgtuiupouxxxyuiiiycttd
              </p>
            </div>

            <div className="block px-2 py-2">
              <h3 className="text-xl md:text-2xl">REACT</h3>
              <p className="">4 years Experience</p>
            </div>

            <div className="block px-2 py-2">
              <h3 className="text-xl md:text-2xl">TAILWIND</h3>
              <p className="">4 years Experience</p>
            </div>

            <div className="block px-2 py-2">
              <h3 className="text-xl md:text-2xl">FIGMA</h3>
              <p className="">4 years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
