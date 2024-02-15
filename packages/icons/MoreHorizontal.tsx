import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const MoreHorizontal = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <g fill="currentColor">
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
