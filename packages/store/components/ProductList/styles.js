import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    gridArea: 'products',
    padding: ' 0 .5rem 1rem .5rem',
  },
  wrapperItems: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    padding: '.5rem 1rem .5rem 0',
    maxHeight: 'calc(100vh - 70px - 56px)',
    overflowY: 'auto',
    '@media (max-width: 1000px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
