import React from 'react';
import { SvgIconAnimatedProps } from 'types';
import { useSvgIconProps } from 'styles';

const Spinner = ({ duration = 1, ...props }: SvgIconAnimatedProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M51.101,114.385C28.633,108.642 12,88.248 12,64C12,35.3 35.3,12 64,12C92.7,12 116,35.3 116,64C116,88.248 99.367,108.642 76.899,114.385L76.133,102.124C92.287,96.979 104,81.847 104,64C104,41.923 86.077,24 64,24C41.923,24 24,41.923 24,64C24,81.847 35.713,96.979 51.867,102.124L51.101,114.385Z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur={duration}
          repeatCount="indefinite"
        ></animateTransform>
      </path>
    </svg>
  );
};

export default Spinner;
