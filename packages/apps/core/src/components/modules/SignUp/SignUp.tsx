import React, { FC } from 'react';
import { Title } from '@web-app/ui';
import { Link } from 'react-router-dom';

export const SignUp: FC = () => {
  return (
    <div>
      <Title text="Sign Un" />
      <Link to="/sign-in">SignIn</Link>
    </div>
  );
};
