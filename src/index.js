import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import '@fontsource/koulen/400.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let theme = createTheme ({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#43a047',
//     },
//     secondary: {
//       main: '#9ccc65',
//     },
//     error: {
//       main: '#ff80ab',
//     },
//   },
//   typography: {
//     fontFamily: 'koulen, cursive'
//   }
// });

let theme = createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: '#5994ce',
    },
    secondary: {
      main: '#5c58b6',
    },
    error: {
      main: '#ff0053',
    },
    text: {
      primary: '#e1f5fe',
    },
    background: {
      default: '#131629',
      paper: '#151c35',
    },
    divider: '#b957ce',
    info: {
      main: '#9575cd',
    },
  },
  typography: {
    fontFamily: 'koulen, cursive'
  },
});

theme = responsiveFontSizes(theme)

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>  
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

