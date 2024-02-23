import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Backward = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <g transform="matrix(1,0,0,1,15.6333,1.42109e-14)">
        <path
          fill="currentColor"
          d="M21.497,63.968L63.923,21.542L75.237,32.855L44,64L75.237,95.081L63.987,106.458L21.497,63.968Z"
        />
      </g>
    </svg>
  );
};

export default Backward;
