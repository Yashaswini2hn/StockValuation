import React, { useState } from 'react';
import { Box, InputBase, IconButton, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '../../theme';
import { useMediaQuery } from '@mui/material';

const SearchContainer = styled(Box)(({ isMobile }) => ({
  position: 'relative',
  width: isMobile ? '410px' : '690px',
  height: isMobile ? '58px' : '70px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '35px',
  border: '1px solid #D6D6D6',
  paddingLeft: '10px',
  paddingRight: '0px',
  marginTop: isMobile ? '60px' : '40px',
  marginRight: 'auto',
  marginLeft: isMobile ? '0px' : '35px',
}));

const SearchInput = styled(InputBase)({
  flexGrow: 1,
  fontFamily: 'Montserrat',
  fontSize: '18px',
  color: '#0000004D',
  '::placeholder': {
    color: '#0000004D',
  },
});

const SearchButton = styled(IconButton)(({ isMobile }) => ({
  backgroundColor: '#005BA1',
  color: '#FFFFFF',
  borderRadius: isMobile ? '50%' : '60%',
  width: isMobile ? '48px' : '54px',
  height: isMobile ? '48px' : '54px',
  position: 'relative',
  right: '5px',
}));

const SuggestionsList = styled(List)({
  position: 'absolute',
  top: '80px',
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
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  const navigate = useNavigate();

  // Mock data for companies
  const mockCompanies = [
    // 'AAPL - Apple Inc.',
    // 'GOOGL - Alphabet Inc.',
    // 'MSFT - Microsoft Corporation',
    // 'TSLA - Tesla Inc.',
    // 'AMZN - Amazon.com Inc.',
    'ugh that instead',
    'qua obediently daily',
    'progress',
    'fledgling aggravating',
    'NINtec Systems Ltd'
  ];

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
      const suggestions = mockCompanies.filter((company) =>
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
    <SearchContainer isMobile={isMobile} isCompanyinfo={isCompanyinfo}>
      <SearchInput
        placeholder="Search for a Company"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ marginLeft: '30px', color: '#0000004D' }}
      />
      <SearchButton isMobile={isMobile} onClick={handleSearch}>
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
