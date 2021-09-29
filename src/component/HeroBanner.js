import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import image from "../images/fahad-bin-kamal-anik-jNS7kDxkIyQ-unsplash.jpg";
import dignity from "../images/logo/dignity-logo.png";
import masw from "../images/logo/masw-logo.png";
import perkama from "../images/logo/perkama-logo.png";
import Button from "./Button";

const Banner = styled.section`
  /* background-image: url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center; */

  display: grid;
  position: relative; // imperative for the overlapping to work
  grid-template-columns: 1fr;
  min-height: 100vh;
  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

const Top = styled.div`
  grid-row: 1;
  grid-column: 1;
  z-index: 1; // tells the browser to make this image on top
  /* background-color: rgba(0, 100, 0, 0.5); */
  /* width: 100%; */
  padding: 2rem;
  place-self: center;
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const Bottom = styled.div`
  grid-column: 1;
  grid-row: 1;
  @media (min-width: 1024px) {
    height: 100vh;
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
  line-height: 1.8rem;
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

const ClosingDate = styled(SurTitle)`
  margin-top: 2rem;

  i {
    font-size: 1rem;
    display: block;
    line-height: 1.35rem;
  }
`;

function HomeBanner() {
  return (
    <Banner>
      <Top>
        <TitleWrapper>
          <Heading>
            Suicide: the <Emphasis>{`Silent `} </Emphasis>
            Pandemic
          </Heading>
          <SubHeading>Let’s Talk About Suicide Prevention Together</SubHeading>
          <Date>25th September 2021 • 1pm-7pm (UTC+08:00)</Date>
          {/* <Button to="https://docs.google.com/forms/d/1Gor9GLP3zl1U6E511VELNswsavxRGCGGKBmZ-IP_Jy0/formrestricted?edit_requested=true">
            Register now
          </Button> */}
          {/* <ClosingDate>
            Registration is closed. If you have registered but have not received
            the Zoom meeting link, contact +6011&nbsp;3322&nbsp;4711.
          </ClosingDate> */}
        </TitleWrapper>
        <SurTitle>
          Malaysia's First Multidisciplinary Symposium on Suicide Prevention
        </SurTitle>
        <LogoContainer>
          <Dignity src={dignity} alt="Dignity for Children Foundation logo" />
          <Masw src={masw} alt="MASW logo" />
          <Perkama src={perkama} alt="PERKAMA logo" />
        </LogoContainer>
      </Top>
      <Bottom>
        <StaticImage
          src="../images/fahad-bin-kamal-anik-jNS7kDxkIyQ-unsplash.jpg"
          style={{ height: "100%", width: "100%" }}
          alt="Man standing in a stairwell looking up"
          role="presentational"
          placeholder="dominantColor"
        />
      </Bottom>
    </Banner>
  );
}

export default HomeBanner;
