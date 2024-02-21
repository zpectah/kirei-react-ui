import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalBody } from 'components';

describe('ModalBody', () => {
  it('ModalBody: default render', () => {
    const dom = render(<ModalBody>Hello World</ModalBody>);
    const element = dom.container.querySelector('article') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('ModalBody: default className', () => {
    const dom = render(<ModalBody />);
    const element = dom.container.querySelector('article') as HTMLElement;

    expect(element).toHaveClass('ModalBody');
  });
});
