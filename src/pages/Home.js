// React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'mui-image';
// MUI Icon Import
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                    fit="cover"
                    duration={1500}
                    easing="cubic-bezier(0.7, 0, 0.6, 1)"
                    shift="bottom"
                    distance="100px"
                    shiftDuration={450}
                    bgColor="inherit"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                Daniel Phillips
                            </Typography>
                        </Grid>
                        <Grid item xs={12}> 
                            <Typography variant="h4" color="primary" display="" padding={1}>
                                Full stack developer
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" padding={1}>
                                Innovative and Creative Solutions
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                -University of Washington Full Stack Web Development Bootcamp Graduate
                            </Typography>
                        </Grid>                        
                        <Grid item xs={12}>
                            <Stack direction="row" spacing={1}>
                                <IconButton href="https://github.com/DanielGPhillips">
                                    <GithubIcon fontSize="large" color="secondary"/>
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/daniel-g-phillips/">
                                    <LinkedInIcon fontSize="large" color="secondary"/>
                                </IconButton>
                                <IconButton variant="contained">
                                    <DownloadIcon fontSize="large" color="secondary"/>
                                    <Typography color="secondary" sx={{ }}>Resume</Typography>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>    
                </Grid>
            </Grid>
        </Box>
    )
}
