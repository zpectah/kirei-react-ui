import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const MoreHorizontal = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M24,52C30.623,52 36,57.377 36,64C36,70.623 30.623,76 24,76C17.377,76 12,70.623 12,64C12,57.377 17.377,52 24,52ZM64,52C70.623,52 76,57.377 76,64C76,70.623 70.623,76 64,76C57.377,76 52,70.623 52,64C52,57.377 57.377,52 64,52ZM104,52C110.623,52 116,57.377 116,64C116,70.623 110.623,76 104,76C97.377,76 92,70.623 92,64C92,57.377 97.377,52 104,52Z"
      />
    </svg>
  );
};

export default MoreHorizontal;
