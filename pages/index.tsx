import type { NextPage } from 'next';
import { Box, Button, Paper } from '@mui/material';

const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper sx={{ p: 5, backgroundColor: 'lightblue' }}>
          <Button href="/login" variant={'contained'} sx={{ m: 1 }}>
            Login
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Home;
