import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from 'components';

describe('Radio', () => {
  it('Radio: default render', () => {
    const dom = render(<Radio />);
    const element = dom.container.querySelector('label') as HTMLElement;

    expect(element).toBeInTheDocument();
  });

  it('Radio: default className', () => {
    const dom = render(<Radio />);
    const element = dom.container.querySelector('label') as HTMLElement;

    expect(element).toHaveClass('Radio');
  });
});
