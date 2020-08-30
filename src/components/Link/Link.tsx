import React from 'react';
import {BaseLink} from './Link.sc';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = (props) => {
  return <BaseLink {...props} />;
};
