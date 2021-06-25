import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GameContextProvider from './providers/gameProvider';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --darkBlue: hsl(217, 42%, 34%);
    --lightBlue: hsl(186, 100%, 40%);
    --white: hsl(0, 0%, 95%);
    --black: hsl(0, 0%, 13%);
    --gray: hsl(0, 0%, 80%);
    --darkGray: hsl(0, 0%, 60%);
    --darkerGray: hsl(0,0%, 40%);

    --baseBg: var(--white);
    --baseText: var(--darkBlue);
    
    --baseFont: 'Nunito', sans-serif;

    --shadowBg: hsl(0, 0%, 85%);
    --highlightBg: hsl(0, 0%, 100%);
  }

  body {
    background: var(--baseBg);
    color: var(--baseText);
    font-family: var(--baseFont);
    font-size: 18px;
  }

  h1 {
    letter-spacing: 1px;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0;
  }
  
  p {
    line-height: 1.6;
  }

  button {
    padding: 0;
    background: none;
    font-family: inherit;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
