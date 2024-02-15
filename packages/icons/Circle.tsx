import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Circle = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <circle fill="currentColor" cx="64" cy="64" r="52" />
    </svg>
  );
};

export default Circle;
