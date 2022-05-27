import { createTheme } from '@mui/material/styles';

const Darktheme = createTheme({
  palette: {

    primary: {
      main: '#1D1D1D',
      light: '#444444',
      dark: '#181818',
      contrastText: '#ffffff',

    },

    secondary: {
      main: '#40225a',
      light: '#6d4b87',
      dark: '#1a0030',
      contrastText: '#ffffff',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

export default Darktheme;
