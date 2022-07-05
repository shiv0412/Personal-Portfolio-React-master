import React from "react";
import "./EducationDetails.css";
import educate from "../../img/educate.png";

const EducationDetails = (props) => {
  return (
    <>
      <div className="educcontainer">
        <div>
          <img src={educate} className="educate_icon"></img>
        </div>
        <div>
          <span className="headtext">{props.degree}</span>
          <br />
          <span className="year_text">{props.year}</span>
        </div>
      </div>
    </>
  );
};

export default EducationDetails;