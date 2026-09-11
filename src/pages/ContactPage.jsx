import Navbar from "../components/Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col h-screen items-center space-y-8 pt-15 mx-auto">
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold pt-5">
            Contact Me
          </h1>
        </div>

        <div className="px-4 w-full md:w-1/2">
          <form className="flex flex-col gap-5 space-y-2 pt-5">
            <input
              placeholder="Enter your Full Name" 
              className="border rounded-md px-4 py-2"
            />

            <input
              placeholder="example@gmail.com"
              className="border rounded-md px-4 py-2"
            />

            <textarea
              placeholder="Enter your message"
              className="border rounded-md h-30 px-4"
            ></textarea>

            <div className="flex text-gray-600 gap-4">
              <button className="bg-cyan-600 hover:bg-amber-100 border rounded-md font-bold px-8 py-2">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
