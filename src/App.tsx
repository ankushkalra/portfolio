import { BrowserRouter, Routes, Route } from "react-router";
import Projects from "~/src/pages/projects/Projects";
import Home from "~/src/pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
