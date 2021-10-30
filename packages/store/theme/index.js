import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: '#111111',
        },
        body: {
          backgroundColor: '#E1E1E1',
          minHeight: '100vh',
        },
      },
    },
    MuiPaper: {
      elevation8: {
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.1), 0px 2px 6px 1px rgba(0,0,0,0.1), 0px 3px 14px 2px rgba(0,0,0,0.1)',
      },
    },
    MuiSwitch: {
      colorSecondary: {
        '&$checked': {
          color: '#F04E4A',
        },
      },
      track: {
        opacity: 0.7,
        backgroundColor: '#C04E4A',
        '$checked$checked + &': {
          opacity: 0.6,
          backgroundColor: '#F04E4A',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#FFFFFF',
    },
    grey1: '#757575',
    grey2: '#6F6F6F',
    grey3: '#D1D1D1',
    parrot: '#F04E4A',
    text: {
      primary: '#111111',
      secondary: '#FFFFFF',
    },
  },
});

export default theme;
