import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Switch,
    Box,
    Divider,
    IconButton,
    Drawer,
    useMediaQuery,
    CssBaseline
  } from '@mui/material';
  import MenuIcon from '@mui/icons-material/Menu';
  import { useState } from 'react';
  import { useNavigate, Routes, Route } from 'react-router-dom';
  import ResultDisplay from './component/ResultDisplay';
  import CurrencySelector from './component/CurrencySelector';
  import AmortizationTable from './component/AmortizationTable';
  import Emiform from "./component/Emiform"
 
  
  function HomePage() {
    return (
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>
        <Emiform />
        <Divider sx={{ my: 3 }} />
        <ResultDisplay />
        <CurrencySelector />
        <AmortizationTable />
      </Box>
    );
  }
  
  function Layout({ darkMode, setDarkMode }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const navigate = useNavigate();
  
    const navLinks = [
      { label: 'HOME', path: '/' },
      { label: 'EXCHANGE RATES (LIVE)', path: '/exchange' },
      { label: 'ABOUT', path: '/about' },
      { label: 'ERROR PAGE', path: '/error' },
    ];
  
    const drawer = (
      <Box sx={{ display: 'flex' }}>
{navLinks.map(({ label, path }) => (
  <Button
  key={label}
  onClick={() => navigate(path)}
  sx={{
    ...(label === 'HOME'
      ? {
          backgroundColor: '#4dabf5 !important' , 
          color: '#fff',
          borderRadius: '8px',
          paddingX: 4,
          paddingY: 1,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#2196f3',
          },
        }
      : {
          color: 'white', 
        }),
  }}
>
  {label}
</Button>

))}



      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} sx={{ ml: 5 }} />
    </Box>
    
    
    );
  
    return (
      <>
        <CssBaseline />
        <AppBar position="fixed" elevation={2} sx={{ bgcolor: darkMode ? '#1f1f1f' : 'primary.main' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">Loan Calculator</Typography>
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={() => setDrawerOpen(true)}><MenuIcon /></IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navLinks.map(({ label, path }) => (
                  <Button key={label} color="inherit" onClick={() => navigate(path)}>{label}</Button>
                ))}
                <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Toolbar />
  
       
        <Box sx={{ ml: { xs: 8, sm: 20 } }}> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Box>
      </>
    );
  }
  
  export default Layout;
  
 