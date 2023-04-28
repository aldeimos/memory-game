import { createGlobalStyle } from 'styled-components';
import FormularBoldWoff from './assets/fonts/Formular-Bold.woff2';
import FormularBoldWoff2 from './assets/fonts/Formular-Bold.woff';
import FormularMediumWoff from './assets/fonts/Formular-Medium.woff';
import FormularMediumWoff2 from './assets/fonts/Formular-Medium.woff2';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Formular';
    font-style: normal;
    font-weight: 700;
    src:
      url('${FormularBoldWoff2}') format('woff2'),
      url('${FormularBoldWoff}') format('woff'),
  }

  @font-face {
    font-family: 'Formular';
    font-style: normal;
    font-weight: 500;
    src:
      url('${FormularMediumWoff2}') format('woff2'),
      url('${FormularMediumWoff}') format('woff');
  }

  html, body {
    font-family: 'Formular', sans-serif;
  }
`;
