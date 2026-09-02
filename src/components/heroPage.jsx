const HeroPage = () => {
    return ( 
        <div className="text-center py-10 space-y-10">
            <p className="font-bold text-5xl">I am Atupye Tweve, 
                <span className="text-cyan-600 text-6xl">Frontend Developer and Product Specialist.</span>
            </p>
            <p>I'm experienced with 2+ years in both Frontend web development and product management</p>
            <div className="flex justify-center gap-10 py-3">
                <button className="border border-black/30 rounded-md text-xl font-bold px-3">HIRE ME</button>
                <button className="border border-black/30 rounded-md text-xl font-bold px-3">VIEW RESUME</button>
            </div>
        </div>
     );
}
 
export default HeroPage;