import React from 'react';
import { Typography, Button, Stack, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { formatCurrency } from '../hooks/useCurrency';
import { resetLoan } from '../features/loan/loanSlice';

const ResultDisplay = () => {
  const dispatch = useDispatch();
  const { emi, currency, convertedEMI, showResults } = useSelector((state) => state.loan);

  if (!showResults) return null; 

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' }, 
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      mt: 4,
      gap: 2, 
    }}
  >
    <Stack spacing={1} sx={{ flex: 1 }}>
      <Typography variant="h6">
        Monthly EMI: {formatCurrency(emi, currency)}
      </Typography>
      {convertedEMI && (
        <Typography variant="subtitle1">
          Converted EMI: {formatCurrency(convertedEMI, currency)}
        </Typography>
      )}
    </Stack>
  
    <Box sx={{ mt: { xs: 2, sm: 2 }, width: { xs: '100%', sm: 'auto' } }}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => dispatch(resetLoan())}
        sx={{
          width: '100%', 
          borderColor: '#ba68c8',
          color: '#ba68c8',
          '&:hover': {
            backgroundColor: '#f3e5f5',
            borderColor: '#ab47bc',
          },
        }}
      >
        RESET TABLE
      </Button>
    </Box>
  </Box>
  );
};

export default ResultDisplay;
