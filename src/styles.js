import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
  }
  .main-text {
      color: ${(props) => props.theme.main};
  }
  `;
