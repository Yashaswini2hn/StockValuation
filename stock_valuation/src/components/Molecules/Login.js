import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Link, InputAdornment, CircularProgress, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Global, css } from '@emotion/react';
import EmailIcon from '@mui/icons-material/Email';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '../../assests/google.svg'; // Update path to match your project structure
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import jwt_decode from 'jwt-decode';


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
  const [isRegister, setIsRegister] = useState(false); // State to toggle between Login and Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggleView = () => {
    setIsRegister(!isRegister); // Toggle between Login and Register views
  };

  const handleLoginOrRegister = async () => {
    setLoading(true);
    setError('');

    try {
      if (isRegister) {
        // Handle Register API call
        const response = await axios.post(
          'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/register',
          { firstName, lastName, email, password },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (response.status === 201) {
          alert('Registration successful! Please log in.');
          setIsRegister(false);
        } else {
          setError('Registration failed. Please try again.');
        }
      } else {
        // Handle Login API call
        const response = await axios.post(
          'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/admin/users',
          { email, password },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
            },
          }
        );

        if (response.status === 200) {
          navigate('/company/:stockName');
        } else {
          setError('Invalid email or password. Please try again.');
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        `}
      />
      <Container>
        <Title>{isRegister ? 'Register' : 'Login'}</Title>
        {isRegister && (
          <>
            <StyledTextField
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
            />
            <StyledTextField
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
            />
          </>
        )}
        <StyledTextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Enter your password"
        />
        {!isRegister && <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>}
        <StyledLoginButton onClick={handleLoginOrRegister} disabled={loading}>
          {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : isRegister ? 'Register' : 'Login'}
        </StyledLoginButton>
        <RegisterText>
          {isRegister ? (
            <>
              Already have an account?{' '}
              <RegisterLink onClick={handleToggleView}>Login</RegisterLink>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <RegisterLink onClick={handleToggleView}>Register Now</RegisterLink>
            </>
          )}
        </RegisterText>
        {!isRegister && (
          <>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login failed');
              }}
              render={({ onClick }) => (
                <SocialButton
                  variant="outlined"
                  startIcon={<img src={GoogleIcon} alt="Google Icon" style={{ width: '24px', height: '24px' }} />}
                  onClick={onClick}
                >
                  Continue with Google
                </SocialButton>
              )}
            />
            <SocialButton variant="outlined" startIcon={<AppleIcon style={{ color: 'black', width: '24px', height: '24px' }} />}>
              Continue with Apple
            </SocialButton>
          </>
        )}
      </Container>
    </>
  );
};

export default Login;
