import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &:hover {

    }
  }

  body {
    transition: 0.5s;
    background: #b9d3ff;
    font-family: 'Rubik', sans-serif;

  }

  svg {

    &:hover {

    }
  }
`