import React, { useState , useEffect} from 'react';
import {Box,Typography,Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Dialog} from '@mui/material';
import styled from '@emotion/styled';
import {useParams,useNavigate} from 'react-router-dom';
import HeaderTemplate from '../Templates/HeaderTemplate';
import { companies } from './data';
import PinIcon from '../../assests/link (1).svg';
import OpenWindowIcon from '../../assests/open_in_new.svg';
import addNoteIcon from '../../assests/add_notes.svg';
import exportNotesIcon from '../../assests/export_notes.svg';
import addIcon from '../../assests/add (1).svg';
import AdvertisementPost from './AdvertisementPost';
import HeartIcon from '../../assests/favorite.svg';
import Login from './Login';
import exportIcon from '../../assests/ios_share.svg';
import { useMediaQuery } from '@mui/material';
import theme from '../../theme';
import axios from 'axios';


const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
});

const LayoutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1187px',
  padding: '40px 36px',
});

const ContentContainer = styled(Box)({
  width:'100%',
  maxWidth:'1187px',
  padding:'0 16px',
  display:'flex',
  flexDirection:'column',
  alignItems:'flex-start',
});

const Container = styled(Box)({
  padding: '40px',
});

const CompanyHeaderWrapper = styled(Box)(({ isMobile }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: isMobile ? '10px' : '20px',
  padding: isMobile ? '0 10px' : '0', 
  marginTop:'40px'
}));

const CompanyHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px', 
  marginLeft: '25px', 
});

const HeaderRow = styled(Box)(({ isMobile }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  alignItems: isMobile ? 'flex-start' : 'center',
  gap: isMobile ? '10px' : '95px',
  marginBottom: isMobile ? '10px' : '0',
  marginLeft: isMobile ? '-260px' : '0'
}));

const HeaderText = styled(Typography)(({ isMobile }) => ({
  fontFamily: 'Poppins',
  fontSize: isMobile ? '47px' : '27px',
  fontWeight: 600,
  lineHeight: 1.2,
  textAlign: 'left',
  width:'100%',
  whiteSpace:'nowrap',
  marginLeft: isMobile ?'0px' : '0',
  marginTop:isMobile ?'10px' : '20px',
}));

const PinIconLarge = styled('img')(({isMobile})=>({
  width:isMobile ?'45px' :'60px',
  height: isMobile ? '50px':'30px',
  cursor: 'pointer',
  marginLeft : isMobile ? '-60px' : '0',
  marginTop : isMobile ? '-5px' : '0'
}));

const IconLarge = styled('img')(({isMobile})=>({
  width:isMobile ? '40px' :'40px',
  height:isMobile ? '20px' : '20px',
  cursor: 'pointer',
  marginLeft : isMobile ? '-80px' : '0'
}));

const BoschContainer = styled(Box)(({isMobile})=>({
  display: 'flex',
  alignItems: 'center',
  marginLeft:isMobile ? '80px':'0',
  gap:'0px',
  marginTop: isMobile ? '-30px' : '0'
}));

const BseContainer = styled(Box)(({isMobile})=>({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginLeft:isMobile ? '100px' : '0',
}));

const NseContainer = styled(Box)(({isMobile})=>({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginLeft:isMobile ? '100px' : '0',
}));

const BoschLinkText = styled(Typography)(({isMobile})=>({
  fontFamily: 'Poppins',
  fontSize:isMobile ? '18px': '16px',
  marginBottom:isMobile ? '18px' : '0',
  marginTop:isMobile ? '25px' : '0',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#00000080',
}));

const BseText = styled(Typography)(({isMobile})=>({
  fontFamily: 'Poppins',
  fontSize:isMobile ? '18px' : '16px',
  marginBottom:isMobile ? '18px' : '0',
  marginTop: isMobile ? '10px' : '0',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#00000080',
}));

const NseText = styled(Typography)(({isMobile})=>({
  fontFamily: 'Poppins',
  fontSize:isMobile ? '18px' : '16px',
  marginBottom:isMobile ? '18px' : '0',
  marginTop:isMobile ? '10px' : '0',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#00000080',
}));

const KeyRatiosContainer = styled(Box)(({ isMobile }) => ({
  padding:isMobile ? '20px' : '30px',
  borderRadius:'10px',
  width:'100%',
  maxWidth: isMobile ? '900px' : 'unset',
  marginBottom:'20px',
  marginLeft:'-160px',
  marginTop:isMobile ? '-30px' :'30px'
}));

