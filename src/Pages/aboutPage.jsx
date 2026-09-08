import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section
        className="pt-15 mx-auto"
      >

        <h1 className="text-center text-5xl font-bold">About Me</h1>

        {/* <div className="bg-amber-600 "> */}
        <p className="flex items-center h-70 w-[50%] mx-auto text-center">
          I’m Atupye, a Frontend Developer and Product Specialist with a unique 
          background in Electronics & Telecommunication Engineering and networking. 
          I combine engineering problem-solving with frontend development and product thinking 
          to create digital experiences that are intuitive, reliable, and built to solve real-world 
          problems.
        </p>
        {/* </div> */}
        
      </section>
    </>
  );
};

export default AboutPage;
