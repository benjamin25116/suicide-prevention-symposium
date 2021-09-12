import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
`;

const Container = styled.section`
  padding: 4rem 2rem;
  /* max-width: 700px; */
  margin: 0 auto;

  @media (min-width: 568px) {
    max-width: 568px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

function Layout({ children, backgroundColor }) {
  return (
    <Background backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </Background>
  );
}

export default Layout;
