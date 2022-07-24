import React from 'react';

import { Header } from '../../components/shared';

export const UnAuthLayout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
