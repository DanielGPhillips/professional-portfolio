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

// Asset Import
import VyceliumImage from '../assets/projects/vycelium-full.png';

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
                    <Box>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader title="Vycelium"/>
                            <CardMedia component="img" height="100%" fit="contain" image={VyceliumImage} alt="vycelium icon" />
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
