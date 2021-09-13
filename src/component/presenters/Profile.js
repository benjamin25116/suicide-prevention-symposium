import React from "react";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
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
    if (this.state.isOpen) {
      return (
        <Link href={`/#${this.props.id}`} onClick={this.handleClick}>
          <ExpandedCard
            id={this.props.id}
            src={this.props.src}
            firstLine={this.props.firstLine}
            secondLine={this.props.secondLine}
            thirdLine={this.props.thirdLine}
            bio={this.props.bio}
          />
        </Link>
      );
    }
    return (
      <Link href={`/#${this.props.id}`} onClick={this.handleClick}>
        <Card
          id={this.props.id}
          src={this.props.src}
          firstLine={this.props.firstLine}
          secondLine={this.props.secondLine}
          thirdLine={this.props.thirdLine}
          bio={this.props.bio}
          presenter={this.props.presenter}
        />
      </Link>
    );
  }
}

export default Profile;
