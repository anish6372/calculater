export const calculateEMI = (P, R, N) => {
    const monthlyRate = R / 12 / 100;
    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / 
                (Math.pow(1 + monthlyRate, N) - 1);
    return parseFloat(emi.toFixed(2));
};
  
export const getAmortizationSchedule = (P, R, N, emi) => {
    const schedule = [];
    let balance = P;
    const monthlyRate = R / 12 / 100;
  
    for (let i = 1; i <= N; i++) {
      const interest = parseFloat((balance * monthlyRate).toFixed(2));
      const principal = parseFloat((emi - interest).toFixed(2));
      balance = parseFloat((balance - principal).toFixed(2));
  
      schedule.push({
        month: i,
        principal,
        interest,
        balance: balance > 0 ? balance : 0,
      });
    }
    return schedule;
};


export const setCurrency = (currency) => {
    
    return currency;
};