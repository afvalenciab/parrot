import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useSelectorsStore } from 'providers/Stores/useSelectors';
import ProductItem from 'components/ProductItem';

import { useStyles } from './styles';

export default function ProductList({ categorySelected }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { productsState } = useSelectorsStore();

  const listOfProducts = productsState.list.filter(
    item => item?.category?.uuid === categorySelected?.uuid,
  );

  return (
    <Grid className={classes.container} component="section">
      <div>
        <Typography variant="h6" component="h2">
          Artículos
        </Typography>

        <Grid className={classes.wrapperItems}>
          {listOfProducts.map(product => (
            <ProductItem key={product.uuid} product={product} />
          ))}
        </Grid>
      </div>
    </Grid>
  );
}
