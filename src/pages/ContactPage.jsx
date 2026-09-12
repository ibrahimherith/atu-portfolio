import Navbar from "../components/Navbar";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

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
         <div className="text-center items-center h-full px-8 md:w-1/2">
          

          <div className="flex flex-cols justify-center text-2xl text-cyan-700  gap-10 pt-8">

            <div className="flex items-center gap-2">
              <a href="https://wa.me/255684480379" className="">
                <FaWhatsapp className="hover:text-amber-400"/>
              </a>
            </div>
            
            <div>
              <a href="https://github.com/atupyeetwevee" className="">
                <LuGithub className="hover:text-amber-400"/>
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/atu-tweve-a38979262">
                <LuLinkedin className="hover:text-amber-400"/>
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/">
                <LuInstagram className="hover:text-amber-400" />
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
