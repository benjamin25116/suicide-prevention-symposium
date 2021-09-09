import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`


main{
    font-family: Helvetica, Arial, sans-serif;
}

h1,
h2, 
h3 {
   font-family: Georgia, 'Times New Roman', Times, serif;
}

p {
    line-height: 1.25rem;
    color: rgb(90,90,90);
    margin-bottom:1rem;
}
`;

export default BaseStyle;
