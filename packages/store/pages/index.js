import { useState, useEffect } from 'react';
import { Container, CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { LOCAL_STORAGE } from 'utils/constants';
import { redirectToLogin } from 'utils/auth';

import Header from 'components/Header';
import CategoryList from 'components/CategoryList';
import ProductList from 'components/ProductList';
import SessionExpire from 'components/SessionExpire';

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
  const classes = useStyles();
  const [tokenAccess, setTokenAccess] = useState(null);

  const [storeSelected, setStoreSelected] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);
  let token;

  useEffect(() => {
    token = localStorage.getItem(LOCAL_STORAGE.TOKEN_ACCESS);

    if (token) {
      setTokenAccess(token);
    } else {
      redirectToLogin();
    }
  }, []);

  return (
    <Container component="main" maxWidth="xl" className={classes.resetPadding}>
      {tokenAccess ? (
        <>
          <Grid className={classes.root}>
            <Header storeSelected={storeSelected} setStoreSelected={setStoreSelected} />

            <CategoryList
              onSelectCategory={setCategorySelected}
              categorySelected={categorySelected}
            />

            <ProductList storeSelected={storeSelected} categorySelected={categorySelected} />
          </Grid>

          <SessionExpire />
        </>
      ) : (
        <Grid className={classes.loadingPage}>
          <CircularProgress size={60} />
        </Grid>
      )}
    </Container>
  );
}
