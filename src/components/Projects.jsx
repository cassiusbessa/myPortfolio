import React from 'react';
import { Container, Typography } from '@mui/material';

function Projects() {
  return (
    <Container sx={ { bgcolor: 'primary.dark' } } maxWidth="xl">
      <Typography
        variant="h3"
        component="h3"
        sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem', textAlign: 'center' } }
      >
        My Projects
      </Typography>
    </Container>
  );
}

export default Projects;
