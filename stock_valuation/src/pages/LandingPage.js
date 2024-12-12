import React, { useState } from 'react';
import HeaderTemplate from '../components/Templates/HeaderTemplate';
import Text from '../components/Molecules/Text';
import { styled } from '@mui/system';
import {Box} from '@mui/material';
import SearchBar from '../components/Molecules/SearchBar';
import AdvertisementPost from '../components/Molecules/AdvertisementPost';
import LoginContainer from '../components/Molecules/Login';
import { useMediaQuery } from '@mui/material';
import theme from '../theme'

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

const FullPageLoginContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  padding: '20px',
});

const LandingPage = () => {
const [showLogin, setShowLogin] = useState(false);
const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);

const handleLoginClick = () => {
setShowLogin(true);
  };

return (
<PageContainer>
<HeaderTemplate isMobile={isMobile} onLoginClick={handleLoginClick} showLoginButton={!showLogin}/>   
{showLogin && isMobile ? (
// Full-page LoginContainer for mobile view
<FullPageLoginContainer>
<LoginContainer/>
</FullPageLoginContainer>
 ) : (
<LayoutContainer>
<ContentContainer>
<Text isMobile={isMobile} />
<SearchBar isMobile={isMobile} />
</ContentContainer>
{!isMobile && (
<AdvertisementContainer>
{showLogin ? <LoginContainer/> : <AdvertisementPost/>}
</AdvertisementContainer>
)}
</LayoutContainer>
)}
</PageContainer>
);
};
export default LandingPage;
