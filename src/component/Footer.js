import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: #e3e0de; */
  background-color: #f9f4f1;
  /* min-height: 200px; */
  padding: 4rem 0;
`;

const Copyright = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.9rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 1rem auto;
  & a {
    font-size: 0.9rem;
    text-align: center;
    text-decoration: none;
    color: inherit;
    margin-bottom: 0.5rem;
  }
`;

function Footer() {
  return (
    <Container>
      <Copyright>
        "Suicide: The Silent Pandemic" is a multidisciplinary symposium on
        suicide prevention, <br />
        organised by Dignity for Children Foundation in partnership with <br />
        the Malaysian Association of Social Workers and the International
        Counselling Association of Malaysia.
      </Copyright>
      <Links>
        <a href="https://dignityforchildren.org/">
          Dignity for Children Foundation
        </a>
        <a href="https://www.masw.org.my/">
          Malaysian Association of Social Workers
        </a>
        <a href="https://www.perkamainternational.org.my/">
          International Counseling Association of Malaysia
        </a>
      </Links>
    </Container>
  );
}

export default Footer;
