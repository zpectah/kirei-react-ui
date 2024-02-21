import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Typography } from 'components';

describe('Typography', () => {
  it('Typography: default render', () => {
    const dom = render(<Typography>Hello World</Typography>);
    const element = dom.container.querySelector('p') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Typography: render as H3 element', () => {
    const dom = render(<Typography as="h3">Hello World</Typography>);
    const element = dom.container.querySelector('h3') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Typography: default className', () => {
    const dom = render(<Typography>Hello World</Typography>);
    const element = dom.container.querySelector('p') as HTMLElement;

    expect(element).toHaveClass('Typography');
  });
});
