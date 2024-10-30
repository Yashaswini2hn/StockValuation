// HeaderTemplate.js
import React from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import GroupIcon from '../../assests/Group 1116605015.svg'; // Adjust path as needed
import SearchBar from '../Molecules/SearchBar';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '10px 40px',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const LogoText = styled(Typography)({
  fontFamily: 'Michroma, sans-serif',
  fontSize: '30px',
  fontWeight: 400,
  lineHeight: '42.66px',
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

const SearchInputContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '300px',
  borderRadius: '20px',
  border: '1px solid #D6D6D6',
  paddingLeft: '10px',
  paddingRight: '10px',
});

const SearchInput = styled(InputBase)({
  flexGrow: 1,
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '16px',
});

const LoginContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  cursor: 'pointer',
});

const HeaderTemplate = ({ onLoginClick, showLoginButton }) => {
  const location = useLocation();
  const isCompanyPage = location.pathname.startsWith('/company');

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
        `}
      />
      <StyledAppBar position="static">
        <StyledToolbar>
          {/* Logo Section */}
          <LogoContainer>
            <LogoText variant="h1">
              StockValue
              <FluctuationIcon src={GroupIcon} alt="Fluctuation Icon" />
            </LogoText>
          </LogoContainer>

          {/* Centered Search Bar */}
          {isCompanyPage && (
           <SearchBar/>
          )}

          {/* Right Aligned Login Section */}
          {showLoginButton && (
            <LoginContainer onClick={onLoginClick}>
              <IconButton>
                <Person4OutlinedIcon style={{ height: '24px', width: '24px', color: '#000000' }} />
              </IconButton>
              <Typography style={{ fontSize: '20px', fontWeight: 500, color: '#000000' }}>
                Login
              </Typography>
            </LoginContainer>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default HeaderTemplate;
