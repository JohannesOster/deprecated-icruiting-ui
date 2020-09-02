import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from 'test-utilities';
import {Input} from '../Input';

describe('Input', () => {
  describe('label', () => {
    it('renders label', () => {
      const label = 'Label';
      render(<Input label={label} name="input" />);
      expect(screen.queryByLabelText(label)).toBeInTheDocument();
    });
  });
  describe('description', () => {
    it('renders description', () => {
      const description = 'description';
      render(<Input description={description} />);
      expect(screen.queryAllByText(description)).toBeInTheDocument();
    });
  });
  describe('errors', () => {
    it('renders errors', () => {
      const errors = ['error1', 'error2'];
      render(<Input errors={errors} />);
      errors.forEach((error) =>
        expect(screen.queryAllByText(error)).toBeInTheDocument(),
      );
    });
  });
});
