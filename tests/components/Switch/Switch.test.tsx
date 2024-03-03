import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from 'components';

describe('Switch', () => {
  it('Switch: default render', () => {
    const dom = render(<Switch />);
    const element = dom.container.querySelector('label') as HTMLElement;

    expect(element).toBeInTheDocument();
  });

  it('Switch: default className', () => {
    const dom = render(<Switch />);
    const element = dom.container.querySelector('label') as HTMLElement;

    expect(element).toHaveClass('Switch');
  });
});
