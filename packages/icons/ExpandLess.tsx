import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const ExpandLess = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <g transform="matrix(1,0,0,1,0.0450998,15.5882)">
        <path
          fill="currentColor"
          d="M32.874,75.282L21.497,64L63.955,21.542L106.413,64L95.099,75.282L63.955,44L32.874,75.282Z"
        />
      </g>
    </svg>
  );
};

export default ExpandLess;
