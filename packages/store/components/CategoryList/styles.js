import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    gridArea: 'categories',
    borderRight: `2px solid ${theme.palette.secondary.dark}`,
  },
  title: {
    paddingLeft: '1rem',
  },
  wrapperCategories: {
    display: 'flex',
    flexDirection: 'column',
    padding: '.5rem 1rem',
    rowGap: '1rem',
    maxHeight: 'calc(100vh - 70px - 56px)',
    overflowY: 'auto',
    '@media (max-width: 1000px)': {
      flexDirection: 'row',
      columnGap: '1rem',
      overflowX: 'auto',
    },
  },
}));
