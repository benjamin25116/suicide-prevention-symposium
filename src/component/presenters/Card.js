import React from "react";
import styled from "styled-components";

const Container = styled.article`
  background-color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 1rem 2rem 1rem;
  max-width: 320px;
  padding-bottom: 1rem;

  :hover {
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(105%);
  }
  /* border: 1px solid green; */
`;

const Pic = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  width: 100%;
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
  /* border: 1px solid red; */
`;

const SecondLine = styled.span`
  font-weight: lighter;
  font-size: 1.2rem;
  color: rgb(50, 50, 50);
  text-align: left;
  margin-bottom: 0.8rem;
`;

const ThirdLine = styled.span`
  padding-right: 0.35rem;
  font-weight: lighter;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.35rem;
  color: rgb(50, 50, 50);
  text-align: left;
  padding-top: 0.8rem;
  border-top: 1px solid pink;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 210px;
  padding: 0 1rem 0 1rem;
`;

const Arrow = styled.span`
  display: flex;
  flex-grow: 3;
  font-size: 2rem;
  color: burlywood;
  justify-content: center;
  align-items: flex-end;
  height: 20px;
  width: 100%;
`;

function Card(props) {
  return (
    <Container id={props.id}>
      {props.src && <Pic src={props.src} />}
      <TextWrapper presenter={props.presenter}>
        {props.firstLine && (
          <FirstLine presenter={props.presenter}>{props.firstLine}</FirstLine>
        )}
        {props.secondLine && (
          <SecondLine presenter={props.presenter}>
            {props.secondLine}
          </SecondLine>
        )}
        {props.thirdLine && (
          <ThirdLine presenter={props.presenter}>{props.thirdLine}</ThirdLine>
        )}
        {props.bio ? <Arrow>???</Arrow> : null}
      </TextWrapper>
    </Container>
  );
}

export default Card;
