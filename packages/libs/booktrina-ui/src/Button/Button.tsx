import React from 'react';

export type ButtonProps = {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button>{text}</button>
  )
}
