// React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'mui-image';
// MUI Icon Import
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BuildIcon from '@mui/icons-material/Build';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DownloadIcon from '@mui/icons-material/Download';
// Asset Import

export default function Home() {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={0} sm={0} md={6} padding={1}>
                    <Image 
                    src="https://nefariousreviews.files.wordpress.com/2019/08/no-game-no-life-siblings.jpg?w=810"
                    height="100%"
                    width="100%"
                    fit="contain"
                    duration={1500}
                    easing="cubic-bezier(0.7, 0, 0.6, 1)"
                    shift="bottom"
                    distance="100px"
                    shiftDuration={450}
                    bgColor="inherit"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="h1">
                            Daniel Phillips
                        </Typography>
                        <Typography display="inline-block" variant="h3" color="primary">
                            Full stack developer | Graphic Artist
                        </Typography>
                        <Typography variant="h6">
                            Creative Solutions
                        </Typography>
                        <Typography>
                            -University of Washington Full Stack Web Development Bootcamp Graduate
                        </Typography>
                        <Grid item container direction="row" spacing={1} textAlign="center">
                            <Grid item xs={12} md={3}>
                                <Typography sx={{ textDecoration: "underline", textDecorationColor: "#43a047" }}>
                                    Find Me On
                                </Typography>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                    <IconButton href="https://github.com/DanielGPhillips">
                                        <GithubIcon fontSize="large" color="secondary"/>
                                    </IconButton>
                                    <IconButton href="https://www.linkedin.com/in/daniel-g-phillips/">
                                        <LinkedInIcon fontSize="large" color="secondary"/>
                                    </IconButton>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography sx={{ textDecoration: "underline", textDecorationColor: "#43a047" }}>
                                    My work
                                </Typography>                                
                                <IconButton>
                                    <BuildIcon fontSize="large" color="secondary"/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography sx={{ textDecoration: "underline", textDecorationColor: "#43a047" }}>
                                    About me
                                </Typography>                                
                                <IconButton>
                                    <AccountBoxIcon fontSize="large" color="secondary"/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Typography sx={{ textDecoration: "underline", textDecorationColor: "#43a047" }}>
                                    Download Resume
                                </Typography>                                
                                <IconButton>
                                    <DownloadIcon fontSize="large" color="secondary"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Stack>    
                </Grid>
            </Grid>
        </Box>
    )
}
