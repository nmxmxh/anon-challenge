"use client";

import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
:root {
  --width: 85%;
  --max-width: 95%;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;


  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
  }
}

* {
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  border: 0;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
  outline: none;
  
  scroll-behavior: smooth !important;
  /* https://github.com/vercel/next.js/issues/51721 */

  user-select: none;
  position: relative;
}

a,
button {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
}


html {
  --full-screen-w: 100svw;
  --full-screen-h: 100svh;
}

div {
  box-sizing: border-box;
}

@media (orientation: landscape) {
  html {
    --full-screen-w: 100svh;
    --full-screen-h: 100svw;
  }

  #root {
    flex-direction: row;
  }
}
`;

export default GlobalStyles;

//*  Documentation Source: https://www.cyishere.dev/blog/design-system-with-styled-components
