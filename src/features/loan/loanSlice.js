import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  principal: 0,
  rate: 0,
  term: 0,
  emi: 0,
  schedule: [],
  currency: 'USD',
  convertedEMI: null,        
  showResults: false,        
};

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setLoanDetails: (state, action) => {
      const { principal, rate, term } = action.payload;
      const monthlyRate = rate / 100 / 12;
      const months = term * 12;
      const emi =
        principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

      let balance = principal;
      const schedule = [];
      for (let i = 1; i <= months; i++) {
        const interest = balance * monthlyRate;
        const principalPart = emi - interest;
        balance -= principalPart;
        schedule.push({
          month: i,
          principal: principalPart,
          interest,
          remaining: balance > 0 ? balance : 0,
        });
      }

      state.principal = principal;
      state.rate = rate;
      state.term = term;
      state.emi = emi;
      state.schedule = schedule;
      state.convertedEMI = null; 
      state.showResults = true;  
    },

    resetLoan: () => ({
      ...initialState,
    }),

    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setLoanDetails, resetLoan, setCurrency } = loanSlice.actions;
export default loanSlice.reducer;
