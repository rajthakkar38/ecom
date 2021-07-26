import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


    body {
    font-family: "Open Sans Condensed";
    padding: 20px 60px;
    
        @media screen and (max-width: 800px)
        {
            padding:2px;
        }
    }
    a {
    text-decoration: none;
    color: black;
    }
`;
