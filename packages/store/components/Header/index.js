import { useState } from 'react';
import { Button, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useStyles } from './styles';

export default function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = useState(null);
  const [storeSelected, setStoreSelected] = useState({ name: 'Store Apple Challenge' });

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectStore = store => {
    setStoreSelected(store);
    setAnchorEl(null);
  };

  return (
    <Grid className={classes.container} component="header">
      <Grid container alignItems="center" justifyContent="space-between">
        <div>
          <Button variant="contained" color="default" onClick={handleOpenMenu}>
            {storeSelected?.name}
          </Button>
          <Menu
            id="categoryMenu"
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => handleSelectStore({ name: 'Store Android Challenge' })}>
              Store Android Challenge
            </MenuItem>
            <MenuItem onClick={() => handleSelectStore({ name: 'Store DiDi' })}>
              Store DiDi
            </MenuItem>
            <MenuItem onClick={() => handleSelectStore({ name: 'Store Uber' })}>
              Store Uber
            </MenuItem>
          </Menu>
        </div>

        <Grid className={classes.user}>
          <Grid container alignItems="center" className={classes.username}>
            <PersonOutlineIcon color="secondary" />
            <Typography variant="caption" color="secondary" align="center">
              Andres Valencia
            </Typography>
          </Grid>

          <Button variant="outlined" color="secondary">
            Salir
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
