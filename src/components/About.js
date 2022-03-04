import React from 'react';
import '../App.css'
import Portrait from '../recent-me.jpg'

function About() {
    return(
        <section>
            <div>
                <img src={Portrait} alt="Portrait"></img>
                <h1>About Me</h1>
                <p>This is a short bio that I have to figure out how to write about myself so that employers can get to know me a little bit.  Longest run on sentence ever just before this.</p>
            </div>
        </section>
    );
}

export default About;