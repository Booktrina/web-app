import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { RoutesEnum } from '../../../routes/routes';

export const NeedAuth: FC<any> = ({ children }) => {
  // TODO: refactor on store value
  const isLoggedIn: boolean = false;

  if (!isLoggedIn) {
    return <Navigate to={RoutesEnum.singIn} />;
  }

  return <>{children}</>;
};
