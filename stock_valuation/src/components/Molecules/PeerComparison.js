import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
} from '@mui/material';
import styled from '@emotion/styled';
import Login from './Login';
import theme from '../../theme';
import { useMediaQuery } from '@mui/material';

const PeerComparisonContainer = styled(Box)(({ isMobile }) => ({
  marginTop: '30px',
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '1187px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const TableContainerStyled = styled(TableContainer)({
  width: '100%',
  boxShadow: 'none',
  border: '2px solid #CCCCCC',
  borderRadius: '8px',
});

const SectionHeader = styled(Typography)(({ isMobile }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: isMobile ? '44px' : '24px',
  fontWeight: 600,
  marginBottom: '15px',
  color: '#000000',
  whiteSpace: 'nowrap',
}));

const TableHeaderCell = styled(TableCell)(({ isMobile }) => ({
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',
  fontSize: isMobile ? '15px' : '16px',
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

  const peers = [
    { name: 'Company A', pe: '9.20', roce: '30.50%', roa: '60.00%', roe: '45.00%', peg: '19.50', salesGrowth: '10.50' },
    { name: 'Bosch', pe: '8.68', roce: '25.63%', roa: '57.79%', roe: '40.41%', peg: '21.92', salesGrowth: '9.60' },
    { name: 'Company B', pe: '7.30', roce: '22.75%', roa: '50.50%', roe: '35.50%', peg: '17.00', salesGrowth: '8.50' },
  ];

  const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

export default PeerComparison;
