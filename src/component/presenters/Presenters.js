import React from "react";
import styled from "styled-components";

import Profile from "./Profile";
import Bio from "./Biodata";
import Heading from "../Heading";

import Rasimas from "../../images/speaker_photos/rasimas.jpg";
import Jaques from "../../images/speaker_photos/jaques.jpeg";
import Azlinda from "../../images/speaker_photos/azlinda.jpg";
import Karim from "../../images/speaker_photos/raj-abdul-karim.jpg";
import Louis from "../../images/speaker_photos/louis.jpg";
import Petrina from "../../images/speaker_photos/petrina.png";
import Mohamad from "../../images/speaker_photos/mohamed.jpg";
import Halim from "../../images/speaker_photos/halim.jpg";
import Guibord from "../../images/speaker_photos/guibord.jpeg";
import Elisha from "../../images/speaker_photos/elisha.jpg";

const data = [
  {
    name: "Dr. J.J. Rasimas",
    role: "Keynote Speaker",
    title:
      "M.D. in Psychiatry, Ph.D. in Chemical Biology. Psychiatrist at Hennepin County Medical Center in Minnesota. Professor at the University of Minnesota.",
    src: Rasimas,
    biodata: Bio.rasimas,
    id: "rasimas",
  },
  {
    name: "Dr. Valerie Jaques",
    role: "Keynote Speaker",
    title:
      "Ph.D. in Clinical Psychology. Founder of Integrated Psychology Network Sdn. Bhd.",
    src: Jaques,
    biodata: Bio.jaques,
    id: "jaques",
  },
  {
    name: "Prof. Dr. Azlinda Azman",
    role: "Panel Moderator",
    title:
      "Ph.D. in Clinical Social Work. President Malaysian Association of Social Workers. Dean, School of Social Sciences, Universiti Sains Malaysia, Penang.",
    src: Azlinda,
    biodata: Bio.azlinda,
    id: "azlinda",
  },
  {
    name: "Datuk Dr. Raj Abdul Karim",
    role: "Panel Speaker",
    title:
      "President of the Malaysian Council of Child Welfare. Chair of End CSEC Network Malaysia. Vice President of Federation Reproductive Health Associations Malaysia.",
    src: Karim,
    biodata: Bio.karim,
    id: "karim",
  },
  {
    name: "Ms. Larissa Ann Louis",
    role: "Panel Speaker",
    title:
      "Bachelor of Law (Hons). Litigation lawyer, Human Rights Activist, Messrs. Azri, Lee Swee Seng & Co.",
    src: Louis,
    biodata: Bio.louis,
    id: "louis",
  },
  {
    name: "Ms. Petrina Satvinder",
    role: "Panel Speaker",
    title:
      "M.A. Holistic Child Development, M.Ed. in Curriculum and Pedagogy. Co-founder and CEO of Dignity for Children Foundation.",
    src: Petrina,
    biodata: Bio.petrina,
    id: "petrina",
  },
  {
    name: "Prof. Madya Dr. Mohd. Suhaimi Mohamad",
    role: "Panel Speaker",
    title:
      "Ph.D. in Social Work. Director, Center for Professional and Leadership Development, Universiti Kebangsaan Malaysia.",
    src: Mohamad,
    biodata: Bio.mohamad,
    id: "mohamad",
  },
  {
    name: "Dato?? Dr. Abd. Halim Mohd. Hussin",
    role: "Panel Speaker",
    title:
      "Drug Addiction Counseling Expert. Honorary Fellow of Asian Center for Research on Drug Abuse, USIM. President of PERKAMA International.",
    src: Halim,
    biodata: Bio.halim,
    id: "halim",
  },
  {
    name: "Dr. Robert Guibord",
    role: "Panel Speaker",
    title:
      "Ph.D. in Clinical Psychology. Private practice in psychoanalysis and psychotherapy.",
    src: Guibord,
    biodata: Bio.guibord,
    id: "guibord",
  },
  {
    name: "Rev. Elisha Satvinder",
    role: "Opening Address",
    title:
      "Co-founder of Dignity for Children Foundation. Council member and Honorary Secretary of the National Evangelical Christian Fellowship.",
    src: Elisha,
    biodata: Bio.elisha,
    id: "elisha",
  },
];

const Background = styled.div`
  background-color: #e3e0de;
  width: 100%;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 568px) {
    max-width: 568px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1366px) {
    min-width: 1366px;
  }
  @media (min-width: 1600px) {
    min-width: 1600px;
  }
  @media (min-width: 1920px) {
    min-width: 1920px;
  }
`;

function Presenters() {
  return (
    <Background>
      <Heading>Presenters</Heading>
      <Container>
        {data.map((speaker) => {
          return (
            <Profile
              key={speaker.name}
              src={speaker.src}
              firstLine={speaker.name}
              secondLine={speaker.role}
              thirdLine={speaker.title}
              bio={speaker.biodata}
              id={speaker.id}
            />
          );
        })}
      </Container>
    </Background>
  );
}

export default Presenters;
