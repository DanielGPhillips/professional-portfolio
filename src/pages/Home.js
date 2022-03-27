// React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
// Asset Import

export default function Home() {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Grid container direction="column" spacing={4}>
                <Grid item textAlign= "center">
                    <Typography variant="h2">
                        Hey there, I'm Danny.
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={4} padding={1}>
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
                        <Grid item xs={8}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="h3">
                                        I'm a full stack developer.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        My favoite technologies:
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container direction="column" spacing={1}>
                        <Typography variant="h3">
                            I'm a graphic artist.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
