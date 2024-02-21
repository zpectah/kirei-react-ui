import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalHeader } from 'components';

describe('ModalHeader', () => {
  it('ModalHeader: default render', () => {
    const dom = render(<ModalHeader title="Hello World" />);
    const element = dom.container.querySelector('header') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('ModalHeader: default className', () => {
    const dom = render(<ModalHeader />);
    const element = dom.container.querySelector('header') as HTMLElement;

    expect(element).toHaveClass('ModalHeader');
  });
});
