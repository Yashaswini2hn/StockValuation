import React from 'react'
import HeaderTemplate from '../components/Templates/HeaderTemplate'
import Text from '../components/Molecules/Text'
import { styled } from '@mui/system';
import SearchBar from '../components/Molecules/SearchBar';
import AdvertisementPost from '../components/Molecules/AdvertisementPost';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';


const LayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  padding: '40px 36px', // Adjust to position layout as required
});

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px', // Adjust to create spacing between text and search bar
  width: '100%', // Width for the text and search bar section
});


const LandingPage = () => {
  return (
   
    <ContentContainer>
        <HeaderTemplate/>
        <Text/>
        <SearchBar/>
        {/* <AdvertisementPost/> */}
        </ContentContainer>
     

  )
}

export default LandingPage