const KeyRatiosHeader = styled(Typography)(({isMobile})=>({
  fontFamily:isMobile ? 'Poppins' : 'Poppins',
  fontSize:isMobile ?  '45px' :'24px',
  marginTop:isMobile ? '20px' : '0',
  fontWeight: 600,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
  textAlign: 'left',
  marginBottom:isMobile ? '10px': '5px',
}));

const LatestText = styled(Typography)(({isMobile})=>({
  fontFamily: 'Poppins',
  fontSize:isMobile ? '15px' :'16px',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#000000A6',
  marginBottom:isMobile ? '30px' :'20px',
}));

const RatioItem = styled(Box)(({isMobile})=>({
  display: 'flex',
  flexDirection: isMobile ? 'row' : 'row',
  justifyContent:isMobile ? 'space-between' : 'space-between',
  paddingBottom:'10px',
  borderBottom:'1px solid #D6D6D6',
  width: isMobile ?'340px' : '340px', 
}));

const ValueText = styled(Typography)({
  fontWeight: 600,
  fontFamily: 'Poppins',
});

const ContentRow = styled(Box)({
  display: 'grid',
  gridTemplateColumns:'2fr 1fr',
  gap:'40px',
  marginLeft: '160px',
});

const AdvertisementPostContainer = styled(Box)({
  width:'300px',
  backgroundColor:'#F9F9F9',
  borderRadius:'8px',
  padding:'20px',
  marginTop:'-40px',
  alignSelf:'flex-start',
});

const StyledButton = styled(Button)({
  width: '160px',
  height: '39px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '21px',
  textAlign: 'center',
  borderRadius: '8px',
  border: '1px solid #005BA1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap:'5px',
});

const AddNotesButton = styled(StyledButton)({
  color: '#005BA1',
  fontSize: '14px',
  marginLeft:'120px'
});

const ExportButton = styled(StyledButton)({
  color: '#005BA1',
  fontSize: '14px',
  marginLeft:'30px'
});

const FollowButton = styled(StyledButton)({
  color: '#005BA1',
  fontSize: '14px',
  marginLeft:'30px'
});

const IconButtonsContainer = styled(Box)(({ isMobile }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginLeft: isMobile ? '440px' : '0',
  marginTop: isMobile ? '-443px' : '0'
}));

const StoriesContainer = styled(Box)(({ isMobile }) => ({
  padding: '20px',
  width: '680px',
  maxWidth: isMobile ? '700px' : 'unset',
  borderRadius: '8px',
  marginBottom:isMobile ? '0': '20px',
  marginTop:'-180px',
  marginLeft:'5px'
}));

const BlurredContent = styled(Box)(({isMobile})=>({
  filter: 'blur(4px)',
  padding: '10px',
  borderRadius: '5px',
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: isMobile ? '-40px' : '-10px'
}));

const Content = styled(Typography)({
  fontFamily:'Poppins',
  fontSize:'14px',
  fontWeight:400,
  lineHeight:'20px',
  color:'#333',
  marginBottom:'5px',
});

const LoginButton = styled(Button)(({isMobile})=>({
  backgroundColor: '#005BA1',
  color: '#FFFFFF',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  position: 'absolute',
  top:isMobile?'810px' :'690px',
  left: isMobile ? '160px ' :'400px',
  width: '150px',
  zIndex: 1,
}));

const HeartIconImage = styled('img')({
  width: '20px',
  height: '20px',
  cursor: 'pointer',
  position: 'absolute',
  top: '15px',
  right: '15px',
});

const ReadMoreButton = styled(Typography)({
  color:'#005BA1',
  fontFamily:'Poppins',
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  marginTop: '10px',
  alignSelf: 'flex-start',
});

const PeerComparisonContainer = styled(Box)(({ isMobile }) => ({
  marginTop:'30px',
  padding:'20px',
  borderRadius:'10px',
  width:'100%',
  maxWidth:'1187px',
  marginLeft:'auto',
  marginRight:'auto',
}));

const TableContainerStyled = styled(TableContainer)({
  width:'100%',
  boxShadow: 'none',
  border: '2px solid #CCCCCC',
  borderRadius: '8px',
});

