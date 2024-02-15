import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const Checkbox = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M116,17.48C116,14.456 113.544,12 110.52,12L17.48,12C14.456,12 12,14.456 12,17.48L12,110.52C12,113.544 14.456,116 17.48,116L110.52,116C113.544,116 116,113.544 116,110.52L116,17.48ZM28,66.5L38.157,56.343L52.799,70.985L89.284,34.5L99.784,45L53,91.784L28,66.5Z"
      />
    </svg>
  );
};

export default Checkbox;
