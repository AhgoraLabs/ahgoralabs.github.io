import { createGlobalStyle } from "styled-components";
import roboto from "../fonts/Roboto/Roboto-Regular.ttf";

export default createGlobalStyle`

@font-face {
     font-family: 'Roboto';
     src: url('../fonts/Roboto/Roboto-Regular.ttf') format('truetype');
     font-weight: 400;
     font-style: normal;
   }

     * {
          margin:0;
          padding:0;
          outline: 0;
          box-sizing: border-box;  
          font-family: 'Roboto', sans-serif;
         
     }
     #root {
          margin: 0 auto;
     }
`;
