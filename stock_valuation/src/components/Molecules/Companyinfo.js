import React from 'react';
import { Box, Typography, Button ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import HeaderTemplate from '../Templates/HeaderTemplate';
import { companies } from './data';
import PinIcon from '../../assests/link (1).svg';
import OpenWindowIcon from '../../assests/open_in_new.svg';
import addNoteIcon from '../../assests/add_notes.svg';
import exportNotesIcon from '../../assests/export_notes.svg';
import addIcon from '../../assests/add (1).svg';
import AdvertisementPost from './AdvertisementPost';
import HeartIcon from '../../assests/favorite.svg';


const Container = styled(Box)({
  padding: '40px',
});

const CompanyHeaderWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between', // Ensures HeaderText and buttons are at the opposite ends
  alignItems: 'center',
  marginBottom: '20px',
  marginLeft:'150px',
  marginTop:'10px'
});

const CompanyHeader = styled(Box)({
  display: 'flex',
  flexDirection: 'column',

});

const HeaderRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '95px',
});

const HeaderText = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '27px',
  fontWeight: 600,
  lineHeight: '40.5px',
  textAlign: 'left',
});

const SubHeaderText = styled(Typography)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#00000080',
});

const PinIconLarge = styled('img')({
    width: '20px', // Specific size for the Pin icon
    height: '20px',
    cursor: 'pointer',
  });
const IconLarge = styled('img')({
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  });

const BoschContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px', // Spacing between icon and text
  });
  
  const BseContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  });
  
  const NseContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  });

  const KeyRatiosContainer = styled(Box)({
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Poppins, sans-serif',
    marginLeft: '0px',
    marginTop:'30px'
  });
  
  const KeyRatiosHeader = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '36px',
    textAlign: 'left',
    marginBottom: '5px', // Adjusted for closer alignment with "LatestText"
  });
  
  const LatestText = styled(Typography)({
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    textAlign: 'left',
    color: '#000000A6',
    marginBottom: '20px', // Space before the ratios grid
  });
  
  const RatioItem = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    borderBottom: '1px solid #D6D6D6',
    width: '340px', // Adjusted width for compact layout
  });
  
  const ValueText = styled(Typography)({
    fontWeight: 600,
    fontFamily: 'Poppins, sans-serif',
  });

  const ContentRow = styled(Box)({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr', // Adjusts the grid to make space for the AdvertisementPost component
    gap: '20px',
    marginLeft: '130px',
  });
  
 
const StyledButton = styled(Button)({
    width: '160px', // Increased width for better fit
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
    gap: '5px', // Space between icon and text
  });
  
  const AddNotesButton = styled(StyledButton)({
    color: '#005BA1',
    fontSize:'14px',
  });
  
  const ExportButton = styled(StyledButton)({
    color: '#005BA1',
    fontSize:'14px'
  });
  
  const FollowButton = styled(StyledButton)({
    color: '#005BA1', // Only set the text color
    fontSize: '14px'
  });
  
  const StoriesContainer = styled(Box)({
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '20px',
    position: 'relative',
    marginTop: '-160px',
    width: '690px',
    marginLeft:'125px',

  });
  
  const BlurredContent = styled(Box)({
    filter: 'blur(4px)',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });
  
  const Content = styled(Typography)({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    color: '#333',
    marginBottom: '5px',
  });
  
  const LoginButton = styled(Button)({
    backgroundColor: '#005BA1',
    color: '#FFFFFF',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    position: 'absolute',
    top: '10px',
    left: '240px',
    width: '150px',
    marginTop:'120px',
    zIndex: 1,
  });
  
  const HeartIconImage = styled('img')({
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    position: 'absolute',
    top: '15px',
    right: '15px',
  });
  
  const ReadMoreButton = styled(Typography)({
    color: '#005BA1',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '10px',
    alignSelf: 'flex-start',
  });


  const PeerComparisonContainer = styled(Box)({
    marginTop: '30px',
    padding: '20px',
    borderRadius: '10px',
    width: '1122px',
    marginLeft: '130px',
    marginRight: 'auto',
});

const SectionHeader = styled(Typography)({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#000000',
});

const TableHeaderCell = styled(TableCell)({
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    color: '#000000',
    textAlign: 'center',
    borderBottom: '1px solid #CCCCCC',
    padding: '10px',
});

const TableBodyCell = styled(TableCell)({
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    color: '#333333',
    textAlign: 'center',
    borderBottom: '1px solid #CCCCCC', // Standard bottom border for other rows
    padding: '10px',
});

const HighlightedRow = styled(TableRow)({
    borderTop: '2px solid #000', // Black top border for Bosch row
    borderBottom: '2px solid #000', // Black bottom border for Bosch row
});

const HighlightedCell = styled(TableBodyCell)({
    fontWeight: 600,
    color: '#000000', // Black text color for Bosch row
    borderBottom: '2px solid #000', // Black bottom border
});

const BlurredRow = styled(TableRow)({
    filter: 'blur(4px)', // Blurred effect for non-highlighted rows
});

