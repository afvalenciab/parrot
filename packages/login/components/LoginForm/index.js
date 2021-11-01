import { useEffect } from 'react';
import { Button, Grid, TextField, Typography, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

import useLogin from 'hooks/useLogin';
import { LOCAL_STORAGE } from 'utils/constants';

import { useStyles } from './styles';

export default function LoginForm() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { register, handleSubmit } = useForm();
  const [loginState, fetchLogin] = useLogin();

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE.TOKEN_ACCESS)) {
      window.location.assign('/');
    }
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="center">
        <Grid container component="section" direction="column" className={classes.wrapperForm}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/parrotLogo.svg" width="100%" height="60px" alt="Parrot logo" />

          <form className={classes.wrapperFields} onSubmit={handleSubmit(fetchLogin)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              label="Usuario"
              autoComplete="username"
              autoFocus
              {...register('username', { required: true })}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              {...register('password', { required: true })}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loginState.loading}
              className={classes.btnLogin}>
              {loginState.loading ? (
                <CircularProgress color="secondary" size="1.5rem" />
              ) : (
                'Iniciar sesión'
              )}
            </Button>
          </form>

          {loginState.error && (
            <Typography variant="subtitle1" color="error" className={classes.paddingTop}>
              * El usuario o la contraseña son incorrectos
            </Typography>
          )}
        </Grid>

        <Typography variant="body1" align="center" color="secondary" className={classes.paddingTop}>
          {`Copyright © | Parrot ${new Date().getFullYear()}`}
        </Typography>
      </Grid>
    </Grid>
  );
}