const SectionHeader = styled(Typography)(({isMobile})=>({
  fontFamily: 'Poppins, sans-serif',
  fontSize:isMobile ? '44px' :'24px',
  fontWeight: 600,
  marginBottom: '15px',
  color: '#000000',
  whiteSpace:'nowrap'
}));

const TableHeaderCell = styled(TableCell)(({isMobile})=>({
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',
  fontSize:isMobile ? '15px ' : '16px',
  color: '#000000',
  textAlign: 'center',
  borderBottom: '1px solid #CCCCCC',
  padding: '10px',
}));

const TableBodyCell = styled(TableCell)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '16px',
  color: '#333333',
  textAlign: 'center',
  borderBottom: '1px solid #CCCCCC',
  padding: '10px',
});

const HighlightedRow = styled(TableRow)({
  borderTop: '2px solid #000',
  borderBottom: '2px solid #000',
  backgroundColor: '#FFF',
  position: 'relative',
  '& td:first-of-type': {
    borderLeft: '2px solid #000',
  },
  '& td:last-of-type': {
    borderRight: '2px solid #000',
  },
});

const HighlightedCell = styled(TableBodyCell)({
  fontWeight: 600,
  color: '#000000',
});

const BlurredRow = styled(TableRow)({
  filter: 'blur(4px)',
});

const PeerComparison = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const peers = [
    { name: 'Company A', pe: '9.20', roce: '30.50%', roa: '60.00%', roe: '45.00%', peg: '19.50', salesGrowth: '10.50' },
    { name: 'Bosch', pe: '8.68', roce: '25.63%', roa: '57.79%', roe: '40.41%', peg: '21.92', salesGrowth: '9.60' },
    { name: 'Company B', pe: '7.30', roce: '22.75%', roa: '50.50%', roe: '35.50%', peg: '17.00', salesGrowth: '8.50' },
  ];

  return (
    <PeerComparisonContainer isMobile={isMobile}>
      <SectionHeader isMobile={isMobile}>Peer Comparison</SectionHeader>
      <Box display="flex" justifyContent="start" marginBottom="20px" gap="20px">
        <Typography style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
          Sector: <span style={{ color: '#007AFF', cursor: 'pointer' }}>Auto Ancillaries</span>
        </Typography>
        <Typography style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
          Industry: <span style={{ color: '#007AFF', cursor: 'pointer' }}>Auto Ancillaries</span>
        </Typography>
      </Box>
      <TableContainerStyled isMobile={isMobile} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell isMobile={isMobile}>Name</TableHeaderCell>
              <TableHeaderCell isMobile={isMobile}>PE</TableHeaderCell>
              <TableHeaderCell isMobile={isMobile}>ROCE</TableHeaderCell>
              <TableHeaderCell isMobile={isMobile}>ROA</TableHeaderCell>
              <TableHeaderCell isMobile={isMobile}>ROE</TableHeaderCell>
              <TableHeaderCell isMobile={isMobile}>PEG</TableHeaderCell>
              <TableHeaderCell isMobile={isMobile}>Sales Growth</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {peers.map((peer, index) =>
              index === 1 ? (
                <HighlightedRow key={peer.name}>
                  <HighlightedCell>{peer.name}</HighlightedCell>
                  <HighlightedCell>{peer.pe}</HighlightedCell>
                  <HighlightedCell>{peer.roce}</HighlightedCell>
                  <HighlightedCell>{peer.roa}</HighlightedCell>
                  <HighlightedCell>{peer.roe}</HighlightedCell>
                  <HighlightedCell>{peer.peg}</HighlightedCell>
                  <HighlightedCell>{peer.salesGrowth}</HighlightedCell>
                </HighlightedRow>
              ) : (
                <BlurredRow key={peer.name}>
                  <TableBodyCell>{peer.name}</TableBodyCell>
                  <TableBodyCell>{peer.pe}</TableBodyCell>
                  <TableBodyCell>{peer.roce}</TableBodyCell>
                  <TableBodyCell>{peer.roa}</TableBodyCell>
                  <TableBodyCell>{peer.roe}</TableBodyCell>
                  <TableBodyCell>{peer.peg}</TableBodyCell>
                  <TableBodyCell>{peer.salesGrowth}</TableBodyCell>
                </BlurredRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainerStyled>
      <Box position="relative" textAlign="center" marginTop="-85px">
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            backgroundColor: '#005BA1',
            color: '#FFFFFF',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'none',
            position: 'relative',
            width: '150px',
            zIndex: 1,
          }}
        >
          Login to Unlock
        </Button>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          },
        }}
      >
        <Login />
      </Dialog>
    </PeerComparisonContainer>
  );
};

