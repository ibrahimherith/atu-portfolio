const HeroPage = () => {
    return ( 
        <div id="home" className="flex items-center gap-4 px-10 h-screen w-full overflow-hidden"> 
            <div className="flex-2 space-y-8 text-start">
                <h1 className="font-bold text-4xl">I am Atupye Tweve,</h1> 

                <h2 className="text-cyan-600 text-5xl font-bold font-comic">Frontend Developer and 
                    <br />Product Specialist.
                </h2>

                <p className="text-sm text-gray-600">I'm experienced with 2+ years in
                    both Frontend web development and product management</p>

                <div className="flex text-gray-600 gap-4">
                    <button className="bg-gray-300 border rounded-md font-bold px-8 py-2">HIRE ME</button>
                    <button className="bg-cyan-600 border rounded-md font-bold px-8 py-2">VIEW RESUME</button>
                </div>
            </div>

            <div className="flex-1 bg-amber-800 ">
                <div className="">
                    <img src="demo1.png" className="w-full h-auto "/>
                </div>
            </div>
        </div>
     );
}
 
export default HeroPage;