import React from "react";
import styled from "styled-components";

import Heading from "./Heading";
import Layout from "./Layout";

const ContactForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-bottom: 2rem;

  label,
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    margin-bottom: 0.8rem;
    border-radius: 0.5rem;
  }
  input,
  textarea {
    border: none;
    padding: 0.8rem;
    background-color: #f9f4f1;

    grid-column-start: 2;
    grid-column-end: 3;
  }
  textarea {
    height: 4rem;
  }

  label {
    grid-column-start: 1;
    grid-column-end: 2;
    padding-right: 1rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem 5rem;

  border-radius: 2rem;
  background-color: black;
  border: 3px solid black;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;
  text-align: center;
  color: white;
  /* box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5); */

  &:hover {
    background-color: white;
    border: 3px solid black;
    color: black;
  }
  &:active {
    color: black;
    border: 3px solid black;
    background-color: white;
  }
`;

function Contact() {
  return (
    <Layout>
      <Heading>Contact</Heading>
      <ContactForm name="contact" method="POST" action="" data-netlify="true">
        <Grid>
          <input name="form-name" value="contact" type="hidden" />
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" />
          <label>Email</label>
          <input type="text" name="email" placeholder="Your Email" />
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Subject" />
          <label>Message</label>
          <textarea name="message" placeholder="Your message" />
        </Grid>

        <StyledButton reverse="true" type="submit">
          Send
        </StyledButton>
      </ContactForm>
    </Layout>
  );
}

export default Contact;