const Stories = ({ id, isBlurred }) => {
  const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
  const [open, setOpen] = useState(false);
  const [storyContent, setStoryContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(
          `http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/stock-stories/${id}`,
          {
            headers: {
              Accept: '*/*',
              Authorization:
                'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        setStoryContent(response.data.story || 'No story available'); // Assuming `story` contains the story text
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching story content:', error);
        setStoryContent('No story available');
        setIsLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (isLoading) {
    return <Typography>Loading Story...</Typography>;
  }

  return (
    <StoriesContainer isMobile={isMobile}>
      <Typography
        isMobile={isMobile}
        variant="h6"
        style={{
          fontWeight: 'bold',
          fontSize: isMobile ? '44px' : '24px',
          fontFamily: 'Poppins',
          whiteSpace: 'nowrap',
          marginLeft: isMobile ? '-35px' : '0',
        }}
      >
        Stories (Subject Name)
      </Typography>
      <LoginButton isMobile={isMobile} variant="contained" onClick={handleOpen}>
        Login to Unlock
      </LoginButton>
      {isBlurred ? (
        <BlurredContent isMobile={isMobile}>
          <Content>{storyContent}</Content>
          <ReadMoreButton>Read More</ReadMoreButton>
        </BlurredContent>
      ) : (
        <Box>
          <Content>{storyContent}</Content>
        </Box>
      )}
      <HeartIconImage src={HeartIcon} alt="Like" />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          },
        }}
      >
        <Login />
      </Dialog>
    </StoriesContainer>
  );
};

const CompanyInfo = () => {
const { stockName } = useParams();
const navigate = useNavigate();
const [stockDetails, setStockDetails] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [loading, setLoading] = useState(true);
const isMobile = useMediaQuery(`(max-width:${theme.breakpoints.values.sm}px)`);
console.log("Is Mobile:", isMobile);
const company = companies.find((c) => c.name.replace(/\s+/g, '').toLowerCase() === stockName);
const [keyRatios, setKeyRatios] = useState({
  pe: null,
  roe: null,
  roa: null,
  roce: null,
  salesGrowth: null,
  peg: null,
  publishDate: null,
});
useEffect(() => {
  const fetchStockDetails = async () => {
    try {
      const response = await axios.get(
        'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/stock-details/1',
        {
          headers: {
            Accept: '*/*',
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );

      const data = response.data;
      setKeyRatios({
        pe: data.stockPE,
        roe: data.valROE,
        roa: data.valROA,
        roce: data.valROCE,
        salesGrowth: data.salesGrowth,
        peg: data.salesPEG,
        publishDate: data.publishDate,
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching stock details:', error);
      setIsLoading(false);
    }
  };

  fetchStockDetails();
}, []);


useEffect(() => {
  window.scroll(0,0)
  const fetchStockDetails = async () => {
    try {
      const response = await axios.get(
        'http://ec2-65-0-139-224.ap-south-1.compute.amazonaws.com:8080/api/stocks/1',
        {
          headers: {
            Accept: '*/*',
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczNDA5NTA2NSwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzM0MDA4NjY1fQ.7iPNG1HuN8SdaDMZUqsKf7Aq3nODE-T-pahyf1XbxiWvbc8eEqC41O7FcvYqFAJeiAaAde3k70ypj2qQY2hOmA',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      setStockDetails(response.data); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stock details:', error);
      setLoading(false);
    }
  };

  fetchStockDetails();
}, []);

if (loading) {
  return <Typography>Loading...</Typography>;
}

if (!stockDetails) {
  return <Typography>Stock not found</Typography>;
}

const handleShowStory = (storyId) => {
  console.log('Navigating to story ID:', storyId);
  navigate(`/company/${stockName}/story/${storyId}`);
};


  return (
    <PageContainer isMobile={isMobile}>
      <HeaderTemplate showLoginButton={true} hideSearchBar={isMobile}/>
      <LayoutContainer isMobile={isMobile}>
      <Container>
      <ContentContainer onClick={() => handleShowStory(1)}>
        <CompanyHeaderWrapper isMobile={isMobile}>
          <CompanyHeader>
            <HeaderRow isMobile={isMobile}>
            <HeaderText isMobile={isMobile} style={{ marginBottom: '20px' }}>
             {stockDetails.stockName} {isMobile ? '' : `(${stockDetails.stockSymbol || ''})`}
            </HeaderText>
            </HeaderRow>
            <HeaderRow isMobile={isMobile}>
              <BoschContainer isMobile={isMobile}  style={{display:'none'}}>
                <PinIconLarge isMobile={isMobile} src={PinIcon} alt="Pin Icon"/>
                <BoschLinkText isMobile={isMobile}>bosch.in</BoschLinkText>
              </BoschContainer>
              <BseContainer isMobile={isMobile}  style={{display:'none'}}>
                <IconLarge isMobile={isMobile} src={OpenWindowIcon} alt="Open in New Window"/>
                <BseText isMobile={isMobile}>BSE:500530</BseText>
              </BseContainer>
              <NseContainer isMobile={isMobile}  style={{display:'none'}}>
                <IconLarge isMobile={isMobile} src={OpenWindowIcon} alt="Open in New Window"/>
                <NseText isMobile={isMobile}>NSE:BOSCHLTD</NseText>
              </NseContainer>
            </HeaderRow>
          </CompanyHeader>
          <Box display="flex" justifyContent={isMobile ? "center" : "flex-end"} alignItems="center" gap="10px" >
          {isMobile ? (
           <IconButtonsContainer isMobile={isMobile}>
           <Button variant="outlined" startIcon={<img src={exportIcon} alt="Export Icon" width="14px" />} />
           <Button variant="outlined" startIcon={<img src={addIcon} alt="Add Icon" width="14px" />} />
          </IconButtonsContainer>
          ) : (
          <>
          <AddNotesButton variant="outlined" startIcon={<img src={addNoteIcon} alt="Add Notes Icon" width="16px"/>}  style={{display:'none'}}>
           Add Notes
          </AddNotesButton>
          <ExportButton variant="outlined" startIcon={<img src={exportNotesIcon} alt="Export Icon" width="16px"/>}  style={{display:'none'}}>
           Export
          </ExportButton>
          <FollowButton variant="outlined" startIcon={<img src={addIcon} alt="Add Icon" width="16px"/>}  style={{display:'none'}}>
           Follow
          </FollowButton>
          </>
          )}
          </Box>
         </CompanyHeaderWrapper>
        <ContentRow>
                <KeyRatiosContainer isMobile={isMobile}>
                <KeyRatiosHeader isMobile={isMobile}>Key Ratios</KeyRatiosHeader>
                <LatestText isMobile={isMobile}>Latest: {new Date(keyRatios.publishDate).toLocaleDateString('en-GB')}</LatestText>
                <Box display={isMobile ? "block":"grid"} gridTemplateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"} gap="10px">
                <RatioItem isMobile={isMobile}>
                <Typography>PE</Typography>
                <ValueText>{keyRatios.pe}</ValueText>
                </RatioItem>
                <RatioItem isMobile={isMobile}>
                <Typography>ROA</Typography>
                <ValueText>{keyRatios.roa}</ValueText>
                </RatioItem>
                <RatioItem isMobile={isMobile}>
                <Typography>ROCE</Typography>
                <ValueText>{keyRatios.roce}</ValueText>
                </RatioItem>
                <RatioItem isMobile={isMobile}>
                <Typography>Sales Growth</Typography>
                <ValueText>{keyRatios.salesGrowth}</ValueText>
                </RatioItem>
                <RatioItem isMobile={isMobile}>
                <Typography>ROE</Typography>
                <ValueText>{keyRatios.roe}</ValueText>
                </RatioItem>
                <RatioItem isMobile={isMobile}>
                <Typography>PEG</Typography>
                <ValueText>{keyRatios.peg}</ValueText>
              </RatioItem>
            </Box>
          </KeyRatiosContainer>
          {!isMobile && (
          <AdvertisementPostContainer>
          <AdvertisementPost />
          </AdvertisementPostContainer>
           )}
          </ContentRow>
          <Stories id={1} isBlurred={true} />
          {/* <PeerComparison/> */}
          </ContentContainer>
          </Container>
          </LayoutContainer>
          </PageContainer>
);
};
export default CompanyInfo;
