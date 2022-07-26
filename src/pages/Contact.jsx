import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import ResponsiveNavBar from "../components/Navbar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveNavBar></ResponsiveNavBar>
        <div>
          <div className="main-content">
            <h1>Contact</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Contact;
