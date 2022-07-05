import React , {useContext} from "react";
import Progress from "./Progress";
import styled from "styled-components";
import { themeContext } from "../../Context";

const Heading = styled.p`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  font-family: serif;
  text-align: center;
`;

const HeadingTwo = styled.span`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  font-family: serif;
  color: orange;
`;
const Span = styled.span`
  color: #808b96;
  font-size: 12px;
`;

function Skillset() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="skills">
      <Heading style={{color: darkMode?'white': ''}}>
        Technical
        <HeadingTwo style={{color:"orange"}}> Skill Set</HeadingTwo>
        <br />
        <Span style={{color: darkMode?'white': ''}}>"Life Without Knowledge is Death to Disguise."</Span>
      </Heading>
      <Progress />
    </div>
  );
}

export default Skillset;
