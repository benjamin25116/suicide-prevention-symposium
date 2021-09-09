import React from "react";
import styled from "styled-components";

const Container = styled.article`
	background-color: white;
	display: flex;
	flex-flow: column;
	align-items: center;
	margin-bottom: 2rem;
	max-width: 250px;

	@media (min-width: 768px) {
		display: block;
		max-width: 100%;
	}

	


`;

const Pic = styled.img`
	object-fit: cover;
	margin-bottom: 1rem;
	max-height: 250px;

	@media (min-width: 768px) {
		float: left;
		margin: 0 2rem 1rem 0;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-bottom: 1px solid #e3e0de;
	padding: 1rem;
	
	@media (min-width: 768px) {
		padding: 2rem 0;
		margin-right: 2rem;
		width: unset;
	}
`;

const FirstLine = styled.span`
	width: 100%;
	font-weight: bold;
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: rgb(50, 50, 50);
	margin-bottom: 0.4rem;
`;

const SecondLine = styled.span`
	font-weight: lighter;
	font-size: 1.1rem;
	color: rgb(50, 50, 50);

	margin-bottom: 0.4rem;
`;

const ThirdLine = styled.span`
	padding-right: 0.35rem;
	font-weight: lighter;
	font-style: italic;
	font-size: 1.1rem;
	color: rgb(50, 50, 50);
	margin-bottom: 0.4rem;
`;

const Content = styled.div`
	padding: 1rem;

	@media (min-width: 768px) {
		max-width: 100%;
		padding: 2rem;
	}
`;

function ExpandedCard(props) {
	// Wrapping the write up in paragraph tags. TO ADD TO EXPANDED CARD
	let content;
	if (typeof props.bio === "object") {
		content = props.bio.map((p) => {
			return <p key={p.length}>{p}</p>;
		});
	}
	if (typeof props.bio === "string") {
		content = <p>{props.bio}</p>;
	}

	return (
		<Container>
			{props.src && <Pic src={props.src} alt={props.name} />}
			<Wrapper>
				{props.firstLine && <FirstLine>{props.firstLine}</FirstLine>}
				{props.secondLine && <SecondLine>{props.secondLine}</SecondLine>}
				{props.thirdLine && <ThirdLine>{props.thirdLine}</ThirdLine>}
			</Wrapper>
			{props.bio && <Content>{content}</Content>}
		</Container>
	);
}

export default ExpandedCard;
