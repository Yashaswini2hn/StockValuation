import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import HeartIcon from '../../assests/favorite.svg';
import Login from './Login';
import theme from '../../theme';

const StoriesContainer = styled(Box)(({ isMobile }) => ({
  padding: '20px',
  width: '680px',
  maxWidth: isMobile ? '700px' : 'unset',
  backgroundColor: '#F9F9F9',
  borderRadius: '8px',
  marginBottom: isMobile ? '0' : '20px',
  marginTop: '-180px',
  marginLeft: '5px',
}));

const BlurredContent = styled(Box)(({ isMobile }) => ({
  filter: 'blur(4px)',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: isMobile ? '-40px' : '-10px',
}));

const Content = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#333',
  marginBottom: '5px',
});

const LoginButton = styled(Button)(({ isMobile }) => ({
  backgroundColor: '#005BA1',
  color: '#FFFFFF',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  position: 'absolute',
  top: isMobile ? '810px' : '690px',
  left: isMobile ? '160px' : '400px',
  width: '150px',
  zIndex: 1,
}));

const HeartIconImage = styled('img')({
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  position: 'absolute',
  top: '15px',
  right: '15px',
});

const ReadMoreButton = styled(Typography)({
  color: '#005BA1',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: '10px',
  alignSelf: 'flex-start',
});

const Stories = ({ isBlurred }) => {
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StoriesContainer isMobile={isMobile}>
      <Typography
        isMobile={isMobile}
        variant="h6"
        style={{
          fontWeight: 'bold',
          fontSize: isMobile ? '44px' : '24px',
          fontFamily: 'Poppins',
          whiteSpace: 'nowrap',
          marginLeft: isMobile ? '-35px' : '0',
        }}
      >
        Stories (Subject Name)
      </Typography>
      <LoginButton isMobile={isMobile} variant="contained" onClick={handleOpen}>
        Login to Unlock
      </LoginButton>
      {isBlurred ? (
        <BlurredContent isMobile={isMobile}>
          <Content>
            Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
          </Content>
          <Content>
            Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
          </Content>
          <Content>
            Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
          </Content>
          <ReadMoreButton>Read More</ReadMoreButton>
        </BlurredContent>
      ) : null}
      <HeartIconImage src={HeartIcon} alt="Like" />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          },
        }}
      >
        <Login />
      </Dialog>
    </StoriesContainer>
  );
};

export default Stories;
