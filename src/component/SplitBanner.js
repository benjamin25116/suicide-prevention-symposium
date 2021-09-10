import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  margin: 0 auto;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    width: 768px;
  }
  @media (min-width: 1024px) {
    min-height: 500px;
    width: 1024px;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  width: 100%;

  @media (min-width: 768px) {
    min-width: 420px;
    background-position: left;
  }
  @media (min-width: 1024px) {
    height: 500px;
    min-width: 500px;
    background-position: left;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  max-width: 700px;
  margin: 0 auto;
  @media (min-width: 768px) {
    min-width: 384px;
  }
  @media (min-width: 1024px) {
    min-width: 500px;
    height: 500px;
  }
`;

const Heading = styled.h2`
  @media (min-width: 768px) {
    text-align: left;
  }
`;

function SplitBanner(props) {
  let content;
  if (typeof props.body === "object") {
    content = props.body.map((p) => {
      return <p key={p.length}>{p}</p>;
    });
  }
  if (typeof props.body === "string") {
    content = <p>{props.body}</p>;
  }

  return (
    <Container>
      <Image src={props.src}></Image>
      <TextWrapper>
        <Heading>{props.heading}</Heading>
        {content}
      </TextWrapper>
    </Container>
  );
}

export default SplitBanner;
