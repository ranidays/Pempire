import {createGlobalStyle} from "styled-components";

import b from "../assets/blue_background.png"

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${b});
    background-size: cover;
  }
`


