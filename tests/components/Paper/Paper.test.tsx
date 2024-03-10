import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Paper } from 'components';

describe('Paper', () => {
  it('Paper: default render', () => {
    const dom = render(<Paper>Hello World</Paper>);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Paper: default className', () => {
    const dom = render(<Paper />);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('Paper');
  });
});
