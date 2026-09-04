import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/aboutPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* task complete the remaining routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
