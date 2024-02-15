import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Hamburger = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <g fill="currentColor">
        <g transform="matrix(1,0,0,1,-0.0450998,-4)">
          <path d="M12,28L116,28L116,44L11.91,44L12,28Z" />
        </g>
        <path d="M11.955,56L116.045,56L116.045,72L11.91,72L11.955,56Z" />
        <g transform="matrix(1,0,0,1,-0.0450998,4)">
          <path d="M12,84L116.045,84L116.045,100L11.91,100L12,84Z" />
        </g>
      </g>
    </svg>
  );
};

export default Hamburger;
