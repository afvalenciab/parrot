import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexShrink: '0',
    width: '216px',
    border: '1px solid transparent',
  },
  active: {
    border: `1px solid ${theme.palette.parrot}`,
    backgroundColor: 'rgba(240, 78,74,.07)',
  },
  cardContent: {
    paddingBottom: '0.8rem !important',
    padding: '0.8rem',
  },
  title: {
    fontWeight: 'bold',
    lineHeight: 1,
    paddingBottom: '1rem',
  },
  items: {
    color: theme.palette.grey2,
  },
}));
