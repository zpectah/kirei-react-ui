import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Hamburger = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M11.955,88L116,88L116,104L11.865,104L11.955,88ZM11.955,56L116.045,56L116.045,72L11.91,72L11.955,56ZM11.955,24L115.955,24L115.955,40L11.865,40L11.955,24Z"
      />
    </svg>
  );
};

export default Hamburger;
