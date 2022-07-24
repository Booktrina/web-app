import React, { FC } from 'react';
import { Title } from '@web-app/ui';

import { AppRoutes } from './routes';

export const App: FC<any> = () => {
  return (
    <div className="App">
      <Title text="Some Title!" />
      <AppRoutes />
    </div>
  );
};
