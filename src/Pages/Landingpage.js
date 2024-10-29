import React, { useState,useEffect } from 'react';
import HeaderTemplate from '../Components/Templates/HeaderTemplate';
import { styled } from '@mui/system';

const HeaderContainer = styled('div')({
  width: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: 1000,
  padding: '20px 20px 0px 20px',
});

const Landingpage = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}> 
        <HeaderTemplate /> 
    </div>
  );
};

export default Landingpage;
