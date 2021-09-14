import React from "react";
import styled from "styled-components";
import SaiFun from "../images/saifun-contact.jpeg";

const StyledArticle = styled.article`
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Link = styled.span`
	text-decoration: underline;
	&:hover {
		color: burlywood;
		cursor: pointer;
	}
`;

const CallingCard = styled.img`
&:hover{
	-webkit-transform: scale(1.05, 1.05);
	transform: scale(1.05);
}
`

class Modal extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
		};
	}

	handleClick = () => {
		this.setState((prevState) => {
			return { showModal: !prevState.showModal };
		});
	};

	render() {
		const modal = this.state.showModal ? (
			<>
				<StyledArticle onClick={this.handleClick}>
					<CallingCard src={SaiFun} alt="Sai Fun calling card" />
				</StyledArticle>
				{this.props.children}
			</>
		) : (
			<Link onClick={this.handleClick}>{this.props.children}</Link>
		);
		return modal;
	}
}
export default Modal;
