// React Import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Asset Imports
import Routing from './utils/Routing';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Box length="100%" width="100%" display="flex" alignItems="center" justifyContent="center" padding={4} justify="center">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item>     
            <Routing />
          </Grid>
        </Grid>
      </Box> 
    </Router>   
  );
}

export default App;
