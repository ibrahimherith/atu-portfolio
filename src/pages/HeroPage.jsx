const HeroPage = () => {
  return (
    <div
      className="flex mt-10 items-center gap-10 px-4 md:px-8 h-screen w-full overflow-hidden"
    >
      <div className="md:block md:flex-1 hidden">
        <img src="atu1.png" className="w-full h-auto" />
      </div>

      <div className="flex-2 space-y-4 text-start">
        <h1 className="font-bold text-2xl md:text-4xl">I am Atupye Tweve,</h1>

        <h2 className="text-cyan-600 text-3xl md:text-5xl font-bold font-comic">
          Frontend Developer and
          <br className="hidden md:block" /> Product Specialist.
        </h2>

        <p className="text-sm text-gray-600">
          with a unique background in Electronics & Telecommunication Engineering and networking.
          I'm experienced with 2+ years in both Frontend web development and
          product management 
          I combine engineering problem-solving with frontend development and product thinking 
          to create digital experiences that are intuitive, reliable, and built to solve real-world 
          problems.
        </p>

        <div className="flex flex-col md:flex-row gap-4 text-center text-gray-600">
          <a href="/contact" 
            className="bg-cyan-600 hover:bg-amber-100 border rounded-md font-bold px-8 py-2">
            HIRE ME
          </a>

          <a href="/ATUPYE TWEVE CV.pdf" target="_blank" rel="noopener noreferrer" 
            className="bg-gray-300 hover:bg-amber-100 border rounded-md font-bold px-8 py-2">
              VIEW RESUME
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default HeroPage;
