import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SkeletonProducts({ rows = 1 }) {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <React.Fragment>
      {Array.from(Array(rows).keys()).map((row, index) => (
        <Skeleton key={index} variant="rect" width="100%" height={121} />
      ))}
    </React.Fragment>
  );
}
