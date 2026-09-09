import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section
        className="min-h-screen flex flex-col items-center pt-15 space-y-8 mx-auto"
      >

        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold">About Me</h1>
        </div>

        <div className="text-center flex items-center h-full px-8 md:w-1/2">
          <p className="">
            I’m Atupye, a Frontend Developer and Product Specialist with a unique 
            background in Electronics & Telecommunication Engineering and networking. 
            I combine engineering problem-solving with frontend development and product thinking 
            to create digital experiences that are intuitive, reliable, and built to solve real-world 
            problems.
          </p>
        </div>
        
      </section>
    </>
  );
};

export default AboutPage;
