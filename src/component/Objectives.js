import React from "react";
import styled from "styled-components";

const Container = styled.section`
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 3rem;
	padding-bottom: 2rem;
	/* border-bottom: 4px solid rgb(5, 0, 50); */
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

const InnerContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	max-width: 41rem;
`;

const Card = styled.article`
	background-color: ${(props) => (props.reverse ? null : "white")};
	background-image: ${(props) =>
		props.reverse ? "linear-gradient(to bottom, rgb(30,30, 100), rgb(10,10,10))" : null};

	color: ${(props) => (props.reverse ? "white" : null)};

	padding: 2rem;
	border-radius: 1rem;
	border: 3px solid rgb(5, 0, 50);
	margin-bottom: 2rem;
	line-height: 1.25rem;
	max-width: 13rem;
`;



const data = [
	"To integrate suicide prevention into the work of all organizations and programs that provide services and support in the community.",
	"To develop resources that will help counter the prejudice, silence, and denial that can prevent individuals from seeking help.",
	"To support the delivery of suicide prevention activities that are culturally competent, safe, and available to individuals who may lack access to health care.",
	"To set future goals for the coordination of suicide prevention activities across multiple sectors and settings.",
];



function Objectives() {
	let cards = data.map((card) => {
		if (data.indexOf(card) % 2 === 0) {
			return <Card key={card.length}>{card}</Card>;
		}
		return (
			<Card reverse key={card.length}>
				{card}
			</Card>
		);
	});

	return (
		<Container>
			<Heading>Objective</Heading>
			<InnerContainer>{cards}</InnerContainer>
		</Container>
	);
}

export default Objectives;
