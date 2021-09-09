import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: rgb(15, 15, 50);
	/* min-height: 200px; */
    padding: 2rem;
`;

const Copyright = styled.p`
max-width: 768px;
margin: 0 auto;
color: white;
`

const Links = styled.div`
display: flex;
flex-direction: column;
max-width: 768px;
margin: 1rem auto;
& a{
    text-decoration: none;
    color: white;
    margin-bottom: 1rem;

}`

function Footer() {
	return (
		<Container>
            <Links>
            <a href="https://dignityforchildren.org/">Dignity for Children Foundation</a>
            <a href="https://www.masw.org.my/">Malaysian Association of Social Workers</a>
            <a href="https://www.perkamainternational.org.my/">International Counseling Association of Malaysia</a>
            </Links>
			<Copyright>Copyright 2021, Dignity for Children Foundation.</Copyright>
		</Container>
	);
}

export default Footer;