const PeerComparison = () => {
    const peers = [
        { name: 'Company A', pe: '9.20', roce: '30.50%', roa: '60.00%', roe: '45.00%', peg: '19.50', salesGrowth: '10.50' },
        { name: 'Bosch', pe: '8.68', roce: '25.63%', roa: '57.79%', roe: '40.41%', peg: '21.92', salesGrowth: '9.60' },
        { name: 'Company B', pe: '7.30', roce: '22.75%', roa: '50.50%', roe: '35.50%', peg: '17.00', salesGrowth: '8.50' },
    ];


    return (
        <PeerComparisonContainer>
            <SectionHeader>Peer Comparison</SectionHeader>
            <Box display="flex" justifyContent="start" marginBottom="20px" gap="20px">
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Sector: <span style={{ color: '#007AFF', cursor: 'pointer' }}>Auto Ancillaries</span></Typography>
                <Typography style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>Industry: <span style={{ color: '#007AFF', cursor: 'pointer' }}>Auto Ancillaries</span></Typography>
            </Box>
            <TableContainer component={Paper} style={{ boxShadow: 'none', border: '2px solid #CCCCCC', borderRadius: '8px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>PE</TableHeaderCell>
                            <TableHeaderCell>ROCE</TableHeaderCell>
                            <TableHeaderCell>ROA</TableHeaderCell>
                            <TableHeaderCell>ROE</TableHeaderCell>
                            <TableHeaderCell>PEG</TableHeaderCell>
                            <TableHeaderCell>Sales Growth</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {peers.map((peer, index) => (
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
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Centered "Login to Unlock" button overlay */}
            <Box position="relative" textAlign="center" marginTop="-40px">
                <Button variant="contained"  style={{
                    backgroundColor: '#005BA1',
                    color: '#FFFFFF',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'none',
                    position: 'relative',
                    width: '150px',
                    zIndex: 1,
                }}>
                    Login to Unlock
                </Button>
            </Box>
        </PeerComparisonContainer>
    );
};
  
  const Stories = ({ isBlurred }) => (
    <StoriesContainer>
      <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: '24px', fontFamily: 'Poppins' }}>
        Stories (Subject Name)
      </Typography>
      <LoginButton variant="contained">Login to Unlock</LoginButton>
      {isBlurred ? (
        <BlurredContent>
          <Content>
            Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
          </Content>
          <Content>
            Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
          </Content>
          <Content>
            Lorem ipsum dolor sit amet consectetur. Convallis aliquet pretium eu pellentesque enim non odio.
          </Content>
          <ReadMoreButton>Read More</ReadMoreButton>
        </BlurredContent>
      ) : null}
      <HeartIconImage src={HeartIcon} alt="Like" />
    </StoriesContainer>
  );
  
const CompanyInfo = () => {
  const { companyName } = useParams();
  const company = companies.find((c) => c.name.replace(/\s+/g, '').toLowerCase() === companyName);

  if (!company) {
    return <Typography>Company not found</Typography>;
  }

  return (
    <>
      <HeaderTemplate showLoginButton={true} />
      <Container>
        {/* Header Wrapper with Title and Action Buttons aligned in a row */}
        <CompanyHeaderWrapper>
          <CompanyHeader>
            <HeaderRow>
              <HeaderText style={{marginBottom:'20px'}}>{company.name} (BSH)</HeaderText>
            </HeaderRow>
            <HeaderRow>
            <BoschContainer>
            <IconLarge src={PinIcon} alt="Pin Icon"/>
            <SubHeaderText>bosch.in</SubHeaderText>
            </BoschContainer>

            <BseContainer>
            <IconLarge src={OpenWindowIcon} alt="Open in New Window" />
            <SubHeaderText>BSE: 500530</SubHeaderText>
            </BseContainer>

            <NseContainer>
            <IconLarge src={OpenWindowIcon} alt="Open in New Window" />
            <SubHeaderText>NSE: BOSCHLTD</SubHeaderText>
            </NseContainer>
            </HeaderRow>
          </CompanyHeader>

          {/* Action Buttons */}
          <Box display="flex" gap="10px">
          <AddNotesButton variant="outlined" startIcon={<img src={addNoteIcon} alt="Add Notes Icon" width="16px" />}>
           Add Notes
          </AddNotesButton>
          <ExportButton variant="outlined" startIcon={<img src={exportNotesIcon} alt="Export Icon" width="16px" />}>
           Export
          </ExportButton>
          <FollowButton variant="outlined" startIcon={<img src={addIcon} alt="Add Icon" width="16px" />}>
           Follow
          </FollowButton>
          </Box>

        </CompanyHeaderWrapper>

        <ContentRow>
          <KeyRatiosContainer>
            <KeyRatiosHeader>Key Ratios</KeyRatiosHeader>
            <LatestText>Latest: 09/10/24</LatestText>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="10px">
              <RatioItem>
                <Typography>PE</Typography>
                <ValueText>20.6%</ValueText>
              </RatioItem>
              <RatioItem>
                <Typography>ROA</Typography>
                <ValueText>16.0</ValueText>
              </RatioItem>
              <RatioItem>
                <Typography>ROCE</Typography>
                <ValueText>20.6%</ValueText>
              </RatioItem>
              <RatioItem>
                <Typography>Sales Growth</Typography>
                <ValueText>10%</ValueText>
              </RatioItem>
              <RatioItem>
                <Typography>ROE</Typography>
                <ValueText>58.6</ValueText>
              </RatioItem>
              <RatioItem>
                <Typography>PEG</Typography>
                <ValueText>20.6%</ValueText>
              </RatioItem>
            </Box>
          </KeyRatiosContainer>
            <AdvertisementPost />
        </ContentRow>

        <Stories isBlurred={true} />
        <PeerComparison />
      </Container>
    </>
  );
};

export default CompanyInfo;
