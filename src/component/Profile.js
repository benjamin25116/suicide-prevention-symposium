import React from "react";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";

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
        <div onClick={this.handleClick}>
          <ExpandedCard
            src={this.props.src}
            firstLine={this.props.firstLine}
            secondLine={this.props.secondLine}
            thirdLine={this.props.thirdLine}
            bio={this.props.bio}
          />
        </div>
      );
    }
    return (
      <div onClick={this.handleClick}>
        <Card
          src={this.props.src}
          firstLine={this.props.firstLine}
          secondLine={this.props.secondLine}
          thirdLine={this.props.thirdLine}
          bio={this.props.bio}
          presenter={this.props.presenter}
        />
      </div>
    );
  }
}

export default Profile;
