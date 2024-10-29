import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react'; 

// Styled component for the main heading text
const HeadingText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '42px',
  fontWeight: 600,
  lineHeight: '68px',
  textAlign: 'left',
  color: '#213967',
  width: '603px',
  height: '204px',
  marginBottom: '20px', // Adjust this for spacing between elements
  marginLeft:'65px',
  marginTop:'90px'
});

// Styled component for the subheading text
const SubheadingText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '41px',
  textAlign: 'left',
  color: '#00000080', // Adjusted to 50% opacity black
  width: '629px',
  height: '82px',
  marginLeft:'65px'
});

const Text = () => {
  return (
    <>
    <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        `}
      />
    <Box>
      <HeadingText>
        Unlock insights with India’s trusted stock market analysis tool.
      </HeadingText>
      <SubheadingText>
        Discover investing and trading opportunities with India's trusted stock analysis and screening tool
      </SubheadingText>
    </Box>
    </>
  );
};

export default Text;
