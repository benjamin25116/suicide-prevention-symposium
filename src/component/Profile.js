import React from "react";
import styled from "styled-components";

const Container = styled.article`
	width: 100%;
	display: flex;
	flex-flow: column;
	align-items: center;
	margin-bottom: 2rem;
	border-bottom: ${(props) => (props.reverse ? "unset" : "1px solid rgb(220, 220, 220)")};

	@media(min-width: 768px){
		max-width: 700px;
		margin: 0 auto 2rem;
	}
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

	@media(min-width: 768px){
    width: 25vw;
	height: 25vw;
}
`;

const FirstLine = styled.span`
	font-weight: bold;
	font-size: 1.5rem;
	color: ${(props) => (props.reverse ? "white" : "rgb(50, 50, 50)")};
	margin-bottom: 0.4rem;
	text-align: center;
`;

const SecondLine = styled.span`
	font-weight: lighter;
	font-style: italic;
	color: ${(props) => (props.reverse ? "white" : "rgb(50, 50, 50)")};
	text-align: center;
	margin-bottom: 0.4rem;
`;

const ThirdLine = styled.span`
	padding-right: 0.35rem;
	font-weight: lighter;
	font-style: italic;
	color: ${(props) => (props.reverse ? "white" : "rgb(50, 50, 50)")};
	margin-bottom: 0.4rem;
	text-align: center;
`;

const ButtonDown = styled.a`
	display: block;
	color: ${(props) => (props.reverse ? "white" : "gray")};
	font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	font-weight: bold;
	font-size: 1rem;
	text-decoration: none;
	text-align: center;
	margin-bottom: 1rem;
`;

const ButtonUp = styled(ButtonDown)`
	transform: rotate(180deg);
`;

const ButtonWrapper = styled.div`
	display: flex;
`;

const Drawer = styled.div`
	& p {
		color: ${(props) => (props.reverse ? "white" : "rgb(50, 50, 50)")};
	}

	@media(min-width: 768px){
		max-width: 700px;
		margin: 0 auto;
	}
`;

class Profile extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
	}

	handleClick = () => {
		this.setState((prevState) => {
			return { isOpen: !prevState.isOpen };
		});
	};

	render() {
		
		// Wrapping the write up in paragraph tags.
		let content;
		if (typeof this.props.drawer === "object") {
			content = this.props.drawer.map((p) => {
				return <p key={p.length}>{p}</p>;
			});
		}
		if (typeof this.props.drawer === "string") {
			content = <p>{this.props.drawer}</p>
		}


		// Conditional rendering of drawer toggle button 
		let reverseButton;
		if (this.props.drawer){
			reverseButton = this.state.isOpen ? (
				<ButtonUp reverse onClick={this.handleClick}>
					▼
				</ButtonUp>
			) : (
				<ButtonDown reverse onClick={this.handleClick}>
					▼
				</ButtonDown>
			)
		}
		
		let button;
		if (this.props.drawer){
			button = this.state.isOpen ? (
				<ButtonUp  onClick={this.handleClick}>
					▼
				</ButtonUp>
			) : (
				<ButtonDown  onClick={this.handleClick}>
					▼
				</ButtonDown>
			)
		}
		

		// Conditional rendering of Profile component for "reverse" prop
		if (this.props.reverse) {
			return (
				<Container reverse key={this.props.firstLine}>
					{this.props.src && <Pic src={this.props.src} alt={this.props.name} />}
					{this.props.firstLine && (
						<FirstLine reverse>{this.props.firstLine}</FirstLine>
					)}
					{this.props.secondLine && (
						<SecondLine reverse>{this.props.secondLine}</SecondLine>
					)}
					<ButtonWrapper>
						<ThirdLine reverse>{this.props.thirdLine}</ThirdLine>
						{ this.state.isOpen ? null : reverseButton}
					</ButtonWrapper>
					{this.state.isOpen && (
						/*
          this line below checks to see if "content" is truthy. If it's
          empty, then it will merely take the content (presumably a 
            string from the parent) and wraps it in paragraph tags.
        */
						<Drawer reverse>
							{content ? content : <p>{this.props.drawer}</p>}
							<br />
							{this.state.isOpen && (
								<ButtonUp reverse onClick={this.handleClick}>
									▼
								</ButtonUp>
							)}
						</Drawer>
					)}
				</Container>
			);
		}

		// If no "reverse" prop, render this Profile component
		return (
			<Container key={this.props.firstLine}>
				{this.props.src && <Pic src={this.props.src} alt={this.props.name} />}
				{this.props.firstLine && <FirstLine>{this.props.firstLine}</FirstLine>}
				{this.props.secondLine && <SecondLine>{this.props.secondLine}</SecondLine>}
				<ButtonWrapper>
					<ThirdLine>{this.props.thirdLine}</ThirdLine>
					{this.state.isOpen ? null : button}
				</ButtonWrapper>
				{this.state.isOpen && (
					/*
          this line below checks to see if "content" is truthy. If it's
          empty, then it will merely take the content (presumably a 
            string from the parent) and wraps it in paragraph tags.
        */
					<Drawer>
						{content ? content : <p>{this.props.drawer}</p>}
						<br />
						{this.state.isOpen && (
							<ButtonUp onClick={this.handleClick}>▼</ButtonUp>
						)}
					</Drawer>
				)}
			</Container>
		);
	}
}

export default Profile;
