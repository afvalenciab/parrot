import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: '#111111',
        },
        body: {
          backgroundColor: '#F04E4A',
          minHeight: '100vh',
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
    text: {
      primary: '#111111',
      secondary: '#F04E4A',
    },
  },
});

export default theme;
