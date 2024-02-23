import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Close = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M18,30L30,18L64,52L98,18L110,30L76,64L110,98L98,110L64,76L30,110L18,98L52,64L18,30Z"
      />
    </svg>
  );
};

export default Close;
