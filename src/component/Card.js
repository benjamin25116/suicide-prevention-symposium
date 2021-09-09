import React from "react";
import styled from "styled-components";

const Container = styled.article`
	background-color: white;
	display: flex;
	flex-flow: column;
	align-items: center;
	margin: 0 1rem 2rem 1rem;
	max-width: 250px;
	min-height: 377px;
	padding-bottom: 1rem;
	box-shadow: 8px 8px gray;
`;

const Pic = styled.img`
	object-fit: cover;
	margin-bottom: 1rem;
	max-height: 250px;
`;

const FirstLine = styled.span`
	width: 100%;
	font-weight: bold;
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: rgb(50, 50, 50);
	margin-bottom: 0.4rem;
	text-align: center;
`;

const SecondLine = styled.span`
	font-weight: lighter;
	font-size: 1.1rem;
	color: rgb(50, 50, 50);
	text-align: center;
	margin-bottom: 0.4rem;
`;

const ThirdLine = styled.span`
	padding-right: 0.35rem;
	font-weight: lighter;
	font-style: italic;
	font-size: 1.1rem;
	color: rgb(50, 50, 50);
	text-align: center;
`;

function Card(props) {
	return (
		<Container>
			{props.src && <Pic src={props.src} alt={props.name} />}
			{props.firstLine && <FirstLine>{props.firstLine}</FirstLine>}
			{props.secondLine && <SecondLine>{props.secondLine}</SecondLine>}
			{props.thirdLine && <ThirdLine>{props.thirdLine}</ThirdLine>}
		</Container>
	);
}

export default Card;
