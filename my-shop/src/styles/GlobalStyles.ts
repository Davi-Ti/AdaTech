import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
body {

   background: #f7f7f7;
}

body, button, input {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button {
   cursor: pointer;
   transition: filter 0.2s;
   &:hover {
      filter: brightness(1.2);
      transition: filter 0.2s;
   }
}
`;
