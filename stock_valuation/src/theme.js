
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A8F35C',
    },
    secondary: {
      main: '#00E5EF',
    },
    neutral: {
      main: '#B9F7FA',
      light: '#F5F5F5',
      shade: '#FFFFFF',
      dark: '#000000',
      darklight:'rgba(0, 0, 0, 0.8)'
    },
    gradient: {
      main: 'linear-gradient(90deg, #A8F35C 0%, #00E5EF 100%)',
      light:'linear-gradient(90deg, #a8f35c7a  10%, #00e5ef6e 100%)',
      
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
    border: {
      primary: '1px solid #00E5EF',
    },
    shadow: {
      primary: '0px 0px 17px 0px #00000010',
      
    },  
  },
  
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,       // Mobile devices (portrait phones)
      sm: 665,     // Small screen (landscape phones)
      md: 960,     // Medium screens (tablets)
      lg: 1280,    // Large screens (desktops)
      xl: 1920,    // Extra large screens (large desktops)
    },
  },
});

export default theme;

