import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: #f9f4f1;
  width: 100%;
`;

const Body = styled.p`
  text-align: center;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  line-height: 3rem;
`;

const Button = styled.a`
  padding: 1rem 3.5rem;
  border-radius: 2rem;
  background-color: black;
  border: 2px solid black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  color: white;
  /* box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5); */

  &:hover {
    color: black;
    border: 2px solid black;
    background-color: white;
  }

  &:active {
    color: white;
    border: 2px solid white;
    background-color: black;
  }
`;

function Charges() {
  return (
    <Background>
      <Container>
        <Heading>Charges</Heading>
        <Wrapper>
          <Body>
            <b>RM 50</b> registration fee <br />
            <b>RM 150</b> for certification and <br />
            <b>2 CPD points</b> for registered counselors
          </Body>
          <Body>
            <b>Group discount</b> available for organizations: <br />7
            participants and above are eligible for group discount of RM 30 per
            person (not applicable for certification and CPD points).
          </Body>
          <Button href="https://docs.google.com/forms/d/1Gor9GLP3zl1U6E511VELNswsavxRGCGGKBmZ-IP_Jy0/formrestricted?edit_requested=true">
            Register now
          </Button>
        </Wrapper>
      </Container>
    </Background>
  );
}

export default Charges;
