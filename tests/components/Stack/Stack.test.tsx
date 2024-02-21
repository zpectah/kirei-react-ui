import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stack } from 'components';

describe('Stack', () => {
  it('Stack: default render', () => {
    const dom = render(<Stack>Hello World</Stack>);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Stack: default className', () => {
    const dom = render(<Stack />);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('Stack');
  });
});
