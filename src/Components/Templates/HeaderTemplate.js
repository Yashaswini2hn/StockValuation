import React from 'react';
import { Box, Typography } from '@mui/material';
import GroupIcon from '../../Assests/Group 1116605015.svg';
import PersonIcon from '../../Assests/person_4 (1).svg';

const HeaderTemplate = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="20px 40px"
      style={{ width: '100%', backgroundColor: '#f5f5f5' }}
    >
      <Box display="flex" alignItems="center">
        <Typography
          variant="h1"
          style={{
            fontFamily: 'Michroma',
            fontSize: '30px',
            fontWeight: 400,
            lineHeight: '42.66px',
            color: '#01441D',
            textAlign: 'left',
          }}
        >
          StockValue
        </Typography>
        <img
          src={GroupIcon}
          alt="Fluctuation Icon"
          style={{ marginLeft: '8px', height: '30px', width: '30px' }}
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          width: '130px',
          height: '52px',
          borderRadius: '26px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          gap: '8px',
          padding: '0 12px',
        }}
      >
        <img src={PersonIcon} alt="Person Icon" style={{ height: '24px', width: '24px' }} />
        <Typography
          style={{
            fontFamily: 'Inter',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '24.2px',
            color: '#000000',
          }}
        >
          Login
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderTemplate;
