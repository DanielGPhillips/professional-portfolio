// React Import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Asset Imports
import Routing from './utils/Routing';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './components/Skills';
import ContactButton from './components/ContactButton';


function App() {
  return (
    <Router>
      <Box minLength="100vh" minwidth="100vw" display="flex" alignItems="center" justifyContent="center" padding={4} justify="center">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item>
            <Paper variant="outlined" padding={5}>
              <Home />
              <Skills />
            </Paper>
          </Grid>
          <Grid item>
            <ContactButton />
          </Grid>
        </Grid>
      </Box> 
    </Router>   
  );
}

export default App;
