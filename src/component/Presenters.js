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
		biodata: Bio.karim,
	},
	{
		name: "Ms. Larissa Ann Louis CLF",
		role: "Panel Speaker",
		title: "title",
		src: Louis,
		biodata: Bio.louis,
	},
	{
		name: "Ms. Petrina Shee",
		role: "Panel Speaker",
		title: "title",
		src: Petrina,
		biodata: Bio.petrina,
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
		biodata: Bio.halim,
	},
	{
		name: "Dr. Robert Guibord",
		role: "Panel Speaker",
		title: "title",
		src: Guibord,
		biodata: Bio.guibord,
	},
	{
		name: "Rev. Elisha Satvinder",
		title: "title",
		src: Elisha,
		biodata: Bio.elisha,
	},
];

const Container = styled.section`
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 3rem;
	border-top: 4px solid rgb(5, 0, 50);
	display: flex;
	flex-flow: column;
	align-items: center;
	max-width: 768px;
	margin: 0 auto;
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
		<Container>
			<Heading>Presenters</Heading>
			{data.map((speaker) => {
				return (
					<Profile
						key={speaker.name}
						src={speaker.src}
						firstLine={speaker.name}
						secondLine={speaker.role}
						thirdLine={speaker.title}
						drawer={speaker.biodata}
						
					/>
				);
			})}
		</Container>
	);
}

export default Presenters;
