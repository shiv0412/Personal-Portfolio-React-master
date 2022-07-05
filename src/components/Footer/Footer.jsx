import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
       <a href="mailto:shivomthakur38@gmail.com" className="email_info_link"><span className="email_info">shivomthakur38@gmail.com</span></a>
        <div className="f-icons">
         <a href="https://www.facebook.com/shivom.tomar" target="_blank"><Facebook color="white" size={"3rem"} /></a>
         <a href="https://github.com/shiv0412" target="_blank"><Gitub color="white" size={"3rem"} /></a>
         <Insta color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
