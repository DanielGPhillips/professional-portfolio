// React Import
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI Component Import
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Asset Import

const pages = ['About', 'Projects', 'Blog']

export default function Navbar() {
    return (
        <Paper elevation={0} sx={{ bottomBorder: "2px" }}>
            <Grid container direction="row" spacing={0} padding={2}>
                <Grid item md={3}>
                    <Button component={RouterLink} to="/">
                        Daniel Phillips
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <Grid container direction="row">
                        <Grid item> 
                            <Button component={RouterLink} to="/about">
                                About
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={RouterLink} to="/projects">
                                Projects
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={RouterLink} to="/blog">
                                Blog
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3}>
                    <Grid container direction="row">  
                        <Grid item>
                            <Button component={RouterLink} to="/contact">
                                Contact
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button component={RouterLink} to="/resume">
                                Resume
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}