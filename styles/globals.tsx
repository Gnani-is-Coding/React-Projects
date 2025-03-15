import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: "Barlow", sans-serif;
    background-color: #1E1E1E;
    color: #333;
    line-height: 1.6;
    height: 100%;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  .hero-heading {
    font-family: "Big Shoulders Inline", sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;
