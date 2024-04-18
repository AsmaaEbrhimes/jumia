

import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Box, LinearProgress } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import Person3Icon from '@mui/icons-material/Person3';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import "./Drawer.css"
import { Link } from 'react-router-dom';




export default function AnchorTemporaryDrawer({ showopenDrawer, closedrawer }) {
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if (open) {
            closedrawer();
        }
    };
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(true)}
            onKeyDown={() => toggleDrawer(true)}

        >
            <List style={{ padding: "10px", top: "10px" }}>
                <div className='flex flex_item' style={{ position: "relative", marginTop: "20px" }}>

                    <PaletteIcon style={{ color: "yellow" }} />
                    <Link style={{ textDecoration: 'none' }} to="/Dashbord">
                        <h5>Dashbord</h5>
                    </Link>

                </div>

                <div className='flex' style={{ position: "relative", marginTop: "20px" }}>
                    <PersonAddAltIcon style={{ color: "blueviolet" }} />
                    <Link style={{ textDecoration: 'none' }}to="/login">
                        <h5>login</h5>
                    </Link>
                </div>

                <div className='flex' style={{ position: "relative", marginTop: "20px" }}>
                    <Person3Icon style={{ color: "brown" }} />

                    <Link style={{ textDecoration: 'none' }}to="/">
                        <h5>Register</h5>
                    </Link>

                </div>

            </List>
            <Divider />
        </Box>
    );


    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (showopenDrawer && event.target.closest('.MuiDrawer-root') === null) {
                closedrawer();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showopenDrawer, closedrawer]);

    return (
        <div>
            <Drawer
                anchor="right"
                open={showopenDrawer}
                onClose={closedrawer}
            >
                {list()}
            </Drawer>
        </div>
    );
}
