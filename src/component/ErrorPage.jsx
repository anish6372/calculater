import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ErrorPage({ darkMode }) {
  const navigate = useNavigate();

  return (
    <Box
    sx={{
      textAlign: 'center',
      mt: 50,
      px: 2,
    }}
  >
    <Typography variant="h3" sx={{ mb: 3 }}>
      Something went wrong in the application.
    </Typography>
    <Button
      variant="outlined"
      onClick={() => navigate('/')}
      sx={{ fontSize: '1rem', px: 3, py: 1 }}
    >
      GO HOME
    </Button>
  </Box>
  );
}

export default ErrorPage;