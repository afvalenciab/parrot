import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperContent: {
    display: 'flex',
  },
  cardMedia: {
    borderRadius: '.5rem',
    margin: '.5rem',
    overflow: 'hidden',
    flexShrink: 0,
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
  available: {
    color: 'green',
  },
  unavailable: {
    color: 'red',
  },
});
