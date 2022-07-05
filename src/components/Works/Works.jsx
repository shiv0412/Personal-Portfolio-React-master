import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/cap.png";
import Fiverr from "../../img/grad.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/cetpa.png";
import Facebook from "../../img/abes.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" height="50" width="160"/>
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" height="80" width="120"/>
          </div>
          <div className="w-secCircle">
            {/* <img src={Amazon} alt="" /> */}
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" height="50" width="160" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" height="80" width="180" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
