// React Imports
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

// MUI Icon Import
import GitHubIcon from '@mui/icons-material/GitHub';
import WebsiteIcon from '@mui/icons-material/Language';

// Asset Import
import VyceliumImage from '../assets/projects/vycelium-full.png';
import EmeraldThumb from '../assets/projects/emerald_thumb_resized.png';
import Glenda from '../assets/projects/glenda-img.png';

export default function Projects() {
    
    return (
        <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
            <Grid container direction="column" spacing={4}>
                <Grid item textAlign="center">
                    <Typography variant="h2" color="primary" sx={{ textDecoration: "underline", textDecorationColor: "#b957ce"}}>
                        My Projects
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardHeader title="Vycelium"/>
                                <CardMedia component="img" height="100%" image={VyceliumImage} alt="vycelium icon" sx={{ objectFit: "contain" }}/>
                                <CardContent>
                                    <Typography variant="h6">
                                        Social Media App
                                    </Typography>
                                    <Typography variant="body">
                                        Focuses on user profile customization .
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton href="https://github.com/DanielGPhillips/vycelium">
                                        <GitHubIcon fontSize="medium" color="secondary" />    
                                    </IconButton>                                    
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardHeader title="Emerald Thumb" />
                                <CardMedia component="img" height="100%" image={EmeraldThumb} alt="Emerald Thumb icon" sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography variant="h6">
                                        Square Foot Garden Planning App  
                                    </Typography>
                                    <Typography variant="body">
                                        This was a group project. I was responsible for garden visualization, graphical assets, seeding the database, and aiding with javascript functionality. 
                                        <br />
                                        Use username dev2 and password to login in to a demo account.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton href="https://github.com/carterfm/How-Does-Your-Garden-Grow-">
                                        <GitHubIcon fontSize="medium" color="secondary" />    
                                    </IconButton>
                                    <IconButton href="https://serene-dusk-36944.herokuapp.com/">
                                        <WebsiteIcon fontSize="medium" color="secondary" />    
                                    </IconButton> 
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <CardHeader title="GLENDA" />
                                <CardMedia component="img" height="100%" image={Glenda} alt="Glenda screenshot" sx={{ objectFit: "contain" }} />
                                <CardContent>
                                    <Typography variant="h6">
                                        Meal and Grocery Planning App
                                    </Typography>
                                    <Typography variant="body">
                                        Allows users to search for recipes, assign recipes to a specific day, and compiles the weekly ingredients into a grocery list.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton href="https://github.com/kearac-hub/Project-one">
                                        <GitHubIcon fontSize="medium" color="secondary" /> 
                                    </IconButton>
                                    <IconButton href="https://kearac-hub.github.io/Project-one/">
                                        <WebsiteIcon fontSize="medium" color="secondary" />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
