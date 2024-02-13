import React from 'react';
import { IconProps } from 'types';

const Hamburger = (props: IconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Menu">
        <path d="M12,28L116,28L116,44L11.91,44L12,28Z" />
        <path d="M11.955,56L116.045,56L116.045,72L11.91,72L11.955,56Z" />
        <path d="M12,84L116.045,84L116.045,100L11.91,100L12,84Z" />
      </g>
    </svg>
  );
};

export default Hamburger;
