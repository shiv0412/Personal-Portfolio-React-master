import React from "react";
import { useContext } from "react";
import { themeContext } from "./Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MobileNav from "./components/MobileMenu/Mobile_Navbar";
import Education from "./components/Education/Education";
import Navbar from "./components/Navbar/Navbar";
import Skillset from "./components/Skillset/Skillset";
import Testimonial from "./components/Testimonials/Testimonial";

const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <Navbar/>
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "100%" }}
      />
      <MobileNav />
      <Intro />
      <Services />
      <Education />
      <Skillset />
      <Works />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default App;
