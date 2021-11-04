import { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import useProducts from 'hooks/useProducts';
import useSelectorsStore from 'providers/Stores/useSelectors';
import ProductItem from 'components/ProductItem';

import { useStyles } from './styles';

export default function ProductList({ categorySelected, storeSelected }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [lastProducts, setLastProducts] = useState([]);

  const { productsState } = useSelectorsStore();
  const { currentList } = useProducts({ storeId: storeSelected?.uuid });

  useEffect(() => {
    setLastProducts(productsState.list);
  }, [productsState.list]);

  useEffect(() => {
    if (currentList) setLastProducts(currentList);
  }, [currentList]);

  const listOfProducts = lastProducts.filter(
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
