import * as React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";

import HeroBanner from "../component/HeroBanner";
import Presenters from "../component/Presenters";
import Schedule from "../component/Schedule";
import Objectives from "../component/Objectives";
import Footer from "../component/Footer";

import Sunset from "../images/cesar-couto-27HiryxnHJk-unsplash.jpg";
import WindowImage from "../images/alex-ivashenko-RLdcScGQEJ4-unsplash.jpg";
import SplitBanner from "../component/SplitBanner";

// styles

const DescriptionContainer = styled.section`
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const Headline = styled.h2``;

const Description = styled.p``;

const WhoShouldAttend = styled.section`
  background-color: #f9f4f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 400px;
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />

      <HeroBanner />
      <DescriptionContainer>
        <Headline>Let’s Talk About Suicide Prevention Together</Headline>
        <Description>
          As the world battles with Covid-19, another war rages in Malaysia. Our
          nation is fighting against a silent pandemic, the soaring number of
          suicides in the country. In these uncertain times, everyone is at risk
          of suicide, but the situation is most dire among the most vulnerable
          populations of our society: the neglected, the traumatized and the
          abused.
        </Description>
        <Description>
          Trapped by cultural, political and religious stigmas and prohibitions,
          those at risk are silenced and isolated by shame and blame,
          meaninglessness and hopelessness. In their inner dark and confused
          world, suicide becomes attractive.
        </Description>
        <Description>
          They fear a helping hand, because that hand could hide piercing arrows
          and veiled hostility even as it offers hope.
        </Description>
        <Description>
          Itʼs been said that it takes a village to raise a child: we need to
          gather and talk about this together. Thereʼs an innate desire to help,
          but so far, weʼve grappled with the problem in isolation within our
          own fields of expertise.
        </Description>
        <Description>
          This symposium is a first attempt at creating space to openly talk
          about our concerns, our hopes and our plans for our people and for the
          generations that are to come. We need to hear, argue, agree and
          disagree, be enlivened and renewed in our vision, in the spirit of
          mutuality, respect, safety, trust and hope that together we are
          stronger and have more resources to share with each other. We are not
          better than each other, but we are better together.
        </Description>
        <Description>
          Weʼre bringing together, as a community, experts from various
          disciplines and they include educators, academicians, lawyers,
          doctors, and mental health and social work professionals. Join us as
          we meet and hear the perspectives of social workers, addiction
          counselors, school principals, medical doctors, therapists, teachers
          and clinicians. ALL of us are in this together: to lessen suicidal
          deaths and reduce the despair in our homes, workplaces, schools, and
          communities. Letʼs talk.
        </Description>
      </DescriptionContainer>

      <SplitBanner
        src={Sunset}
        heading="Who Should Attend"
        body={[
          "Anyone who seeks to stand up and acknowledge our responsibility in perpetuating the stigma and silence of suicide.",
          "Anyone who is concerned about the increasing number of suicides and suicide attempts in the country and wants to help do something to prevent suicide.",
        ]}
      />
      <SplitBanner
        src={WindowImage}
        heading="Why Attend"
        body="Because preventing suicide is everyone’s responsibility. You may be able to save a life if you’re more informed about the many faces of suicide. Come be a part of something that can literally make a life or death difference."
      />

      <Presenters />

      {/* <Schedule /> */}

      {/* <Objectives /> */}

      <Footer />
    </main>
  );
};

export default IndexPage;
