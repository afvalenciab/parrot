import { Card, CardMedia, CardContent, CardActions, Switch, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';

import { useStyles } from './styles';

export default function ProductItem() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Card className={classes.card}>
      <div className={classes.wrapperContent}>
        <CardMedia className={classes.cardMedia}>
          <Image
            src="https://d1ralsognjng37.cloudfront.net/b49451f6-4f81-404e-bb97-2e486100b2b8.jpeg"
            width="100px"
            height="100px"
            alt="Combo Amigos"
          />
        </CardMedia>

        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle2" component="p" className={classes.productName}>
            Combo Amigos
          </Typography>

          <Typography variant="subtitle2" component="p">
            $189.00 MXN
          </Typography>
        </CardContent>
      </div>

      <CardActions className={classes.cardActions}>
        <Switch size="medium" />

        <Typography variant="caption" component="p">
          No disponible
        </Typography>
      </CardActions>
    </Card>
  );
}
