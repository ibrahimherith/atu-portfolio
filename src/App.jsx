import AboutPage from "./Pages/aboutPage";
import HeroPage from "./Pages/heroPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="items-center pt-4 pb-15 bg-cover bg-center"
        style={{
          backgroundImage: "url('/dev 1.jpg')",
        }}
      >
        <Navbar />
        <HeroPage />
      </div>
      
      <AboutPage />
    </>
  )
}

export default App

