import React from 'react';
import { IconProps } from 'types';

const Close = (props: IconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M18,30L30,18L64,52L98,18L110,30L76,64L110,98L98,110L64,76L30,110L18,98L52,64L18,30Z"
      />
    </svg>
  );
};

export default Close;
