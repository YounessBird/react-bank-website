import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin :0;
     box-sizing:border-box;
     font-family: 'Encode Sans Expanded', sans-serif;
    :focus {
    outline: none !important;
    }
 // scroll-behavior:smooth;
}

`;
export default GlobalStyle;
