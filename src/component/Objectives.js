import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 3rem;
  border: 4px solid darkblue;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Heading = styled.h2`
  display: inline-block;
  color: darkblue;
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 3rem;
  margin-bottom: 2rem;
  border-bottom: 4px solid darkblue;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 41rem;
`;

const Card = styled.article`
  background-color: ${(props) => (props.reverse ? null : "white")};
  background-image: ${(props) =>
    props.reverse ? "linear-gradient(to bottom, darkblue, black)" : null};

  color: ${(props) => (props.reverse ? "white" : null)};

  padding: 2rem;
  border-radius: 1rem;
  border: 3px solid darkblue;
  margin-bottom: 2rem;
  line-height: 1.25rem;

  max-width: 13rem;
`;

function Objectives() {
  return (
    <Container>
      <Heading>Objective</Heading>
      <InnerContainer>
        <Card>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aut
          debitis culpa cum officiis dolores officia vero ducimus natus unde
          iusto, excepturi beatae quaerat magnam tempora fugiat molestiae
          maiores ut.
        </Card>
        <Card reverse>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aut
          debitis culpa cum officiis dolores officia vero ducimus natus unde
          iusto, excepturi beatae quaerat magnam tempora fugiat molestiae
          maiores ut.
        </Card>
        <Card>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aut
          debitis culpa cum officiis dolores officia vero ducimus natus unde
          iusto, excepturi beatae quaerat magnam tempora fugiat molestiae
          maiores ut.
        </Card>
        <Card reverse>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet aut
          debitis culpa cum officiis dolores officia vero ducimus natus unde
          iusto, excepturi beatae quaerat magnam tempora fugiat molestiae
          maiores ut.
        </Card>
      </InnerContainer>
    </Container>
  );
}

export default Objectives;
