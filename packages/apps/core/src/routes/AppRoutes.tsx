import React, { FC } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Title } from '@web-app/ui';

import { SignIn, SignUp } from '../components/modules';

import { NeedAuth } from '../components/shared/NeedAuth';

import { RoutesEnum } from './routes';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutesEnum.singIn} element={<SignIn />} />
        <Route path={RoutesEnum.singUp} element={<SignUp />} />

        <Route
          path={RoutesEnum.dashboard}
          element={
            <NeedAuth>
              <Title text="Dashboard" />
            </NeedAuth>
          }
        />

        <Route path="*" element={<p>Not Founded</p>} />
        <Route path="/" element={<Navigate to={RoutesEnum.singIn} replace />} />
      </Routes>
    </Router>
  );
};
