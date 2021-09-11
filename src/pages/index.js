import * as React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";

import HeroBanner from "../component/HeroBanner";
import Presenters from "../component/Presenters";
import Schedule from "../component/Schedule";
// import Objectives from "../component/Objectives";
import Footer from "../component/Footer";

import FirstImage from "../images/pexels-meruyert-gonullu-6588933.jpg";
import SecondImage from "../images/alex-ivashenko-RLdcScGQEJ4-unsplash.jpg";
import SplitBanner from "../component/SplitBanner";

// styles

const BackgroundWrapper = styled.div`
  background-color: #f9f4f1;
  width: 100%;
`;

const DescriptionContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Headline = styled.h2`
  font-size: 2.5rem;
  line-height: 3rem;
`;

const Description = styled.p``;

const ChargesDescription = styled.p`
  text-align: center;
  margin-bottom: 2rem;
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

const ChargesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />

      <HeroBanner />
      <BackgroundWrapper>
        <DescriptionContainer>
          <Headline>Let’s Talk About Suicide Prevention Together</Headline>
          <Description>
            As the world battles with Covid-19, another war rages in Malaysia.
            Our nation is fighting against a silent pandemic, the soaring number
            of suicides in the country. In these uncertain times, everyone is at
            risk of suicide, but the situation is most dire among the most
            vulnerable populations of our society: the neglected, the
            traumatized and the abused.
          </Description>
          <Description>
            Trapped by cultural, political and religious stigmas and
            prohibitions, those at risk are silenced and isolated by shame and
            blame, meaninglessness and hopelessness. In their inner darkness and
            confusion, the stigma of suicide keeps them from reaching out for
            help.
          </Description>
          <Description>
            One crucial element of suicide prevention is the fact that suicide
            has many faces. Some of these faces are hidden and unacknowledged.
          </Description>
          <Description>
            Itʼs been said that it takes a village to raise a child. Thereʼs an
            innate desire to help, but so far, weʼve grappled with the problem
            in isolation within our own fields of expertise and thatʼs why we
            need to discuss this together.
          </Description>
          <Description>
            This symposium is a first attempt at creating space to openly talk
            about our concerns, our hopes and our plans for our people and for
            the generations that are to come. We need to hear, argue, agree and
            disagree, be enlivened and renewed in our vision, and in the spirit
            of mutuality, respect, safety, to trust and hope that together we
            are stronger and have more resources to share with each other. We
            are not better than each other; we are better together.
          </Description>
          <Description>
            Weʼre bringing together, as a community, experts from various
            disciplines and they include educators, academicians, lawyers,
            doctors, and mental health and social work professionals. Join us as
            we meet and hear the perspectives of social workers, addiction
            counselors, school principals, medical doctors, therapists, teachers
            and clinicians. <em>ALL</em> of us are in this together: to lessen
            suicidal deaths and reduce the despair in our homes, workplaces,
            schools, and communities. Letʼs talk.
          </Description>
        </DescriptionContainer>
      </BackgroundWrapper>
      <SplitBanner
        src={FirstImage}
        heading="Who Should Attend"
        body={[
          "Anyone who seeks to stand up and acknowledge our responsibility in perpetuating the stigma and silence of suicide.",
          "Anyone who is concerned about the increasing number of suicides and suicide attempts in the country and wants to help do something to prevent suicide.",
        ]}
      />
      <SplitBanner
        src={SecondImage}
        heading="Why Attend"
        body="Because preventing suicide is everyone’s responsibility. You may be able to save a life if you’re more informed about the many faces of suicide. Come be a part of something that can literally make a life or death difference."
      />

      <BackgroundWrapper>
        <DescriptionContainer>
          <Headline>Charges</Headline>
          <ChargesContainer>
            <ChargesDescription>
              <b>RM 50</b> registration fee <br />
              <b>RM 150</b> for certification and <br />
              <b>2 CPD points</b> for registered counselors
            </ChargesDescription>
            <ChargesDescription>
              <b>Group discount</b> available for organizations: <br />7
              participants and above are eligible for group discount of RM 30
              per person (not applicable for certification and CPD points).
            </ChargesDescription>
            <Button href="https://docs.google.com/forms/d/1Gor9GLP3zl1U6E511VELNswsavxRGCGGKBmZ-IP_Jy0/formrestricted?edit_requested=true">
              Register now
            </Button>
          </ChargesContainer>
        </DescriptionContainer>
      </BackgroundWrapper>

      <Schedule />

      <Presenters />

      {/* <Objectives /> */}

      <Footer />
    </main>
  );
};

export default IndexPage;
