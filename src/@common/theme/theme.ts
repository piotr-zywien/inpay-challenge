import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    basic: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#195C56',
      light: '#939FAF',
      dark: '#122445',
    },
    background: {
      main: '#195C56',
      light: '#7BDF8F',
      content: '#F2F0EE',
      section: '#FFFFFF',
    },
  },
});

export default theme;
