import { useEffect } from 'react';
import { Button, Box, Grid, TextField, Typography, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import useLogin from 'hooks/useLogin';

import { useStyles } from './styles';

export default function LoginForm() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { register, handleSubmit } = useForm();
  const [loginState, fetchLogin] = useLogin();

  useEffect(() => {
    const { data } = loginState;

    if (loginState.loaded) {
      window.location.replace(
        `http://localhost:4000/?access=${data.access}&refresh=${data.refresh}`,
      );
    }
  }, [loginState.loaded]);

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="center">
        <Grid container component="section" direction="column" className={classes.wrapperForm}>
          <Image
            src="/images/parrotLogo.svg"
            width="60px"
            height="60px"
            alt="Parrot logo"
            priority
          />

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
            <Box pt={2}>
              <Typography variant="subtitle1" color="error">
                * El usuario o la contraseña son incorrectos
              </Typography>
            </Box>
          )}
        </Grid>

        <Box mt={2}>
          <Typography variant="body1" align="center" color="secondary">
            {`Copyright © | Parrot ${new Date().getFullYear()}`}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
