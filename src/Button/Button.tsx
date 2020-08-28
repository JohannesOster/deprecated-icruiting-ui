import React from 'react';

export type Props = {
  background?: string;
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({children, background = 'black'}) => {
  return <button style={{background}}>{children}</button>;
};
