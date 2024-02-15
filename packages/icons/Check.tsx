import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Check = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <path fill="currentColor" d="M12,66L22.343,55.659L47.799,81.115L104.686,24.228L116,35.542L48.77,102.772L12,66Z" />
    </svg>
  );
};

export default Check;
