// React Import
import React from 'react';

// MUI Component Import
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// Asset Import

const pages = ['About', 'Projects', 'Blog']

export default function Navbar() {
    return (
        <Grid container direction="row">
            <Grid item>
                Daniel Phillips
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item> 
                        <Button>About</Button>
                    </Grid>
                    <Grid item>
                        <Button>Projects</Button>
                    </Grid>
                    <Grid item>
                        <Button>Blog</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row">  
                    <Grid item>
                        <Button>Contact</Button>
                    </Grid>
                    <Grid item>
                        <Button>Resume</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}