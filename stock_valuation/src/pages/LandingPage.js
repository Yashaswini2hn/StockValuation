import React, { useState } from 'react';
import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Text from '../components/Molecules/Text';
import { styled } from '@mui/system';
import SearchBar from '../components/Molecules/SearchBar';
import AdvertisementPost from '../components/Molecules/AdvertisementPost';
import LoginContainer from '../components/Molecules/Login';
import { Box } from '@mui/material';

const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const LayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  padding: '40px 36px',
});

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '70%',
});

const AdvertisementContainer = styled(Box)({
  width: '25%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '90px',
  position: 'relative',
  right: '160px',
});

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <PageContainer>
      <HeaderTemplate onLoginClick={handleLoginClick} showLoginButton={!showLogin} />
      <LayoutContainer>
        <ContentContainer>
          <Text />
          <SearchBar />
        </ContentContainer>
        <AdvertisementContainer>
          {showLogin ? <LoginContainer /> : <AdvertisementPost />}
        </AdvertisementContainer>
      </LayoutContainer>
    </PageContainer>
  );
};

export default LandingPage;
