import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Francois One', sans-serif;
    font-size: 10px;
    height: 100vh;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    color: ${({ theme }) => theme.textColor?.main};
    background: ${({ theme }) => theme.backgroundColor};
    transition: background-color 200ms linear;
  }

  #__next {
    min-height: 100vh
  }

  button {
    background-color: transparent;
    border: none;
    padding: unset;
  }

  input[type=number] {
    -moz-appearance: textfield; /* Firefox */
  }

  input, textarea {
    /* Remove ios safari input inner shadow */
    appearance: none;
    font-family: 'Francois One', sans-serif;
    outline: none;
  }

  b, strong {
    font-weight: ${({ theme }) => theme.weight.boldWeight};
  }
`

export default GlobalStyle
