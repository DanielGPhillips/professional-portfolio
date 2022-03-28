// React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// MUI Icon Import


export default function Skills() {
    return (
        <Box>
            <Typography>
                Skills
            </Typography>
            <Grid container>
                <Grid item>
                    Front End
                    <Stack>
                        HTML
                        <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>
                        CSS
                        <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>
                        JavaScript
                        <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>
                        React
                        <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>
                        Redux
                        <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>
                        Material UI
                        <img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-original.svg" title="Material UI" alt="Material UI" width="40" height="40"/>
                    </Stack>
                </Grid>
                <Grid item>
                    Back End
                    <Stack>
                        NodeJS
                        <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>
                        Express
                        <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" title="Express" alt="Express" width="40" height="40"/>
                        MongoDB/Mongoose
                        <img src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-plain-wordmark.svg" title="MongoDB" alt="MongoDB" width="40" height="40"/>
                        MySQL/Sequelize
                        <img src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" width="40" height="40"/>
                        <img src="https://github.com/devicons/devicon/blob/master/icons/sequelize/sequelize-original.svg" title="Sequelize"  alt="Sequelize" width="40" height="40"/>
                        GraphQL
                        <img src="https://github.com/devicons/devicon/blob/master/icons/graphql/graphql-plain-wordmark.svg" title="GraphQL" alt="GraphQL" width="40" height="40"/>
                    </Stack>
                </Grid>
                <Grid item>
                    Tools
                    <Stack>
                    Git
                    <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="40" height="40"/>
                    VSCode
                    Photoshop
                    <img src="https://github.com/devicons/devicon/blob/master/icons/photoshop/photoshop-plain.svg" title="Photoshop" alt="Git" width="40" height="40"/>
                    Clip Studio Paint
                    <img src="data:image/png;base64,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"/>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}