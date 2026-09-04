import Navbar from "../components/Navbar";
const ContactPage = () => {
    return ( 
        <>
            <section
                className="items-center min-h-screen pt-4 pb-15 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/dev 1.jpg')",
                }}  
            >

                <Navbar />

                <h1 className="text-center text-5xl font-bold">Contact Me</h1>

                <p className="mx-auto mt-10 max-w-2xl text-center">
                     I am a Frontend Developer and Product Specialist.
                </p>
            </section>
        </>
     );
}
 
export default ContactPage;
 