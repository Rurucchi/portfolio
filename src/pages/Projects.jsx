import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import ResponsiveNavBar from "../components/Navbar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Projects = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveNavBar></ResponsiveNavBar>
        <div>
          <h1>Projects</h1>
          <p></p>
        </div>
      </header>
    </div>
  );
};

export default Projects;
