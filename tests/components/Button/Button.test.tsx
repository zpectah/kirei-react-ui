import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button, Link } from 'components';

describe('Button', () => {
  it('Button: default render', () => {
    const dom = render(<Button>Hello World</Button>);
    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Button: render as Link', () => {
    const dom = render(<Link as="a">Hello World</Link>);
    const element = dom.container.querySelector('a') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Button: default className', () => {
    const dom = render(<Button />);
    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element).toHaveClass('Button');
  });
});
