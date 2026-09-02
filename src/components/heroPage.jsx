const HeroPage = () => {
    return ( 
        <div className="flex"> 
            <div className="text-center mx-auto mt-20 max-w-5xl w-6/12 px-4">
                <h1 className="font-bold text-4xl">I am Atupye Tweve,</h1> 

                <h2 className="text-cyan-600 text-5xl mt-4 font-bold font-comic">Frontend Developer and 
                    <br />Product Specialist.
                </h2>

                <p className="mt-12 text-sm text-gray-300">I'm experienced with 2+ years in
                    both Frontend web development and product management</p>

                <div className="flex justify-center text-gray-300 gap-10 mt-16">
                    <button className="border rounded-md font-bold px-5">HIRE ME</button>
                    <button className="border rounded-md font-bold px-5">VIEW RESUME</button>
                </div>
            </div>
            <div className="mt-20 max-w-5xl w-6/12"></div>
        </div>
     );
}
 
export default HeroPage;