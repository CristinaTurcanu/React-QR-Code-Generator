import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import QrCodeIcon from '@mui/icons-material/QrCode';
import classes from '../style/Header.module.css'

const Header = () => {
    return (
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <QrCodeIcon />
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="left"
                noWrap
                sx={{ flex: 1 }}
            >
                <span className={classes.bolder}>My</span>QR<span className={classes.bolder}>Code</span>
            </Typography>
        </Toolbar>
);
}

export default Header;