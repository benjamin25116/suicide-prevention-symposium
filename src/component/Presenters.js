import React from "react";
import styled from "styled-components";

import Drawer from "./Drawer";
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
    title: "title",
    src: Rasimas,
    biodata: Bio.rasimas,
  },
  {
    name: "Dr. Valerie Jaques",
    role: "Keynote Speaker",
    title: "title",
    src: Jaques,
    biodata: Bio.jaques,
  },
  {
    name: "Datuk Dr. Azlinda Azman",
    role: "Panel Moderator",
    title: "title",
    src: Azlinda,
    biodata: Bio.azlinda,
  },
  {
    name: "Datuk Dr. Raj Abdul Karim",
    role: "Panel Speaker",
    title: "title",
    src: Karim,
  },
  {
    name: "Ms. Larissa Ann Louis CLF",
    role: "Panel Speaker",
    title: "title",
    src: Louis,
  },
  {
    name: "Ms. Petrina Shee",
    role: "Panel Speaker",
    title: "title",
    src: Petrina,
  },
  {
    name: "Prof. Madya Dr. Mohd Suhaimi Bin Mohamad",
    role: "Panel Speaker",
    title: "title",
    src: Mohamad,
  },
  {
    name: "Datoʼ Dr. Abdul Halim Mohd. Hussin",
    role: "Panel Speaker",
    title: "title",
    src: Halim,
  },
  {
    name: "Dr. Robert Guibord",
    role: "Panel Speaker",
    title: "title",
    src: Guibord,
  },
  {
    name: "Rev. Elisha Satvinder",
    title: "title",
    src: Elisha,
  },
];

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

const Profile = styled.article`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const Pic = styled.img`
  width: 40vw;
  height: 40vw;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-height: 250px;
  max-width: 250px;
  margin-bottom: 1rem;
`;

const Name = styled.span`
  font-weight: bold;
  color: rgb(80, 80, 80);
  margin-bottom: 0.4rem;
  text-align: center;
`;

const Role = styled.span`
  font-weight: lighter;
  font-style: italic;
  color: rgb(50, 50, 50);
  margin-bottom: 0.4rem;
  text-align: center;
`;
const Title = styled.span`
  font-weight: lighter;
  font-style: italic;
  color: rgb(50, 50, 50);
  text-align: center;
  margin-bottom: 1rem;
`;

const profiles = data.map((speaker) => {
  return (
    <Profile key={speaker.name}>
      <Pic src={speaker.src} alt={speaker.name} />
      <Name>{speaker.name}</Name>
      {speaker.role ? <Role>{speaker.role}</Role> : null}
      <Title>{speaker.title}</Title>
      <Drawer primary>{speaker.biodata}</Drawer>
    </Profile>
  );
});

function Presenters() {
  return (
    <Container>
      <Heading>Presenters</Heading>
      {profiles}
    </Container>
  );
}

export default Presenters;
