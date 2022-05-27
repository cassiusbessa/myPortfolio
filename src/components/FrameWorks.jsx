import React from 'react';
import { Container, Typography } from '@mui/material';

function FrameWorks() {
  return (
    <Container sx={ { bgcolor: 'primary.main' } } maxWidth="xl">
      <Typography
        variant="h3"
        component="h3"
        sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem', textAlign: 'center' } }
      >
        FrameWorks
      </Typography>
    </Container>
  );
}

export default FrameWorks;
