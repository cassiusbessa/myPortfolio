import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container sx={ { bgcolor: 'primary.main' } } maxWidth="xl">
      <Typography
        variant="h3"
        component="h3"
        sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem', textAlign: 'center' } }
      >
        Contacts
      </Typography>
    </Container>
  );
}

export default Footer;
