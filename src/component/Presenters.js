import React from "react";
import styled from "styled-components";

import Profile from "./Profile";
import Bio from "./Biodata";

import Rasimas from "../images/speaker_photos/rasimas.jpg";
import Jaques from "../images/speaker_photos/jaques.jpeg";
import Azlinda from "../images/speaker_photos/azlinda.jpg";
import Karim from "../images/speaker_photos/raj-abdul-karim.jpg";
import Louis from "../images/speaker_photos/louis.jpg";
import Petrina from "../images/speaker_photos/petrina.png";
import Mohamad from "../images/speaker_photos/mohamed.jpg";
import Halim from "../images/speaker_photos/halim.jpg";
import Guibord from "../images/speaker_photos/guibord.jpeg";
import Elisha from "../images/speaker_photos/elisha.jpg";

const data = [
  {
    name: "Dr. J.J. Rasimas",
    role: "Keynote Speaker",
    title:
      "M.D. in Psychiatry, Ph.D. in chemical biology. Psychiatrist at Hennepin County Medical Center in Minnesota. Professor at the University of Minnesota.",
    src: Rasimas,
    biodata: Bio.rasimas,
  },
  {
    name: "Dr. Valerie Jaques",
    role: "Keynote Speaker",
    title:
      "Doctor of Clinical Psychology. Founder of Integrated Psychology Network Sdn. Bhd.",
    src: Jaques,
    biodata: Bio.jaques,
  },
  {
    name: "Prof. Dr. Azlinda Azman",
    role: "Panel Moderator",
    title:
      "Doctor of Clinical Social Work President of Malaysian Association of Social Workers. Head of Social Work Program, Universiti Sains Malaysia.",
    src: Azlinda,
    biodata: Bio.azlinda,
  },
  {
    name: "Datuk Dr. Raj Abdul Karim",
    role: "Panel Speaker",
    title:
      "President of the Malaysian Council of Child Welfare. Chair of End CSEC Network Malaysia. Chair of Malaysian Society of Association Executives.",
    src: Karim,
    biodata: Bio.karim,
  },
  {
    name: "Ms. Larissa Ann Louis",
    role: "Panel Speaker",
    title:
      "Bachelor of Law (Hons). Litigation lawyer, Human Rights Activist, Messrs. Azri, Lee Swee Seng & Co.",
    src: Louis,
    biodata: Bio.louis,
  },
  {
    name: "Ms. Petrina Shee Shiang Fei (Satvinder)",
    role: "Panel Speaker",
    title:
      "M.A. Holistic Child Development, M.Ed. in Curriculum and Pedagogy. Co-founder and CEO of Dignity for Children Foundation.",
    src: Petrina,
    biodata: Bio.petrina,
  },
  {
    name: "Prof. Madya Dr. Mohd Suhaimi Bin Mohamad",
    role: "Panel Speaker",
    title:
      "Ph.D. in Social Work. Head of Social Work Program, Universiti Kebangsaan Malaysia.",
    src: Mohamad,
  },
  {
    name: "Datoʼ Dr. Abd. Halim Mohd. Hussin",
    role: "Panel Speaker",
    title:
      "Drug Addiction Counseling Expert. Honorary Fellow of Asian Center for Research on Drug Abuse, USIM. President of PERKAMA International.",
    src: Halim,
    biodata: Bio.halim,
  },
  {
    name: "Dr. Robert Guibord",
    role: "Panel Speaker",
    title: "Doctor of Clinical Psychology. Psychoanalyst in Private Practice.",
    src: Guibord,
    biodata: Bio.guibord,
  },
  {
    name: "Rev. Elisha Satvinder",
    title:
      "Co-founder of Dignity for Children Foundation. Council member and Honorary Secretary of the National Evangelical Christian Fellowship.",
    src: Elisha,
    biodata: Bio.elisha,
  },
];

const Background = styled.div`
  background-color: #e3e0de;
  width: 100vw;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* border: 1px solid green; */
  @media (max-width: 767px) {
    /* max-width: 350px; */
  }
  @media (min-width: 768px) {
    max-width: 700px;
  }
  @media (min-width: 1366px) {
    max-width: 1366px;
  }
`;

const Heading = styled.h2`
  display: inline-block;
  color: rgb(5, 0, 50);
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: capitalize;
  line-height: 3rem;
  margin-bottom: 2rem;
  border-bottom: 4px solid rgb(5, 0, 50);
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
            />
          );
        })}
      </Container>
    </Background>
  );
}

export default Presenters;
