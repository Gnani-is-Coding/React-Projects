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
    line-height: 1.2;
    height: 100%;
    color: #fff;
    /* overflow: hidden; */
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
    font-style: normal;
    font-size: 5rem;
    margin-top: 1rem;
    @media screen and (min-width: 768px) {
        font-size: 4rem;
    }
  }
`;
