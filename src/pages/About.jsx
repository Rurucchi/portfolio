import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import ResponsiveNavBar from "../components/Navbar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveNavBar></ResponsiveNavBar>
        <div className="about-section">
          <h1>About</h1>
          <h2>Skills</h2>
          <h3>Back-End</h3>
          <Box sx={{ width: "100%" }}>
            <p>NodeJS</p>
            <LinearProgress variant="determinate" value={80} />
            <p>Express</p>
            <LinearProgress variant="determinate" value={80} />
            <p>MongoDB/Mongoose</p>
            <LinearProgress variant="determinate" value={65} />
          </Box>

          <h3>Front-End</h3>
          <Box sx={{ width: "100%" }}>
            <p>React</p>
            <LinearProgress variant="determinate" value={80} />
            <p>CSS</p>
            <LinearProgress variant="determinate" value={60} />
            <p>Design</p>
            <LinearProgress variant="determinate" value={50} />
          </Box>
          <h2>Hobbies</h2>
          <ul>
            <li>Programming</li>
            <li>Gaming</li>
            <li>Asian/Japanese culture</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default About;
