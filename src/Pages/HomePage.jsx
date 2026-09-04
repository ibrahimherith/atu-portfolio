import Navbar from "../components/navbar";
import HeroPage from "./heroPage";

const HomePage = () => {
  return (
    <>
      <div
        className="items-center pt-4 pb-15 bg-cover bg-center"
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
