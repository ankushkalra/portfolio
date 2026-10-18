import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "~/src/pages/projects/Projects";
import Home from "~/src/pages/home/Home";
import ProjectDetailsPage from "~/src/pages/project-details/ProjectDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
