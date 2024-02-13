import React from 'react';
import { IconProps } from 'types';

const MoreHorizontal = (props: IconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="MoreHorizontal">
        <circle cx="24" cy="64" r="12" />
        <g transform="matrix(1,0,0,1,40,0)">
          <circle cx="24" cy="64" r="12" />
        </g>
        <g transform="matrix(1,0,0,1,80,0)">
          <circle cx="24" cy="64" r="12" />
        </g>
      </g>
    </svg>
  );
};

export default MoreHorizontal;
