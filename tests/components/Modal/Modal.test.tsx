import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from 'components';

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn();
  HTMLDialogElement.prototype.close = jest.fn();
});

describe('Modal', () => {
  it('Modal: default render', () => {
    render(
      <Modal isOpen onClose={jest.fn()}>
        Hello World
      </Modal>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('Modal: Backdrop', () => {
    render(
      <Modal isOpen onClose={jest.fn()} slotProps={{ backdropProps: { 'data-testid': 'test-backdrop' } }}>
        Hello World
      </Modal>
    );

    expect(screen.getByTestId('test-backdrop')).toBeInTheDocument();
  });

  it('Modal: Paper', () => {
    render(
      <Modal isOpen onClose={jest.fn()} slotProps={{ paperProps: { 'data-testid': 'test-paper' } }}>
        Hello World
      </Modal>
    );

    expect(screen.getByTestId('test-paper')).toBeInTheDocument();
  });
});
