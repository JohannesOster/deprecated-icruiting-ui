import React from 'react';
import {Link} from './Link';
import {LinkProps} from './types';

export default {
  title: 'Link',
  component: Link,
};

export const Default: React.SFC<LinkProps> = () => <Link href="/">Link</Link>;
