import React, { FC } from 'react';
import { Title } from '@web-app/ui';
import { Link } from 'react-router-dom';

export const SignIn: FC = () => {
  return (
    <div>
      <Title text="Sign In" />
      <Link to="/sign-up">SignUp</Link>
    </div>
  );
};
