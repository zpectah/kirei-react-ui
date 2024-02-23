import React from 'react';
import { SvgIconProps } from 'types';
import { useSvgIconProps } from 'styles';

const CheckboxEmpty = (props: SvgIconProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M116,17.48C116,14.456 113.544,12 110.52,12L17.48,12C14.456,12 12,14.456 12,17.48L12,110.52C12,113.544 14.456,116 17.48,116L110.52,116C113.544,116 116,113.544 116,110.52L116,17.48ZM100,31.885C100,29.741 98.259,28 96.115,28L31.885,28C29.741,28 28,29.741 28,31.885L28,96.115C28,98.259 29.741,100 31.885,100L96.115,100C98.259,100 100,98.259 100,96.115L100,31.885Z"
      />
    </svg>
  );
};

export default CheckboxEmpty;
