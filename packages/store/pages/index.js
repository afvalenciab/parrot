import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LOCAL_STORAGE } from 'utils/constants';

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
  loadingPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

export default function Store() {
  const [tokenAccess, setTokenAccess] = useState(null);
  const classes = useStyles();
  const router = useRouter();
  const { access, refresh } = router.query;
  const [categorySelected, setCategorySelected] = useState(null);

  useEffect(() => {
    if (access && refresh) {
      localStorage.setItem(LOCAL_STORAGE.TOKEN_ACCESS, access);
      localStorage.setItem(LOCAL_STORAGE.TOKEN_REFRESH, refresh);
      setTokenAccess(access);
      router.replace({ pathname: '/' });
    }
  }, [access, refresh]);

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN_ACCESS);

    if (!tokenAccess) {
      if (token) {
        setTokenAccess(token);
      } else {
        router.push({ pathname: '/login' });
      }
    }
  }, [tokenAccess]);

  return (
    <Container component="main" maxWidth="xl" className={classes.resetPadding}>
      {tokenAccess ? (
        <Grid className={classes.root}>
          <Header />

          <CategoryList
            onSelectCategory={setCategorySelected}
            categorySelected={categorySelected}
          />

          <ProductList categorySelected={categorySelected} />
        </Grid>
      ) : (
        <Grid className={classes.loadingPage}>
          <CircularProgress size={60} />
        </Grid>
      )}
    </Container>
  );
}
