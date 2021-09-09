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
		max-width: 350px;
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
