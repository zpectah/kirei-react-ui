import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Plus = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M56,11.91L72,11.91L72,56L116.09,56L116.09,72L72,72L72,116.09L56,116.09L56,72L11.91,72L11.91,56L56,56L56,11.91Z"
      />
    </svg>
  );
};

export default Plus;
