import React from 'react';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../hooks/useCurrency';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';

const AmortizationTable = () => {
  const { schedule, currency } = useSelector((state) => state.loan);

  if (!schedule.length) return null;

  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 4,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          p: 2,
          pb: 1,
          fontWeight: 600,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        Amortization Schedule ({currency})
      </Typography>

      <Box
  sx={{
    maxHeight: 500, 
    overflowY: 'auto',
    pr: 1, 
  }}
>
  <Table stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold' }}>Month</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Principal</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Interest</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Remaining Balance</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {schedule.map((row) => (
        <TableRow key={row.month} hover>
          <TableCell>{row.month}</TableCell>
          <TableCell>{formatCurrency(row.principal, currency)}</TableCell>
          <TableCell>{formatCurrency(row.interest, currency)}</TableCell>
          <TableCell>{formatCurrency(row.remaining, currency)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Box>
    </TableContainer>
  );
};

export default AmortizationTable;
