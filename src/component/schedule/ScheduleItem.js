import React from "react";
import styled from "styled-components";

const Card = styled.article`
	/* border: 1px solid green; */
	margin-bottom: ${(props) => (props.lastItem ? "2rem" : "0.5rem")};
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FirstLine = styled.span`
	width: 100%;
	font-weight: bold;
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 1.5rem;
	line-height: 1.5rem;
	color: rgb(50, 50, 50);
	margin-bottom: 0.8rem;
`;

const SecondLine = styled.span`
	font-weight: bold;
	font-size: 1.2rem;
	color: rgb(50, 50, 50);
	margin-bottom: 0.8rem;
`;

const ThirdLine = styled.span`
	font-size: 1.2rem;
	line-height: 1.35rem;
	color: rgb(50, 50, 50);
	margin-bottom: 0.8rem;
	/* border: 1px solid black; */
`;

const Writeup = styled.div`
  max-width: 1024px;
  z-index: -10;
  /* border: 1px solid green; */
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: ${(props) => (props.show ? "100%" : "0px")};
  
	p {
    -webkit-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out;
		opacity: ${(props) => (props.show ? "1" : "0")};
    padding: 0 2rem 2rem 2rem;
	}
`;

const Arrow = styled.span`
	padding: 0 0.4rem;
	display: inline-block;
	font-size: 2rem;
	color: burlywood;
	line-height: 0.5rem;
	transform: ${(props) => props.clicked && "rotate(180deg) translateY(-13px)"};
	/* border: 1px solid red; */
`;

const Wrapper = styled.div`
	display: flex;
	:hover {
		span {
			color: ${(props) => props.clickable && "burlywood"};
			cursor: ${(props) => props.clickable && "pointer"};
		}
	}
`;

class ScheduleItem extends React.Component {
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
		return (
			<Card lastItem={this.props.lastItem}>
				{this.props.time && <FirstLine>{this.props.time}</FirstLine>}
				{this.props.activity && <SecondLine>{this.props.activity}</SecondLine>}
				<Wrapper
					clickable={this.props.writeup ? true : false}
					onClick={this.handleClick}
				>
					{this.props.speaker && (
						<ThirdLine>
							{this.props.speaker}
							{this.props.writeup && (
								<Arrow clicked={this.state.isOpen}>⌵</Arrow>
							)}
						</ThirdLine>
					)}
				</Wrapper>
				{this.props.writeup && (
					<Writeup show={this.state.isOpen ? true : false}>
						<p>{this.props.writeup}</p>
					</Writeup>
				)}
			</Card>
		);
	}
}

export default ScheduleItem;
