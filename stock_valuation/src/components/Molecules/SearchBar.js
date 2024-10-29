import React from 'react';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

// Styled container for the search bar
const SearchContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '684px',
  height: '70px',
  borderRadius: '35px', // Rounded corners
  border: '1px solid #D6D6D6',
  paddingLeft: '20px',
  paddingRight: '10px',
  boxSizing: 'border-box',
  marginTop: '40px',
  marginLeft:'65px',
  
});

// Styled input field
const SearchInput = styled(InputBase)({
  flexGrow: 1,
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '18px',
  color: '#0000004D', // Placeholder color
  '::placeholder': {
    color: '#0000004D', // Color for placeholder
  },
});

// Styled icon button
const SearchButton = styled(IconButton)({
  backgroundColor: '#005BA1', // Circle background
  color: '#FFFFFF',
  borderRadius: '50%', // Makes it circular
  width: '45px',
  height: '45px',
});

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search for a Company" />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
