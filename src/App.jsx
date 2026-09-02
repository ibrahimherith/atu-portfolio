import HeroPage from "./components/heroPage";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen items-center pt-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/dev 1.jpg')",
      }}
    >
      <Navbar />
      <HeroPage />
    </div>
  )
}

export default App

