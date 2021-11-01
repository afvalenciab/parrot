import { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { LOCAL_STORAGE, EXPIRE_MINUTES, CLOSE_MINUTES } from 'utils/constants';
import { isTokenExpired, logOut } from 'utils/auth';
import { refreshTokenRequest } from 'utils/request/auth';

import { useStyles } from './styles';

export default function SessionExpire() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [showTimeWarning, setShowTimeWarning] = useState(false);

  const startTimeSession = () => {
    const date = new Date(new Date().getTime() + EXPIRE_MINUTES * 60 * 1000).getTime();

    localStorage.setItem(LOCAL_STORAGE.TOKEN_EXPIRE_AT, date);
  };

  const checkExpireTime = () => {
    let isExpired;
    const tokenExpireAt = localStorage.getItem(LOCAL_STORAGE.TOKEN_EXPIRE_AT);
    const closeSessionAt = localStorage.getItem(LOCAL_STORAGE.CLOSE_SESSION_AT);

    if (!closeSessionAt) {
      isExpired = isTokenExpired(tokenExpireAt);

      if (isExpired && !showTimeWarning && tokenExpireAt) {
        setShowTimeWarning(true);
      }
    } else {
      isExpired = isTokenExpired(closeSessionAt);

      if (isExpired) {
        localStorage.removeItem(LOCAL_STORAGE.CLOSE_SESSION_AT);
        logOut();
      }
    }
  };

  useEffect(() => {
    const tokenExpireAt = localStorage.getItem(LOCAL_STORAGE.TOKEN_EXPIRE_AT);
    const closeSessionAt = localStorage.getItem(LOCAL_STORAGE.CLOSE_SESSION_AT);

    if (!tokenExpireAt && !closeSessionAt) {
      startTimeSession();
    }

    const intervalId = setInterval(checkExpireTime, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  const handleCloseDialog = () => {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN_EXPIRE_AT);

    const date = new Date(new Date().getTime() + CLOSE_MINUTES * 60 * 1000).getTime();
    localStorage.setItem(LOCAL_STORAGE.CLOSE_SESSION_AT, date);

    setShowTimeWarning(false);
  };

  const handleConfirmDialog = async () => {
    try {
      const { access, refresh } = await refreshTokenRequest(
        localStorage.getItem(LOCAL_STORAGE.TOKEN_REFRESH),
      );

      localStorage.setItem(LOCAL_STORAGE.TOKEN_ACCESS, access);
      localStorage.setItem(LOCAL_STORAGE.TOKEN_REFRESH, refresh);

      startTimeSession();
      setShowTimeWarning(false);
    } catch (error) {
      logOut();
    }
  };

  return (
    <Dialog open={showTimeWarning} onClose={handleCloseDialog}>
      <DialogTitle>La sesión terminará en menos de 5 minutos</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogText}>
          ¿Desea extender el tiempo de la sesión?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} variant="outlined" className={classes.dialogButton}>
          Cancel
        </Button>
        <Button
          onClick={handleConfirmDialog}
          variant="contained"
          color="primary"
          className={classes.dialogButton}>
          Extender sesión
        </Button>
      </DialogActions>
    </Dialog>
  );
}
