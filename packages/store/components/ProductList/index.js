import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import ProductItem from 'components/ProductItem';

import { useStyles } from './styles';

export default function ProductList() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.container} component="section">
      <div>
        <Typography variant="h6" component="h2">
          Artículos
        </Typography>

        <Grid className={classes.wrapperItems}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Grid>
      </div>
    </Grid>
  );
}
