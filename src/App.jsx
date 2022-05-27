import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Darktheme from './helpers/createPallete';
import Content from './components/Content';

function App() {
  // const theme = createTheme(getDesignTokens('dark'));

  return (
    <ThemeProvider theme={ Darktheme }>
      <Content />
    </ThemeProvider>
  );
}

export default App;
