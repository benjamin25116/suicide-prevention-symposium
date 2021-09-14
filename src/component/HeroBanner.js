import React from "react";
import styled from "styled-components";
import image from "../images/fahad-bin-kamal-anik-jNS7kDxkIyQ-unsplash.jpg";
import dignity from "../images/logo/dignity-logo.png";
import masw from "../images/logo/masw-logo.png";
import perkama from "../images/logo/perkama-logo.png";
import Button from "./Button";

const Banner = styled.section`
  background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 0.5rem;
`;

const SubHeading = styled.p`
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.7rem;
  font-weight: bold;
  line-height: 3rem;
  margin-bottom: 2rem;
`;

const Date = styled(SubHeading)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  line-height: 2rem;
`;

const SurTitle = styled(SubHeading)`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: lighter;
  font-size: 1.3rem;
  margin-bottom: 0;
`;

const Emphasis = styled.span`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 100;
`;

const Dignity = styled.img`
  height: 35px;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
`;
const Masw = styled.img`
  height: 58px;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
`;
const Perkama = styled.img`
  height: 60px;
  margin-bottom: 0.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 5rem;
`;

function HomeBanner() {
  return (
    <Banner>
      <Wrapper>
        <TitleWrapper>
          <Heading>
            Suicide:
            <br />
            the <Emphasis>{`Silent `} </Emphasis>
            Pandemic
          </Heading>
          <SubHeading>Let’s Talk About Suicide Prevention Together</SubHeading>
          <Date>25th September 2021 • 1pm-7pm</Date>
          <Button to="https://docs.google.com/forms/d/1Gor9GLP3zl1U6E511VELNswsavxRGCGGKBmZ-IP_Jy0/formrestricted?edit_requested=true">
            Register now
          </Button>
        </TitleWrapper>
        <SurTitle>Malaysia's First Multidisciplinary Symposium</SurTitle>
        <LogoContainer>
          <Dignity src={dignity} alt="Dignity for Children Foundation logo" />
          <Masw src={masw} alt="MASW logo" />
          <Perkama src={perkama} alt="PERKAMA logo" />
        </LogoContainer>
      </Wrapper>
    </Banner>
  );
}

export default HomeBanner;
