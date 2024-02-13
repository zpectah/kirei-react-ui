import React from 'react';
import { IconProps } from 'types';

const Plus = (props: IconProps) => {
  return (
    <span
      style={{
        width: '1.35em',
        height: '1.35em',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="1em"
        height="1em"
        // transform="scale(0.9)"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline-flex', alignSelf: 'center' }}
        {...props}
      >
        <path
          id="Plus"
          d="M56,11.91L72,11.91L72,56L116.09,56L116.09,72L72,72L72,116.09L56,116.09L56,72L11.91,72L11.91,56L56,56L56,11.91Z"
        />
      </svg>
    </span>
  );
};

export default Plus;
