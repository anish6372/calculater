export const formatCurrency = (value, currency) => {
    const formattedNumber = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  
    return `${formattedNumber} ${currency}`;
  };
  