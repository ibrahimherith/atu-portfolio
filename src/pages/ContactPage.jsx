import Navbar from "../components/Navbar";
import { LuGithub, LuInstagram, LuLinkedin } from "react-icons/lu";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const ContactPage = () => {

  const [formData, setFormData] = useState(
  {
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };


  return (
    <>
      <Navbar />
      <section className="h-screen items-center pt-15 mx-auto">
        <div>
          <h1 className="text-center text-3xl md:text-5xl font-bold pt-5">
            Contact Me
          </h1>
        </div>

        <div className="md:flex md:justify-evenly pt-10 px-8">

          <div className="flex flex-col gap-10 md:w-1/4 text-lg text-cyan-700 pt-8">
            <p className="">
              Have a project in mind, a job opportunity or just want to say hi?<br />
              I'd love to hear from you!
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <FaPhoneAlt className="text-2xl"/>
                <p>+255684480379</p>
              </div>

              <div className="flex gap-2">
                <FaLocationDot className="text-2xl"/>
                <p>Dar es salaam - Tanzania</p>
              </div>
            </div>

            <div className="flex gap-10 mb-10">
              <div className="">
                <a href="https://wa.me/255684480379" className="">
                  <FaWhatsapp className="hover:text-amber-400 text-2xl"/>
                </a>
              </div>
              
              <div className="">
                <a href="https://github.com/atupyeetwevee" className="">
                  <LuGithub className="hover:text-amber-400 text-2xl"/>
                </a>
              </div>

              <div className="">
                <a href="https://www.linkedin.com/in/atu-tweve-a38979262">
                  <LuLinkedin className="hover:text-amber-400 text-2xl"/>
                </a>
              </div>

              <div className="">
                <a href="https://www.instagram.com/">
                  <LuInstagram className="hover:text-amber-400 text-2xl" />
                </a>
              </div>
            </div>

          </div>

          <div className="md:w-2/4 shadow-lg shadow-cyan-800 rounded-lg px-4 pt-4">
          <form onsubmit = {handleSubmit}
            action="submit" method="POST"
            className="flex flex-col gap-5 space-y-2 pt-5 pb-5">
            <input
              type="text" name="fullname" id="fullname" 
              value={formData.fullname} onChange={handleChange}
              placeholder="Enter your Full Name" 
              className="border rounded-md px-4 py-2"
            />

            <input
              type="email" name="email" id="email"
              value={formData.email} onChange={handleChange} 
              placeholder="example@gmail.com"
              className="border rounded-md px-4 py-2"
            />

            <textarea
              type="text" name="message" id="message"
              value={formData.message} onChange={handleChange}
              placeholder="Enter your message"
              className="border rounded-md h-30 px-4"
            ></textarea>

            <div className="flex text-gray-600 gap-4">
              <button type="submit" 
                className="bg-cyan-600  hover:bg-amber-100 border rounded-md font-bold px-8 py-2">
                SUBMIT
              </button>
            </div>
          </form>
          </div>

        </div>

      </section>
    </>
  );
};

export default ContactPage;
