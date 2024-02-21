import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Backdrop } from 'components';

describe('Backdrop', () => {
  it('Backdrop: default render', () => {
    const dom = render(<Backdrop>Hello World</Backdrop>);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Backdrop: default className', () => {
    const dom = render(<Backdrop />);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('Backdrop');
  });
});
