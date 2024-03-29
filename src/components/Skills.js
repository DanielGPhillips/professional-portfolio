// React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import Paper from '@mui/material/Paper';
// MUI Icon Import



export default function Skills() {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h2" color="primary" sx={{ textDecoration: "underline", textDecorationColor: "#b957ce"}}> 
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container item direction="row" spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Grid container item direction="column" spacing={2} display="flex" alignItems="center" justifyContent="center">
                                <Grid item textAlign="center" mb={2}>
                                    <Typography variant="h5">Front End</Typography>
                                    <Divider color="primary"/>
                                </Grid>
                                <Paper>                               
                                    <Grid item>
                                        <Grid container item direction="row" spacing={2} padding={2}>
                                            <Grid item>
                                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="HTML" alt="HTML" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                            <Grid item>
                                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="4rem" height="4.5rem" margin={2}/>                                        
                                            </Grid>
                                            <Grid item>
                                            <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="4.5rem" height="4rem" margin={2}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container item direction="row" spacing={2} padding={2}>     
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="React" alt="React" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" title="Material UI" alt="Material UI" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>                                 
                            </Grid>                                              
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container item direction="column" spacing={2} display="flex" alignItems="center" justifyContent="center">
                                <Grid item textAlign="center" mb={2}>
                                    <Typography variant="h5">Back End</Typography>
                                    <Divider color="primary"/>
                                </Grid>
                                <Paper>
                                    <Grid item>
                                        <Grid container item direction="row" spacing={2} padding={2}>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                            <Grid item>                       
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" title="Express" alt="Express" width="4.5rem" height="4.5rem" margin={2} />
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" alt="GraphQL" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container item direction="row" spacing={2} padding={2}> 
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" title="Sequelize"  alt="Sequelize" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" title="MongoDB" alt="MongoDB" width="4.5rem" height="4.5rem" margin={2}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>                                
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container item direction="column" spacing={2} display="flex" alignItems="center" justifyContent="center">
                                <Grid item textAlign="center" mb={2}>
                                    <Typography variant="h5">Tools</Typography>
                                    <Divider color="primary" />
                                </Grid>
                                <Paper>                               
                                    <Grid item>
                                        <Grid container item direction="row" spacing={2} padding={2}>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="4.5rem" height="4.5rem" margin={4}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" title="VSCode" alt="VSCode" width="4.5rem" height="4.5rem" margin={4}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" title="NPM" alt="NPM" width="4.5rem" height="4.5rem" margin={4}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container item direction="row" spacing={2} padding={2}>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg" title="Inkscape" alt="Inkscape" width="4.5rem" height="4.5rem" margin={4}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Photoshop" alt="Photoshop" width="4.5rem" height="4.5rem" margin={4}/>
                                            </Grid>
                                            <Grid item>
                                                <Image src="https://img.icons8.com/nolan/64/clip-studio-paint.png" title="Clip Studio Paint" alt="Clip Studio Paint" width="4.5rem" height="4.5rem" margin={4}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>                                 
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

