import React from 'react';
import HeaderTemplate from '../Components/Templates/HeaderTemplate';
import { styled } from '@mui/system';


const LayoutContainer = styled('div')({
  display: 'flex',
  height: '100vh',
});

const HeaderContainer = styled('div')({
  width: '100%',
  // height: '120px',
  //   backgroundColor: '#ff7f7f',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: 1000,
  padding: '20px 20px 0px 20px'
});

const Landingpage = () => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <HeaderTemplate/>
      </HeaderContainer>
    </LayoutContainer>
  );
};

export default Landingpage;
