const HeroPage = () => {
  return (
    <div
      id="home"
      className="flex items-center gap-4 px-4 md:px-8 h-screen w-full overflow-hidden bg-amber-900"
    >
      <div className="flex-2 space-y-8 text-start bg-red-500">
        <h1 className="font-bold text-2xl md:text-4xl">I am Atupye Tweve,</h1>

        <h2 className="text-cyan-600 text-3xl md:text-5xl font-bold font-comic">
          Frontend Developer and
          <br className="hidden md:block" /> Product Specialist.
        </h2>

        <p className="text-sm text-gray-600">
          I'm experienced with 2+ years in both Frontend web development and
          product management
        </p>

        <div className="flex flex-col md:flex-row gap-4 text-gray-600">
          <button className="bg-gray-300 hover:bg-amber-100 border rounded-md font-bold px-8 py-2">
            HIRE ME
          </button>

          <a href="/ATUPYE_TWEVE_CV.pdf" target="_blank" rel="noopener noreferrer" 
            className="inline-block bg-cyan-600 hover:bg-amber-100 border rounded-md font-bold px-8 py-2">
              VIEW RESUME
          </a>
        </div>
      </div>

      <div className="md:block md:flex-1 hidden">
        <img src="demo1.png" className="w-full h-auto" />
      </div>
      
    </div>
  );
};

export default HeroPage;
