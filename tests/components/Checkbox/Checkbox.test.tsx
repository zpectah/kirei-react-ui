import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from 'components';

describe('Checkbox', () => {
  it('Checkbox: default render', () => {
    const dom = render(<Checkbox />);
    const element = dom.container.querySelector('label') as HTMLElement;

    expect(element).toBeInTheDocument();
  });

  it('Checkbox: default className', () => {
    const dom = render(<Checkbox />);
    const element = dom.container.querySelector('label') as HTMLElement;

    expect(element).toHaveClass('Checkbox');
  });
});
