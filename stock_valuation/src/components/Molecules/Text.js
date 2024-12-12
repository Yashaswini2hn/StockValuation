import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import theme from '../../theme'; 
import {useMediaQuery} from '@mui/material';

const HeadingText = styled(Typography)(({isMobile}) => ({
  fontFamily: 'Montserrat',
  fontSize:isMobile? '41px' :'42px',
  fontWeight: isMobile ? 'bold' : '700',
  textAlign: isMobile ? 'center': 'left',
  color: '#213967',
  width: isMobile? '480px' : '603px',
  height: isMobile? '93px' : '204px',
  marginBottom: '20px', // Adjust this for spacing between elements
  marginTop:isMobile ? '200px' : '90px',
  marginLeft: isMobile ? '-35px': '30px',
}));

const SubheadingText = styled(Typography)(({isMobile}) => ({
  fontFamily: 'Montserrat',
  fontSize:isMobile ? '25px' :'24px',
  fontWeight: 500,
  lineHeight: '41px',
  textAlign: isMobile ? 'center': 'left',
  color: '#00000080', // Adjusted to 50% opacity black
  width: isMobile ? '435px' : '629px', // Adjust width for mobile
  marginLeft: isMobile ? '-15px' : '35px',
  height: isMobile ? '57px': '82px',
  marginBottom: isMobile ? '50px':'auto',
  marginTop:isMobile ? '120px' : '10px'
}));

const Text = () => {
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  
  return (
    <>
    <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        `}
      />
    <Box display='flex' flexDirection='column'>
      <HeadingText isMobile={isMobile}>
        Unlock insights with India’s trusted stock market analysis tool.
      </HeadingText>
      <SubheadingText isMobile={isMobile}>
        Discover investing and trading opportunities with India's trusted stock analysis and screening tool
      </SubheadingText>
    </Box>
    </>
  );
};

export default Text;
