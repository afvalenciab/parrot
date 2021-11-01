import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.grey1,
  },
  dialogButton: {
    textTransform: 'none',
  },
}));
