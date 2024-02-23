import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Minus = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path fill="currentColor" d="M12,56L116.09,56L116.09,72L11.91,72L12,56Z" />
    </svg>
  );
};

export default Minus;
