import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#9ccc65',
    },
    error: {
      main: '#ff80ab',
    },
  },
});

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

