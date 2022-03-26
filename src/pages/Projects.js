//React Import
import React from 'react';

// MUI Component Import
import Box from '@mui/material/Box';

// Asset Import
import Thumbnail from '../props/Thumbnail';
import EmeraldThumb from '../emerald-thumb-img.png';
import Glenda from '../glenda-img.png';
import Vycelium from '../vycelium-icon.png';
import MathImg from '../math-stock.jpeg';
import PlannerImg from '../planner-stock.jpg';
import QuizImg from '../quiz-stock.jpg';


export default function Projects() {
    return (
        <Box>
            <h1>Portfolio</h1>
            <Box>
                <Thumbnail
                gLink="https://github.com/DanielGPhillips/vycelium"
                dLink=""
                image= {Vycelium}
                title="Vycelium"
                tech="MERN Stack"
                description="A social platform for Virtual YouTubers and Artists.  I am the sole developer."
                />
                <Thumbnail
                    gLink="https://github.com/carterfm/How-Does-Your-Garden-Grow-"
                    dLink="https://serene-dusk-36944.herokuapp.com/"
                    image= {EmeraldThumb}
                    title="Emerald Thumb"
                    tech="Node/Sequelize/p5"
                    description="An app to make square foot gardening easier! I was the graphic artist and rendering of sample garden."
                /> 
                <Thumbnail
                    gLink="https://github.com/kearac-hub/Project-one"
                    dLink="https://kearac-hub.github.io/Project-one/"
                    image= {Glenda}
                    title="G.L.E.N.D.A"
                    tech="JavaScript/HTML/CSS"
                    description="A simple app designed to help with grocery and meal planning. I wrote 90%+ of the codebase for this project."
                />
            </Box>
            <Box>
                <Thumbnail
                gLink="https://github.com/DanielGPhillips/work-day-scheduler"
                dLink="https://danielgphillips.github.io/work-day-scheduler/"
                image= {PlannerImg}
                title="Work Day Planner"
                tech="JavaScript/HTML/CSS"
                description="A simple app to help plan a workday!"
                />
                <Thumbnail
                    gLink="https://gist.github.com/DanielGPhillips/03fcb171a2b09d382c7fe36582366bbf"
                    dLink="https://gist.github.com/DanielGPhillips/03fcb171a2b09d382c7fe36582366bbf"
                    image= {MathImg}
                    title="Regex: Matching a Hex Value Gist"
                    tech="Markdown"
                    description="A breakdown of a regular expression to match a specific hex value"
                /> 
                <Thumbnail
                    gLink="https://github.com/DanielGPhillips/javascript-fundamentals-quiz"
                    dLink="https://danielgphillips.github.io/javascript-fundamentals-quiz/"
                    image= {QuizImg}
                    title="Code Quiz"
                    tech="JavaScript/HTML/CSS"
                    description="A simple little quiz app with timer."
                />
            </Box>
        </Box>
    )
}

