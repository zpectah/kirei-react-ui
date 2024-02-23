import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Radio = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M64,12C92.7,12 116,35.3 116,64C116,92.7 92.7,116 64,116C35.3,116 12,92.7 12,64C12,35.3 35.3,12 64,12ZM64,28C83.869,28 100,44.131 100,64C100,83.869 83.869,100 64,100C44.131,100 28,83.869 28,64C28,44.131 44.131,28 64,28ZM64,44.412C75.038,44.412 84,53.281 84,64.206C84,75.131 75.038,84 64,84C52.962,84 44,75.131 44,64.206C44,53.281 52.962,44.412 64,44.412Z"
      />
    </svg>
  );
};

export default Radio;
