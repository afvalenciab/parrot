import { useState, useEffect } from 'react';
import { Button, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { Skeleton } from 'parrot-ui';

import useDispatcherStores from 'providers/Stores/useDispatcher';
import useSelectorsStore from 'providers/Stores/useSelectors';

import { logOut } from 'utils/auth';

import { useStyles } from './styles';

export default function Header({ storeSelected, setStoreSelected }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = useState(null);

  const { getStores, getProducts } = useDispatcherStores();
  const { storesState } = useSelectorsStore();

  useEffect(() => {
    getStores();
  }, []);

  useEffect(() => {
    const { data } = storesState;

    if (storesState.loaded && data?.stores?.length) {
      setStoreSelected(data.stores[0]);
      getProducts({ storeId: data.stores[0]?.uuid });
    }
  }, [storesState.loaded]);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectStore = store => {
    setStoreSelected(store);
    setAnchorEl(null);
    getProducts({ storeId: store.uuid });
  };

  return (
    <Grid className={classes.container} component="header">
      <Grid container alignItems="center" justifyContent="space-between">
        <div>
          {storesState.loading ? (
            <Skeleton variant="rect" width={230} height={36} style={{ backgroundColor: 'gray' }} />
          ) : (
            <>
              <Button variant="contained" color="default" onClick={handleOpenMenu}>
                {storeSelected?.name}
              </Button>
              <Menu
                id="categoryMenu"
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}>
                {storesState?.data?.stores.map(item => (
                  <MenuItem id={item.uuid} key={item.uuid} onClick={() => handleSelectStore(item)}>
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </div>

        <Grid className={classes.user}>
          <Grid container alignItems="center" className={classes.username}>
            <PersonOutlineIcon color="secondary" />
            {storesState.loading ? (
              <Skeleton
                variant="rect"
                width={200}
                height={19}
                style={{ backgroundColor: 'gray' }}
              />
            ) : (
              <Typography variant="caption" color="secondary" align="center">
                {storesState?.data?.username || storesState?.data?.email}
              </Typography>
            )}
          </Grid>

          <Button variant="outlined" color="secondary" onClick={() => logOut()}>
            Salir
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
