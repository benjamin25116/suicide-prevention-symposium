import * as React from "react";
import styled from "styled-components";

import Normalise from "./Normalise";
import BaseStyle from "./BaseStyle";

import HeroBanner from "../component/HeroBanner";
import Presenters from "../component/Presenters";
import Schedule from "../component/Schedule";
import Objectives from "../component/Objectives";

// styles

const Description = styled.p``;

const DescriptionContainer = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <Normalise />
      <BaseStyle />
      <HeroBanner />
      <DescriptionContainer>
        <Description>
          This symposium will gather researchers, clinicians, public health
          professionals, leaders and peers to discuss strengthening our work
          through human connectedness and other tools along the pathway of care.
        </Description>
        <Description>
          As we look forward to the end of lockdowns and social distancing, we
          face soaring mental health concerns and disturbing levels of suicidal
          thought and behavior.
        </Description>
        <Description>
          ALL of us are in this together: to lessen suicidal deaths and reduce
          the despair in our homes, workplaces, schools, and communities.
        </Description>
      </DescriptionContainer>

      <Presenters />

      <Schedule />

      <Objectives />
    </main>
  );
};

export default IndexPage;
