import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './global';
import { Main } from './containers';

ReactDOM.render(
  <>
    <Normalize />
    <GlobalStyles />
    <Main />
  </>,
  document.getElementById('root')
);
