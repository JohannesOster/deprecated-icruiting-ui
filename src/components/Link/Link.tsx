import React from 'react';
import {BaseLink} from './Link.sc';
import {LinkProps} from './types';

export const Link: React.FC<LinkProps> = ({newTab, ...props}) => {
  return (
    <BaseLink
      {...props}
      {...(newTab ? {rel: 'noopener noreferrer', target: '_blank'} : {})}
    />
  );
};
