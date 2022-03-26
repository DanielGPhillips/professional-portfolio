import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';



function Resume() {
    return (
        <Box>
            <h1>Skills</h1>            
            <Box className='text-center'>
                <h1 className='text-white'>Resume</h1>
                <p className="text-white"> Feel free to download my resume to see my work and education history in the link below:</p>
                <Link to="/files/DanielPhillipsResume.pdf" target="_blank" download>Download Resume</Link>
            </Box>
        </Box>
    )
};

export default Resume;