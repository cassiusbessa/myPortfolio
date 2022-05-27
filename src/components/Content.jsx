import { Box } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import FrameWorks from './FrameWorks';
import Header from './Header';
import Profile from './Profile';
import Projects from './Projects';

export default function Content() {
  return (
    <Box sx={ { bgcolor: 'secondary.dark', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <Header />
      <Profile />
      <FrameWorks />
      <Projects />
      <Footer />
    </Box>
  );
}
