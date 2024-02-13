import React from 'react';
import { IconProps } from 'types';

const MoreVertical = (props: IconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="MoreVertical">
        <g transform="matrix(1,0,0,1,40,40)">
          <circle cx="24" cy="64" r="12" />
        </g>
        <g transform="matrix(1,0,0,1,40,0)">
          <circle cx="24" cy="64" r="12" />
        </g>
        <g transform="matrix(1,0,0,1,40,-40)">
          <circle cx="24" cy="64" r="12" />
        </g>
      </g>
    </svg>
  );
};

export default MoreVertical;
