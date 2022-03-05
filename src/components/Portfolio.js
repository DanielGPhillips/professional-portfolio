import React from 'react';
import Thumbnail from '../props/Thumbnail';
import EmeraldThumb from '../emerald-thumb-img.png'
import Glenda from '../glenda-img.png'
import Vycelium from '../vycelium-icon.png'
import { Container, CardGroup,  } from 'react-bootstrap';
import '../App.css'

function Portfolio() {
    return (
        <Container bg="dark" text="white" fluid>
            <h1 className="text-center text-white">Portfolio</h1>
            <CardGroup>
                <Thumbnail
                link="https://github.com/DanielGPhillips/professional-portfolio"
                linkType="See Github Repo"
                image= {Vycelium}
                title="Vycelium"
                tech="MERN Stack"
                description="A social platform for Virtual YouTubers and Artists.  I am the sole developer."
                />
                <Thumbnail
                    link="https://serene-dusk-36944.herokuapp.com/"
                    linkType="See Deployed Project"
                    image= {EmeraldThumb}
                    title="Emerald Thumb"
                    tech="Node/Sequelize/p5"
                    description="An app to make square foot gardening easier! I was the graphic artist and rendering of sample garden."
                /> 
                <Thumbnail
                    link="https://danielgphillips.github.io/glenda_project/"
                    linkType="See Deployed Project"
                    image= {Glenda}
                    title="G.L.E.N.D.A"
                    tech="JavaScript/HTML/CSS"
                    description="A simple app designed to help with grocery and meal planning. I wrote 90%+ of the codebase for this project."
                /> 
            </CardGroup>
        </Container>
    )
}

export default Portfolio;