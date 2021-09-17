import React from "react";
import styled from "styled-components";

import Heading from "./Heading";
import Layout from "./Layout";
import Button from "./Button";

const Body = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${(props) => props.large && "1.5rem"};
  line-height: ${(props) => props.large && "2rem"};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Charges() {
  return (
    <Layout backgroundColor="#f9f4f1">
      <Heading>Charges</Heading>
      <Wrapper>
        <Body large>
          <b>RM 50</b> registration fee <br />
          <b>RM 150</b> for certification and <br />
          <b>2 CPD points</b> for registered counselors
        </Body>
        <Body>
          <b>Group discount</b> available for organizations: <br />7
          participants and above are eligible for group discount of RM 30 per
          person (not applicable for certification and CPD points).{" "}
          <b>Scholarships</b> are available.
        </Body>
        <Body>
          Registration closes on <b>23rd September, 2021</b> (Thursday) at 5PM.
        </Body>
        <Button
          reverse="true"
          to="https://docs.google.com/forms/d/1Gor9GLP3zl1U6E511VELNswsavxRGCGGKBmZ-IP_Jy0/formrestricted?edit_requested=true"
        >
          Register now
        </Button>
      </Wrapper>
    </Layout>
  );
}

export default Charges;
