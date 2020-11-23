import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto";
}

body {
    margin: 0;
    font-size: 112.5%;
    background-color: var(--dark-main);
}

:root {
    --red-main: #A00A0C;
    --dark-main: #222831;
    --silver-main: #BFBFBF;
}
`