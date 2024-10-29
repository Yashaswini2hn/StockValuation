

import React, { useState } from 'react'
// import theme from '../../theme';
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
// import Logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
// import HeaderProfile from '../Molecules/HeaderProfile';
// import GradientIconButton from '../Atoms/Buttons/GradientIconButton';

const StyledAppBar = styled(AppBar)({
    // backgroundColor: theme.palette.neutral.shade,
    // boxShadow: theme.palette.shadow.primary, // Add box shadow here
    borderRadius: '50px',
    // paddingRight: ' 0 20px !important',
    // margin: '24px 24px',
    right: 'auto',
    position: 'relative'
    // border: theme.palette.border.primary, // Add border color and width here 
});

const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    alignItems: 'center',
});

// Navigation items for desktop view
const NavMenu = styled('div')(({ isMobile }) => ({
    display: isMobile ? 'none' : 'flex',
    gap: '24px',
    alignItems: 'center',
}));

const NavItem = styled(Typography)({
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#000',
    cursor: 'pointer',
    '&:hover': {
        fontWeight: 'bold',
    },
});

// Hamburger Menu for Mobile
const MenuIconContainer = styled(IconButton)(({ isMobile }) => ({
    display: isMobile ? 'block' : 'none',
    color: '#000',
}));

// Drawer styles for mobile menu
const MobileDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        width: '250px',
    },
});

const HeaderTemplate = ({ sx }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Use to check if mobile or desktop

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <StyledAppBar sx={sx} >
            <StyledToolbar>
                <img
                    // src={Logo}
                    alt="Logo"
                    style={{ height: '40px', cursor: 'pointer' }}
                />

                {/* Navigation Menu for Desktop */}
                <NavMenu 
                // isMobile={isMobile}
                >
                    <NavItem>About</NavItem>
                    <NavItem>The Hatchery</NavItem>
                    <NavItem>Community</NavItem>
                    <NavItem>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <HeaderProfile
                                anchorEl={anchorEl}
                                handleProfileMenuOpen={handleProfileMenuOpen}
                                handleMenuClose={handleMenuClose}
                            /> */}
                        </div>
                    </NavItem>

                </NavMenu>

                {/* Hamburger Menu for Mobile */}
                <MenuIconContainer 
                // isMobile={isMobile} 
                onClick={toggleDrawer}>
                    <MenuIcon />
                </MenuIconContainer>

                {/* Drawer for Mobile Navigation */}
                <MobileDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
                    <List>
                        <ListItem button onClick={toggleDrawer}>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer}>
                            <ListItemText primary="The Hatchery" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer}>
                            <ListItemText primary="Community" />
                        </ListItem>
                        <ListItem>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {/* <HeaderProfile
                                    anchorEl={anchorEl}
                                    handleProfileMenuOpen={handleProfileMenuOpen}
                                    handleMenuClose={handleMenuClose}
                                /> */}
                            </div>
                        </ListItem>
                    </List>
                </MobileDrawer>

            </StyledToolbar>

        </StyledAppBar>

    )
}

export default HeaderTemplate
