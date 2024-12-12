
import React from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import GroupIcon from '../../assests/Group 1116605015.svg'; // Adjust path as needed
import SearchBar from '../Molecules/SearchBar';
import theme from '../../theme';
import {useMediaQuery} from '@mui/material';
import MenuOpenIcon from '../../assests/menu_open.svg';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '100%',
  overflow:'hidden'
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px'
});

const LogoContainer = styled(Box)(({isMobile})=>({
  display: 'flex',
  alignItems: 'center',
  flex: isMobile ? '1' : '0',
  maxWidth:'100%'
}));

const LogoText = styled(Typography)({
  fontFamily: 'Michroma',
  fontSize: '30px',
  fontWeight: 400,
  color: '#01441D',
  textAlign: 'left',
  position: 'relative',
});

const FluctuationIcon = styled('img')({
  position: 'absolute',
  top: '-10px',
  left: '75px',
  height: '25px',
  width: '40px',
  marginLeft: '35px',
});

const CenteredContent = styled(Box)({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  width:'50%', 
  marginLeft:'20px',
  marginBottom:'20px'
});

const LoginContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  cursor: 'pointer',
});

const HeaderTemplate = ({ onLoginClick, showLoginButton,hideSearchBar }) => {
  const location = useLocation();
  const isCompanyPage = location.pathname.startsWith('/company');
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);

  return (
    <>
      <Global
        styles={css`
         @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
        `}
      />
      <StyledAppBar position="fixed">
        <StyledToolbar>
          {/* Logo Section */}
          <LogoContainer>
            <LogoText variant="h1">
              StockValue
            <FluctuationIcon src={GroupIcon} alt="Fluctuation Icon"/>
            </LogoText>
          </LogoContainer>

          {/* Centered Search Bar */}
          {isCompanyPage && !hideSearchBar && !isMobile && (
            <CenteredContent>
              <SearchBar/>
            </CenteredContent>
          )}

          {/* Right Aligned Login Section */}
          {showLoginButton && (
            <LoginContainer onClick={onLoginClick}>
              {isMobile ? (
                // Display menu_open.svg icon for mobile view
                <img src={MenuOpenIcon} alt="Menu Open Icon" style={{ height:'24px', width:'24px' }}/>
              ) : (
                // Display login button for non-mobile view
                <>
                  <IconButton>
                    <Person4OutlinedIcon style={{ height: '24px', width: '24px', color: '#000000' }} />
                  </IconButton>
                  <Typography style={{ fontSize: '20px', fontWeight: 500, color: '#000000' }}>
                    Login
                  </Typography>
                </>
              )}
            </LoginContainer>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};
export default HeaderTemplate;
