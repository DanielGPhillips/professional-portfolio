// React Import
import React from 'react';

// MUI Component Import 
import Grid from '@mui/material/Grid';

// Asset Import
import Portrait from '../recent-me.jpg'


function About() {
    return(
        <Grid container direction="row">
            
                <Grid item> 
                    <img src={Portrait} alt="Portrait"></img>
                </Grid>
                <Grid item>
                    <h2 >About Me</h2>
                    <p>
                        Hey there! I am Daniel (Danny) Phillips and I am a web developer based in Washington.
                    </p>
                    <br></br>
                    <p>
                        I am an 11-year United States Navy veteran.  I worked in the nuclear power field for all 11 years, I chose to leave the Navy in 2020.  After some soul searching I chose to pursue a career in programming and web development. 
                        I enrolled in the University of Washington's Full Stack Web Developer Bootcamp and I've been having a blast learning and coding since!  In my free time I love to work on many various forms of art and have been getting really
                        into digital, so I love adding some custom graphic design elements into my work. 
                        <br></br>
                        <br></br>
                        When I am not home working on coding or art, I love being in the mountains and forests.  Camping, backpacking, and hiking are some of my favorite activities.
                    </p>
                </Grid>
            
        </Grid>
    );
}

export default About;