import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import CategoryList from 'components/CategoryList';
import ProductList from 'components/ProductList';

const useStyles = makeStyles({
  resetPadding: {
    padding: 0,
  },
  root: {
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gridTemplateRows: '70px 1fr',
    height: '100vh',
    gap: '.5rem',
    gridTemplateAreas: `'header header'
                        'categories products'`,
    '@media (max-width: 1000px)': {
      gridTemplateAreas: `'header header'
                          'categories categories'
                          'products products'`,
      height: '100%',
    },
  },
});

export default function Store() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl" className={classes.resetPadding}>
      <Grid className={classes.root}>
        <Header />

        <CategoryList />

        <ProductList />
      </Grid>
    </Container>
  );
}
