// React Import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Asset Imports
import Routing from './utils/Routing';
import Navbar from './components/Navbar';
import ContactButton from './components/ContactButton';


function App() {
  return (
    <Router>
      <Box length="100%" width="100%" display="flex" alignItems="center" justifyContent="center" padding={4} justify="center">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item>
            {/* <Grid container direction="row">    
              <Grid item xs={0} sm={1} md={2} />
              <Grid item xs={12} sm={10} md={8}> */}
                <Routing />
              {/* </Grid>
              <Grid item xs={0} sm={1} md={2} />
            </Grid>  */}
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
