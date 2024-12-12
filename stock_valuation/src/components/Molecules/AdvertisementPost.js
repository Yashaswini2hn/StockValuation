import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';

// Styled container for the advertisement post background
const AdContainer = styled(Box)({
  width: '438px',
  height: '421px',
  borderRadius: '10px',
  backgroundColor: '#D9D9D9CC',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  marginLeft: '-60px',
  marginTop: '60px',
});

// Styled text for the ad title
const AdTitle = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '28px',
  color: '#005BA1',
  textAlign: 'center',
  marginBottom: '10px',
});

// Styled text for the ad body
const AdBody = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#000',
  textAlign: 'center',
});

// Styled text for the link
const AdLink = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#005BA1',
  textAlign: 'center',
  textDecoration: 'underline',
  cursor: 'pointer',
});

const AdvertisementPost = () => {
  const [adDetails, setAdDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAdDetails = async () => {
      try {
        const response = await axios.get(
          'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/ad-details/1',
          {
            headers: {
              Accept: '*/*',
              Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
              'Access-Control-Allow-Origin': '*', 
            },
          }
        );
        console.log('response', response.data);
        setAdDetails(response.data);
      } catch (error) {
        setError('Failed to load advertisement');
        console.error('Error fetching ad details:', error.response || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdDetails();
  }, []);

  const handleFetchAdDetails = async () => {
    try {
      const response = await fetch(
        'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/ad-details/1',
        {
          method: 'GET', 
          headers: {
            Accept:'*/*',
            'Access-Control-Allow-Origin': '*', 
          },
        }
      );

      if (!response.ok) throw new Error('Failed to fetch advertisement details');

      const result = await response.json();
      console.log('Advertisement details fetched successfully:', result);
      setAdDetails(result); // Update adDetails with fetched data
    } catch (error) {
      console.error('Error fetching advertisement details:', error);
      setError('Failed to fetch advertisement details');
    }
  };

  if (loading) {
    return <AdContainer>Loading Advertisement...</AdContainer>;
  }

  if (error) {
    return <AdContainer>{error}</AdContainer>;
  }

  return (
    <AdContainer>
      <AdTitle>{adDetails.title}</AdTitle>
      <AdBody>{adDetails.body}</AdBody>
      <AdLink onClick={() => window.open(adDetails.link, '_blank')}>{adDetails.link}</AdLink>
      <button
        onClick={handleFetchAdDetails}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Fetch Advertisement Details
      </button>
    </AdContainer>
  );
};

export default AdvertisementPost;
