import React from "react";
import styled from "styled-components";

const Head = styled.h2`
  font-size: 2.5rem;
  line-height: 3rem;
`;

function Heading({ children }) {
  return <Head>{children}</Head>;
}

export default Heading;
