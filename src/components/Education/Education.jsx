import React, { useContext } from "react";
import "./Education.css";
import { themeContext } from "../../Context";
import { AnimationOnScroll } from "react-animation-on-scroll";

import EducationDetails from "./EducationDetails";

const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="education">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>My Academic</span>
          <span>Education</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="education_section">
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
          <EducationDetails
            degree="Master of Computer Application"
            year="2019-21"
          />
          <EducationDetails
            degree="Bachelor of Computer Application"
            year="2016-19"
          />
          <EducationDetails degree="Higher Secondary School" year="2013-15" />
          <EducationDetails degree="Secondary School" year="2012-13" />
      </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Education;
