// React Import
import React from 'react';

// Mui Component Import
import IconButton from '@mui/material/IconButton';
import MessageIcon from '@mui/icons-material/Message';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import Contact from '../pages/Contact';


export default function ContactButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleContactForm = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton 
            aria-label="contact me button"
            aria-controls="contact-form"
            aria-haspopup="true"
            onClick={handleContactForm} 
            size="large" 
            color="primary"
            padding={2}
            sx={{ 
            position: "fixed", 
            bottom: "0", 
            right: "0",
            }}
            >
                <MessageIcon sx={{ fontSize: "50px"}} /> 
            </IconButton>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose} 
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            >
                <Contact />
            </Popover>
        </div>
    )
}