import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from 'test-utilities';
import {Textarea} from '../Textarea';

describe('Textarea', () => {
  describe('label', () => {
    it('renders label', () => {
      const label = 'Label';
      render(<Textarea label={label} name="Textarea" />);
      expect(screen.queryByLabelText(label)).toBeInTheDocument();
    });
  });
  describe('description', () => {
    it('renders description', () => {
      const description = 'description';
      render(<Textarea description={description} />);
      expect(screen.queryAllByText(description)).toBeInTheDocument();
    });
  });
  describe('errors', () => {
    it('renders errors', () => {
      const errors = ['error1', 'error2'];
      render(<Textarea errors={errors} />);
      errors.forEach((error) =>
        expect(screen.queryAllByText(error)).toBeInTheDocument(),
      );
    });
  });
});
