import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function TechCard(props) {
  const { techText, children } = props;
  return (
    <Box
      sx={ {
        bgcolor: 'primary.dark',
        borderBottom: 2,
        borderColor: 'secondary.main',
        borderRadius: 2,
        display: 'flex',
        width: '136px',
        height: '136px',
        m: 3,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.contrastText',
        '&:hover': {
          color: 'secondary.main',
        },
      } }
    >

      <div>

        <Typography
          variant="h2"
          sx={ { textAlign: 'center' } }
        >
          {children}
        </Typography>
        <Typography
          variant="h6"
          sx={ { textAlign: 'center' } }
        >
          {techText}
        </Typography>
      </div>

    </Box>
  );
}
