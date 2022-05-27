import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

export default function Content() {
  return (
    <Box sx={ { bgcolor: 'secondary.dark', height: '100vh' } }>
      <Header />
    </Box>
  );
}
