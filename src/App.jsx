import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectsPage";
import SkillsPage from "./Pages/SkillsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skill" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* task complete the remaining routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
