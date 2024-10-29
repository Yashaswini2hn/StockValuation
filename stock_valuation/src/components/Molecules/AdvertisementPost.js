import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

// Styled container for the advertisement post background
const AdContainer = styled(Box)({
  width: '338px',
  height: '421px',
  borderRadius: '10px 0px 0px 0px', // Rounded top-left corner only
  backgroundColor: '#D9D9D9CC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// Styled text for "Advertisement Post"
const AdText = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '42px',
  color: '#005BA1',
  textAlign: 'center',
  textDecoration: 'underline', // Adds underline to the text
});

const AdvertisementPost = () => {
  return (
    <AdContainer>
      <AdText>Advertisement Post</AdText>
    </AdContainer>
  );
};

export default AdvertisementPost;
