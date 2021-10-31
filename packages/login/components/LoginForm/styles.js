import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  wrapperForm: {
    padding: '3rem',
    borderRadius: '.5rem',
    backgroundColor: theme.palette.secondary.main,
    '@media (max-width: 500px)': {
      padding: '1rem',
    },
  },
  btnLogin: {
    borderRadius: '.2rem',
    textTransform: 'none',
    marginTop: '1rem',
    height: '3.5rem',
    '&:hover': {
      backgroundColor: theme.palette.grey2,
    },
  },
  wrapperFields: {
    paddingTop: '1rem',
  },
  paddingTop: {
    paddingTop: '.5rem',
  },
}));
