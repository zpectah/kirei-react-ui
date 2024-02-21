import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ModalFooter } from 'components';

describe('ModalFooter', () => {
  it('ModalFooter: default render', () => {
    const dom = render(<ModalFooter>Hello World</ModalFooter>);
    const element = dom.container.querySelector('footer') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('ModalFooter: default className', () => {
    const dom = render(<ModalFooter />);
    const element = dom.container.querySelector('footer') as HTMLElement;

    expect(element).toHaveClass('ModalFooter');
  });
});
