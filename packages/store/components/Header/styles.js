import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    gridArea: 'header',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
  user: {
    display: 'flex',
  },
  username: {
    '@media (max-width: 440px)': {
      display: 'none',
    },
  },
}));
