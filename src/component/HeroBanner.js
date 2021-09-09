import React from "react";
import styled from "styled-components";
import image from "../images/hero-background.png";
import dignity from "../images/logo/dignity-logo.png";
import masw from "../images/logo/masw-logo.png";
import perkama from "../images/logo/perkama-logo.png";

const Banner = styled.section`
	background-image: url(${image});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100%;
	padding: 2rem;
	margin-bottom: 2rem;
	box-shadow: 0px 3px 25px black;
	@media (min-width: 768px) {
		height: 100vh;
		max-height: 500px;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		width: 100vw;
		max-width: 700px;
		margin: 0 auto;
		height: 100%;
	}
`;

const Heading = styled.h1`
	color: white;
	font-size: 2.5rem;
	font-weight: bold;
	text-transform: uppercase;
	line-height: 3rem;
	margin-bottom: 2rem;
`;

const SubHeading = styled.p`
	color: white;
	font-size: 1rem;
	font-weight: bold;
	line-height: 1.25rem;
	margin-bottom: 1rem;
	max-width: 400px;
`;

const Emphasis = styled.span`
	font-weight: 100;
`;

const Dignity = styled.img`
	height: 20px;
	padding-right: 1rem;
	margin-bottom: 0.25rem;
`;
const Masw = styled.img`
	height: 35px;
	padding-right: 1rem;
	margin-bottom: 0.25rem;
`;
const Perkama = styled.img`
	height: 30px;
	margin-bottom: 0.25rem;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 3rem;
`;

const Button = styled.a`
	display: block;
  max-width: 9rem;
  padding: 1rem 3rem;
	border-radius: 2rem;
	background-color: white;
	font-weight: bold;
	text-decoration: none;
	text-align: center;
	color: rgb(5, 0, 50);
	box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;

const extraMarginBottom = {
	marginBottom: "3rem",
};

function HomeBanner() {
	return (
		<Banner>
			<Wrapper>
				<Heading>
					Suicide:
					<br />
					the <Emphasis>{`Silent `} </Emphasis>
					Pandemic
				</Heading>
				<SubHeading>
					Interdisciplinary Talks and Open&nbsp;Dialogue
					on&nbsp;Suicide&nbsp;Prevention
				</SubHeading>
				<SubHeading style={extraMarginBottom}>
					25th September 2021 • 1pm-7pm
				</SubHeading>
				<LogoContainer>
					<Dignity src={dignity} alt="Dignity for Children Foundation logo" />
					<Masw src={masw} alt="MASW logo" />
					<Perkama src={perkama} alt="PERKAMA logo" />
				</LogoContainer>
				<Button href="">Register now</Button>
			</Wrapper>
		</Banner>
	);
}

export default HomeBanner;
