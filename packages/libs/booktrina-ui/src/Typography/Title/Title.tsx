import React, { FC } from 'react';

import type { TitleProps } from './typings';
import './styles.module.css';

export const Title: FC<TitleProps> = ({ text }) => {
  return <h1>{text}</h1>;
};
