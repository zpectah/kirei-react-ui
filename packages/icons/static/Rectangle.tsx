import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Rectangle = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M116,17.48C116,14.456 113.544,12 110.52,12L17.48,12C14.456,12 12,14.456 12,17.48L12,110.52C12,113.544 14.456,116 17.48,116L110.52,116C113.544,116 116,113.544 116,110.52L116,17.48Z"
      />
    </svg>
  );
};

export default Rectangle;
