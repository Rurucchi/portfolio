import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

// Components
import ResponsiveNavBar from "../components/Navbar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

let gitUrl = "https://github.com/Rurucchi";
let linkedinUrl = "https://www.linkedin.com/in/lenny-xiong-7a1495238/";

function openUrl(url) {
  window.open(url, "_blank");
}

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveNavBar></ResponsiveNavBar>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <div className="main-content">
            <div className="container1">
              <img
                src="/images/pfp125.png"
                width="100"
                height="100"
                style={{ borderRadius: "50%" }}
                id="pfp"
              />
              <h1>Lenny Xiong</h1>
            </div>
            <div className="main-text">
              <p>Fullstack Developer</p>
            </div>
          </div>
          <div className="links">
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              onClick={() => openUrl(linkedinUrl)}
            >
              Linked In
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              onClick={() => openUrl(gitUrl)}
            >
              Github
            </Button>
          </div>
          <div className="sub-content">
            <h2>Skills and Stack</h2>
            <div className="skill">
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
