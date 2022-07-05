import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Progressbar.css";

export default function Progressbar(props) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <section class="section skills">
        <div class="container" style={{ padding: 0 }}>
          <div class="row responsive">
            <div class="col-md-12">
              <div class="skills_section text-center">
                <div class="skill-head"></div>

                <div class="skills-area">
                  <div class="single-skill">
                    <div class="circlechart" data-percentage={props.value} >
                      <svg
                        class="circle-chart"
                        viewBox="0 0 33.83098862 33.83098862"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{boxShadow: darkMode? "none" :"1px 1px 20px 3px #EAECEE",borderRadius:darkMode?"50%":"50%"}}
                      >
                        <circle
                          class="circle-chart__background"
                          cx="16.9"
                          cy="16.9"
                          r="15.9"
                        ></circle>
                        <circle
                          class="circle-chart__circle success-stroke"
                          stroke-dasharray={props.value}
                          cx="16.9"
                          cy="16.9"
                          r="15.9"
                        ></circle>
                        <g class="circle-chart__info">
                          {" "}
                          <text class="circle-chart__percent" x="17.9" y="15.5" style={{stroke: darkMode?'white': ''}}>
                            {props.value}%
                          </text>
                          <text
                            class="circle-chart__subline"
                            x="16.91549431"
                            y="22"
                            style={{stroke: darkMode?'white': '', strokeWidth:darkMode?0.03:""}}
                          >
                            {props.skilltext}
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
