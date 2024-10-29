import React from 'react';
import { Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react'; 
import GroupIcon from '../../assests/Group 1116605015.svg'; // Fluctuation icon
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '10px 40px',
});

const StyledToolbar = styled(Toolbar)({
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
  marginLeft:'35px'
});

const LoginContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '130px',
  height: '52px',
  borderRadius: '26px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  gap: '8px',
});

const LoginText = styled(Typography)({
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24.2px',
  color: '#000000',
});

const HeaderTemplate = () => {
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

          {/* Login Section */}
          <LoginContainer>
            <IconButton>
            <Person4OutlinedIcon style={{ height: '24px', width: '24px', color: '#000000' }} />
            </IconButton>
            <LoginText>Login</LoginText>
          </LoginContainer>
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default HeaderTemplate;
