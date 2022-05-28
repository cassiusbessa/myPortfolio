import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Profile() {
  return (
    <Box sx={ { bgcolor: 'primary.dark', pt: 4, pb: 8 } }>
      <Typography
        variant="h3"
        component="h3"
        sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem', textAlign: 'center' } }
      >
        Full Stack Developer
      </Typography>
      <Container sx={ { display: 'flex', mt: 8, justifyContent: 'space-around' } }>
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
          <Typography
            variant="h4"
            component="h1"
            sx={ { color: 'primary.contrastText', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '.3rem' } }
          >
            Hey!
            <br />
            I'm Cássius Bessa
          </Typography>
          <Typography
            variant="p"
            component="p"
            mt={ 8 }
            sx={ { color: 'primary.contrastText', fontFamily: 'monospace' } }
          >
            I'm just a tech-loving traveler
          </Typography>
        </Box>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71udLEdIa5LQKjWM77RGqxnvmN0Zk3J7gbw&usqp=CAU" />
      </Container>
    </Box>
  );
}

export default Profile;
