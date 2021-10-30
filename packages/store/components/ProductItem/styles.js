import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperContent: {
    display: 'flex',
  },
  cardMedia: {
    // border: `1px solid ${theme.palette.grey3}`,
    borderRadius: '.5rem',
    margin: '.5rem',
    overflow: 'hidden',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingBottom: '0 !important',
    padding: '0 0 0 .5rem',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    paddingRight: '1rem',
  },
}));
