import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconButton } from 'components';

describe('IconButton', () => {
  it('IconButton: default render', () => {
    const dom = render(<IconButton>Hello World</IconButton>);
    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('IconButton: render as Link', () => {
    const dom = render(<IconButton as="a">Hello World</IconButton>);
    const element = dom.container.querySelector('a') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('IconButton: default className', () => {
    const dom = render(<IconButton />);
    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element).toHaveClass('IconButton');
  });
});
