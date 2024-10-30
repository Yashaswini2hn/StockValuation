import React, { useState } from 'react';
import { Box, InputBase, IconButton, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';


// Sample list of companies for demonstration
const companies = [
  'Bosch Ltd',
  'Boss Packaging Solutions Ltd',
  'Prag Bosimi Synthetics Ltd',
  'Boston Bio Systems Ltd',
  'Boston Education and Software Technologies Ltd',
  'Boston Leasing & Finance Ltd',
  'Bosch Rexroth (India) Ltd',
  'Bosch Chassis Systems India Ltd',
  // Add more companies as needed
];

const SearchContainer = styled(Box)(({ isCompanyinfo }) => ({
    position: 'relative', 
    width: isCompanyinfo ? '399px' : '684px',  // Dynamic width
    height: isCompanyinfo ? '49px' : '70px',   // Dynamic height
    display: 'flex',
    alignItems: 'center',
    borderRadius: '35px',
    border: '1px solid #D6D6D6',
    paddingLeft: '20px',
    paddingRight: '10px',
    boxSizing: 'border-box',
    marginTop: isCompanyinfo ? '0' : '40px',   // Adjust top margin
    marginLeft: isCompanyinfo ? 'auto' : '35px',
    marginRight: isCompanyinfo ? 'auto' : '0',
}));

const SearchInput = styled(InputBase)({
  flexGrow: 1,
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '18px',
  color: '#0000004D',
  '::placeholder': {
    color: '#0000004D',
  },
});

const SearchButton = styled(IconButton)({
  backgroundColor: '#005BA1',
  color: '#FFFFFF',
  borderRadius: '50%',
  width: '45px',
  height: '45px',
});

const SuggestionsList = styled(List)({
  position: 'absolute',
  top: '80px', // Position below the search bar
  width: '100%',
  borderRadius: '0 0 10px 10px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  maxHeight: '200px',
  overflowY: 'auto',
  zIndex: 1,
});

const SearchBar = ({ isCompanyinfo }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
  
    const handleSearch = () => {
      if (searchTerm.trim()) {
        const companyName = searchTerm.replace(/\s+/g, '').toLowerCase();
        navigate(`/company/${companyName}`);
      } else {
        alert('Please enter a company name');
      }
    };
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      
      if (value) {
        const suggestions = companies.filter((company) =>
          company.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCompanies(suggestions);
        setShowSuggestions(true);
      } else {
        setShowSuggestions(false);
      }
    };
  
    const handleSuggestionClick = (company) => {
      setSearchTerm(company);
      setShowSuggestions(false);
      handleSearch();
    };
  
    return (
      <SearchContainer isCompanyinfo={isCompanyinfo}>
        <SearchInput
          placeholder="Search for a Company"
          value={searchTerm}
          onChange={handleInputChange}
          style={{ marginLeft: '30px', color: '#0000004D' }}
        />
        <SearchButton onClick={handleSearch}>
          <SearchIcon />
        </SearchButton>
  
        {showSuggestions && (
          <SuggestionsList>
            {filteredCompanies.map((company, index) => (
              <ListItem button key={index} onClick={() => handleSuggestionClick(company)}>
                <ListItemText primary={company} />
              </ListItem>
            ))}
          </SuggestionsList>
        )}
      </SearchContainer>
    );
  };

export default SearchBar;
