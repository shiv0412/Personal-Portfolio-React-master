import React, { useRef } from "react";
import styled from "styled-components";

import useVisible from "./scroller";
import Progressbar from "./Progressbar";

const Container = styled.div`
    width:100%;
    padding:0 2%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width:480px) {
        width:100%;
    }
`
const InnerContainer= styled.div`
    @media(max-width:480px){
        width:50%;
    }
    @media(min-width:481px) and (max-width:992px){
        width:25%;
    }
    @media(min-width:993px){
        width:16.66%;
    }
    
`

export default function Progress() {
  const elemRef = useRef();
  const isVisible = useVisible(elemRef);
  return (
    <>
      <Container>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={90} skilltext="HTML5" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={85} skilltext="CSS3" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={75} skilltext="Javascript" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={80} skilltext="Bootstrap" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={85} skilltext="ReactJs" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={80} skilltext="Sql" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={60} skilltext="Azure" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={80} skilltext="Wordpress" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={75} skilltext="C Language" />}
            </div>
          </InnerContainer>
          <InnerContainer>
            <div ref={elemRef}>
              {isVisible && <Progressbar value={55} skilltext="DotNet Core" />}
            </div>
          </InnerContainer>
    </Container>
    </>
  );
}
