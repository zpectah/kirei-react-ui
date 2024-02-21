import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from 'components';

describe('Container', () => {
  it('Container: default render', () => {
    const dom = render(<Container>Hello World</Container>);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element.textContent).toBe('Hello World');
  });

  it('Container: default className', () => {
    const dom = render(<Container />);
    const element = dom.container.querySelector('div') as HTMLElement;

    expect(element).toHaveClass('Container');
  });
});
