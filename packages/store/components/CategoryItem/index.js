import { Card, CardContent, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import { useStyles } from './styles';

export default function CategoryItem() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Card className={clsx(classes.card, { [classes.active]: false })}>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1" component="h3" className={classes.title}>
          Burritos
        </Typography>

        <Typography variant="body2" component="p" className={classes.items}>
          5 artículos
        </Typography>
      </CardContent>
    </Card>
  );
}
