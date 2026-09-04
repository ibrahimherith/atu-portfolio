import Navbar from "../components/Navbar";
import HeroPage from "./HeroPage";

const HomePage = () => {
  return (
    <>
      <div
        className="items-center min-h-screen pt-4 pb-15 bg-cover bg-center"
        style={{
          backgroundImage: "url('/dev 1.jpg')",
        }}
      >
        <Navbar />
        <HeroPage />
      </div>
    </>
  );
};

export default HomePage;
