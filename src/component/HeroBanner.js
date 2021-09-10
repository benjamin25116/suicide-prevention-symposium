import React from "react";
import styled from "styled-components";
import image from "../images/fahad-bin-kamal-anik-jNS7kDxkIyQ-unsplash.jpg";
import dignity from "../images/logo/dignity-logo.png";
import masw from "../images/logo/masw-logo.png";
import perkama from "../images/logo/perkama-logo.png";

const Banner = styled.section`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 670px;
  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 4rem;
  margin-bottom: 2rem;
`;

const SubHeading = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 1rem;
  max-width: 400px;
`;

const Emphasis = styled.span`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 100;
`;

const Dignity = styled.img`
  height: 30px;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
`;
const Masw = styled.img`
  height: 48px;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
`;
const Perkama = styled.img`
  height: 55px;
  margin-bottom: 0.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 3rem;
`;

const Button = styled.a`
  display: block;
  max-width: 18rem;
  padding: 1rem 3rem;
  border-radius: 2rem;
  background-color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  color: rgb(5, 0, 50);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;

const extraMarginBottom = {
  marginBottom: "5rem",
};

function HomeBanner() {
  return (
    <Banner>
      <Wrapper>
        <Heading>
          Suicide:
          <br />
          the <Emphasis>{`Silent `} </Emphasis>
          Pandemic
        </Heading>
        <SubHeading>
          Malaysia’s First Multidisciplinary Symposium: Let’s Talk About Suicide
          Prevention Together
        </SubHeading>
        <SubHeading style={extraMarginBottom}>
          25th September 2021 • 1pm-7pm
        </SubHeading>
        <LogoContainer>
          <Dignity src={dignity} alt="Dignity for Children Foundation logo" />
          <Masw src={masw} alt="MASW logo" />
          <Perkama src={perkama} alt="PERKAMA logo" />
        </LogoContainer>
        <Button href="https://docs.google.com/forms/d/1Gor9GLP3zl1U6E511VELNswsavxRGCGGKBmZ-IP_Jy0/formrestricted?edit_requested=true">
          Register now
        </Button>
      </Wrapper>
    </Banner>
  );
}

export default HomeBanner;
