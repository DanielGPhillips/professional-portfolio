import React from 'react';
import Thumbnail from '../props/Thumbnail';
import EmeraldThumb from '../emerald-thumb-img.png'
import Glenda from '../glenda-img.png'
import Vycelium from '../vycelium-icon.png'
import '../App.css'

function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <Thumbnail
                link="https://serene-dusk-36944.herokuapp.com/"
                image= {EmeraldThumb}
                title="Emerald Thumb"
                tech="Node/Sequelize/p5"
            />
            <Thumbnail
                link="https://danielgphillips.github.io/glenda_project/"
                image= {Glenda}
                title="G.L.E.N.D.A"
                tech="JavaScript/HTML/CSS"
            />
            <Thumbnail
                link="https://github.com/DanielGPhillips/professional-portfolio"
                image= {Vycelium}
                title="Vycelium"
                tech="MERN Stack"
            />
        </div>
    )
}

export default Portfolio;