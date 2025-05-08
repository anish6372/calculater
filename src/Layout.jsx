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
import Emform from './component/Emform';
import { NavLink } from 'react-router-dom';

 
  
  function HomePage() {
    return (
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>
        <Emform/>

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
      <Box
        sx={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
          p: 2,
          bgcolor: darkMode ? '#1f1f1f' : 'primary.main',
          height: '100%',
        }}
      >
        {navLinks.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#fff' : 'white',
              backgroundColor: isActive ? '#1E88E5' : 'transparent',
              borderRadius: '8px',
              padding: '8px 16px',
              width: '100%',
            })}
            onClick={() => setDrawerOpen(false)} 
          >
            {label}
          </NavLink>
        ))}
    
        <Box sx={{ mt: 2 }}>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Box>
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
                <NavLink
                  key={label}
                  to={path}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#fff' : 'inherit',
                    backgroundColor: isActive ? '#1E88E5' : 'transparent',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    
                  })}
                >
                  {label}
                </NavLink>
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
  
 