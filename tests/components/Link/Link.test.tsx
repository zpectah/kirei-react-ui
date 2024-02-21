import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from 'components';

describe('Link', () => {
  it('Link: default render', () => {
    const dom = render(<Link>Hello World</Link>);
    const element = dom.container.querySelector('a') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Link: render as Button', () => {
    const dom = render(<Link as="button">Hello World</Link>);
    const element = dom.container.querySelector('button') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Link: default className', () => {
    const dom = render(<Link />);
    const element = dom.container.querySelector('a') as HTMLElement;

    expect(element).toHaveClass('Link');
  });
});
