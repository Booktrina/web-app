import React, { FC } from 'react';

import { useStyles } from './style';

export const Header: FC<any> = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h3>Booktrina</h3>
      <p>work in progress</p>
    </header>
  );
};
