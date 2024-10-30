import React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import { Global, css } from '@emotion/react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '../../assests/google.svg'; // Update path to match your project structure

const Container = styled(Box)({
  width: '460px',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  marginTop: '60px',
});

const Title = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '42px',
  textAlign: 'center',
});

const StyledTextField = styled(TextField)({
  width: '100%',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
});

const StyledLoginButton = styled(Button)({
  backgroundColor: '#005BA1',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#004080',
  },
  width: '100%',
  padding: '10px 0',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
});

const ForgotPasswordLink = styled(Link)({
  alignSelf: 'flex-end',
  color: '#005BA1',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '21px',
  fontFamily: 'Poppins',
  textAlign: 'left',
  textDecoration: 'underline',
  width: '124px',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
});

const RegisterText = styled(Typography)({
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '21px',
  textAlign: 'center',
  color: '#000000',
});

const RegisterLink = styled(Link)({
  color: '#005BA1',
  fontWeight: 500,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const SocialButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 500,
  textTransform: 'none',
  padding: '10px 0',
  borderColor: '#D9D9D9',
  color: '#000000',
  fontFamily: 'Poppins',
  '& .MuiButton-startIcon': {
    marginRight: '8px',
  },
});

const Login = () => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        `}
      />
      <Container>
        <Title>Login</Title>
        <StyledTextField
          label="Email"
          variant="outlined"
          InputProps={{
            startAdornment: <EmailIcon position="start" />,
          }}
          placeholder="Enter your registered email ID"
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type="password"
          InputProps={{
            startAdornment: <LockIcon position="start" />,
          }}
          placeholder="**********"
        />
        <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
        <StyledLoginButton>Login</StyledLoginButton>
        <RegisterText>
          Don't have an account? <RegisterLink href="#">Register Now</RegisterLink>
        </RegisterText>
        <SocialButton variant="outlined" startIcon={<img src={GoogleIcon} alt="Google Icon" style={{ width: '20px', height: '20px' }} />}>
          Continue with Google
        </SocialButton>
        <SocialButton variant="outlined" startIcon={<AppleIcon style={{ color: 'black', width: '24px', height: '24px' }} />}>
          Continue with Apple
        </SocialButton>
      </Container>
    </>
  );
};

export default Login;
