import React from 'react';
import {render} from 'test-utilities';
import {Button} from '../Button';

describe('Button', () => {
  describe('children', () => {
    it('renders given children into button component', () => {
      const label = 'Buttonlabel';
      const {getByText} = render(<Button>{label}</Button>);
      getByText(label);
    });
  });
});
