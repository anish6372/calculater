import React, { useState } from 'react';
import { Button, TextField, Grid, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setLoanDetails } from '../features/loan/loanSlice';

const Emiform = () => {
  const dispatch = useDispatch();
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');

  const handleSubmit = () => {
    dispatch(setLoanDetails({ principal: +principal, rate: +rate, term: +term }));
  };

  return (
    <Stack spacing={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Loan Amount"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            inputProps={{
              style: {
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '20px 22px',
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: '0.9rem',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Interest Rate (%)"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            inputProps={{
              style: {
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '20px 22px',
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: '0.9rem',
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="Term (Years)"
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            inputProps={{
              style: {
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '20px 22px',
              },
            }}
            InputLabelProps={{
              shrink: true,
              style: {
                fontSize: '0.9rem',
              },
            }}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          width: { xs: '100%', sm: '130px' },
          alignSelf: { sm: 'flex-start' },
          mt: 2,
        }}
      >
        Calculate
      </Button>
    </Stack>
  );
};

export default Emiform;
