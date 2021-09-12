import React from "react";
import styled from "styled-components";

import Layout from "./Layout";

const Information = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.4rem;
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

    :hover {
      color: burlywood;
    }
  }
`;

function Footer() {
  return (
    <Layout backgroundColor="#f9f4f1">
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
      <Information>
        "Suicide: The Silent Pandemic" is a multidisciplinary symposium on
        suicide prevention, organized by Dignity for Children Foundation in
        partnership with the Malaysian Association of Social Workers and the
        International Counseling Association of Malaysia.
      </Information>

      <Information>© 2021, Dignity for Children Foundation</Information>
    </Layout>
  );
}

export default Footer;
