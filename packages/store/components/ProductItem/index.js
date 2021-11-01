import { Card, CardMedia, CardContent, CardActions, Switch, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';
import clsx from 'clsx';

import { useDispatcherStores } from 'providers/Stores/useDispatcher';

import { useStyles } from './styles';

export default function ProductItem({ product }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { editProduct } = useDispatcherStores();

  const status = {
    isAvailable: product?.availability === 'AVAILABLE',
    label: product?.availability === 'AVAILABLE' ? 'Disponible' : 'No disponible',
  };

  const handleChange = ({ target }) => {
    editProduct({ ...product, availability: target.checked ? 'AVAILABLE' : 'UNAVAILABLE' });
  };

  return (
    <Card className={classes.card} data-testid={`card-${product.uuid}`}>
      <div className={classes.wrapperContent}>
        <CardMedia className={classes.cardMedia}>
          <Image src={product?.imageUrl} width={100} height={100} alt={product?.name} priority />
        </CardMedia>

        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle2" component="p" className={classes.productName}>
            {product?.name}
          </Typography>

          <Typography variant="subtitle2" component="p">
            {`$${product?.price} MXN`}
          </Typography>
        </CardContent>
      </div>

      <CardActions className={classes.cardActions}>
        <Switch checked={status.isAvailable} size="medium" onChange={handleChange} />

        <Typography
          variant="caption"
          component="p"
          className={clsx({
            [classes.available]: status.isAvailable,
            [classes.unavailable]: !status.isAvailable,
          })}>
          {status.label}
        </Typography>
      </CardActions>
    </Card>
  );
}
