import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '../features/loan/loanSlice';

const CurrencySelector = () => {
  const dispatch = useDispatch();
  const { currency, showResults } = useSelector((state) => state.loan);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          'https://v6.exchangerate-api.com/v6/423812d87e71e35b16fd87b0/latest/USD'
        );
        const data = await response.json();
        if (data?.conversion_rates) {
          setCurrencies(Object.keys(data.conversion_rates));
        }
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };

    fetchCurrencies();
  }, []);

  if (!showResults) return null; 

  return (
    <FormControl
  fullWidth
  sx={{
    maxWidth: 90,
     
    mt: { xs: 2, sm: 1 },
    ml: { xs: 0, sm: 2 },
  }}
  size="small"
>
  <InputLabel>Currency</InputLabel>
  <Select
    value={currency}
    onChange={(e) => dispatch(setCurrency(e.target.value))}
    label="Currency"
  >
    {currencies.map((currencyCode) => (
      <MenuItem key={currencyCode} value={currencyCode}>
        {currencyCode}
      </MenuItem>
    ))}
  </Select>
</FormControl>
  );
};

export default CurrencySelector;
