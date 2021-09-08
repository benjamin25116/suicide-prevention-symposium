import React from "react";
import styled from "styled-components";

const Container = styled.div`
  & p {
    color: ${(props) => props.color};
  }
`;

const ButtonDown = styled.a`
  display: block;
  color: ${(props) => (props.primary ? "darkblue" : "white")};
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

class Drawer extends React.Component {
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
    /*
          this line below checks to see if props.children is an array from
          the Presenters component. If yes, it will take the strings and 
          map it to paragraphs.
        */
    let content;
    if (typeof this.props.children === "object") {
      content = this.props.children.map((paragraph) => {
        return <p>{paragraph}</p>;
      });
    }

    return (
      <Container color={this.props.color}>
        {this.state.isOpen ? (
          /*
          this line below checks to see if "content" is truthy. If it's
          empty, then it will merely take the content (presumably a 
            string from the parent) and wraps it in paragraph tags.
        */
          <div>{content ? content : <p>{this.props.children}</p>}</div>
        ) : null}
        {this.state.isOpen ? (
          <ButtonUp primary={this.props.primary} onClick={this.handleClick}>
            ▼
          </ButtonUp>
        ) : (
          <ButtonDown primary={this.props.primary} onClick={this.handleClick}>
            ▼
          </ButtonDown>
        )}
      </Container>
    );
  }
}

export default Drawer;
