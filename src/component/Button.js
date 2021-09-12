import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  padding: 1rem 3.5rem;
  border-radius: 2rem;
  background-color: ${(props) => (props.reverse ? "black " : "white")};
  border: 3px solid ${(props) => (props.reverse ? "black " : "white")};
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  color: ${(props) => (props.reverse ? "white " : "black")};
  /* box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5); */

  &:hover {
    background-color: ${(props) => (props.reverse ? "white " : "black")};
    border: 3px solid ${(props) => (props.reverse ? "black " : "white")};
    color: ${(props) => (props.reverse ? "black " : "white")};
  }
  &:active {
    color: black;
    border: 3px solid black;
    background-color: white;
  }
`;

function Button({ children, reverse }) {
  return <StyledButton reverse={reverse && reverse}>{children}</StyledButton>;
}

export default Button;
