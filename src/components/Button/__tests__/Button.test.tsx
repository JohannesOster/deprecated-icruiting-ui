import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, fireEvent} from 'test-utilities';
import {Button} from '../Button';

describe('Button', () => {
  describe('children', () => {
    it('renders given children into button component', () => {
      const label = 'Buttonlabel';
      render(<Button>{label}</Button>);
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
  describe('onClick', () => {
    it('passes onClick to button', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} />);
      fireEvent.click(screen.getByRole('button'));
      expect(onClick).toBeCalled();
    });
  });
  describe('disabled', () => {
    it('passes disabled prop to button', () => {
      render(<Button disabled />);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });
  describe('isLoading', () => {
    it('hides children in isLoading state', () => {
      const label = 'Buttonlabel';
      render(<Button isLoading>{label}</Button>);
      expect(screen.getByText(label)).not.toBeVisible();
    });
    it("doesn't fire onClick in isLoading state", () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} isLoading />);
      fireEvent.click(screen.getByRole('button'));
      expect(onClick).not.toBeCalled();
    });
  });
});
