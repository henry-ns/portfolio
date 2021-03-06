import { createGlobalStyle } from 'styled-components';

import { opacify } from 'polished';

import Media from './media';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => opacify(-0.2, theme.primary.active)};
    border-radius: 2.5px;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.primary.active};
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.primary.active};
      color: ${({ theme }) => theme.secondary.text};
    }
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    font: 16px 'Raleway', sans-serif;
    font-weight: 300;

    background-color: ${({ theme }) => theme.primary.background};
    color: ${({ theme }) => theme.primary.text};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body.using-mouse {
    * {
      outline: none !important;
    }
  }

  #__gatsby {
    min-height: 100%;

    ${Media.hd`
      padding-left: 0px;
    `}
  }

  #gatsby-focus-wrapper {
    display: flex;

    width: 100%;
    height: 100%;
  }

  button {
    font: 16px 'Raleway', sans-serif;
    font-weight: 300;

    background: transparent;
    border: none;
  }

  a,
  button {
    color: ${({ theme }) => theme.primary.text};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }

  ${Media.bigPhone`
    html, body {
      font-size: 14px;
    }
  `}
`;
