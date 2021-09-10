import React from "react";
import styled from "styled-components";

const Container = styled.article`
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 1rem 2rem 1rem;
  max-width: 320px;
  min-height: 377px;
  padding-bottom: 1rem;
  /* box-shadow: 8px 8px gray; */
`;

const Pic = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 320px;
  margin-bottom: 1rem;
  max-height: 250px;
`;

const FirstLine = styled.span`
  width: 100%;
  font-weight: bold;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: rgb(50, 50, 50);
  margin-bottom: 0.4rem;
  text-align: left;
`;

const SecondLine = styled.span`
  /* display: inline-block; */
  font-weight: lighter;
  font-size: 1.2rem;
  color: rgb(50, 50, 50);
  text-align: left;
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid pink;
`;

const ThirdLine = styled.span`
  padding-right: 0.35rem;
  font-weight: lighter;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.35rem;
  color: rgb(50, 50, 50);
  text-align: left;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
`;

function Card(props) {
  return (
    <Container>
      {/* {props.src && <Pic src={props.src} alt={props.name} />} */}
      {props.src && <Pic src={props.src} />}
      <TextWrapper>
        {props.firstLine && <FirstLine>{props.firstLine}</FirstLine>}
        <SecondLine>{props.secondLine}</SecondLine>
        {props.thirdLine && <ThirdLine>{props.thirdLine}</ThirdLine>}
      </TextWrapper>
    </Container>
  );
}

export default Card;
