import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const MoreVertical = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M64,92C70.623,92 76,97.377 76,104C76,110.623 70.623,116 64,116C57.377,116 52,110.623 52,104C52,97.377 57.377,92 64,92ZM64,52C70.623,52 76,57.377 76,64C76,70.623 70.623,76 64,76C57.377,76 52,70.623 52,64C52,57.377 57.377,52 64,52ZM64,12C70.623,12 76,17.377 76,24C76,30.623 70.623,36 64,36C57.377,36 52,30.623 52,24C52,17.377 57.377,12 64,12Z"
      />
    </svg>
  );
};

export default MoreVertical;
