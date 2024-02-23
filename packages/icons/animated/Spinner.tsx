import React from 'react';
import { SvgIconAnimatedProps } from 'types';
import { useSvgIconProps } from 'styles';

const Spinner = ({ duration = 1, ...props }: SvgIconAnimatedProps) => {
  const { styles, ...rest } = useSvgIconProps(props);

  return (
    <svg viewBox="0 0 128 128" css={styles} {...rest}>
      <path
        fill="currentColor"
        d="M68,92L60,92L60,116L68,116L68,92ZM86.627,80.971L80.971,86.627L97.941,103.598L103.598,97.941L86.627,80.971ZM41.373,80.971L24.509,97.834L30.166,103.491L47.029,86.627L41.373,80.971ZM36,60L12.152,60L12.152,68L36,68L36,60ZM115.848,60L92,60L92,68L115.848,68L115.848,60ZM97.834,24.509L80.971,41.373L86.627,47.029L103.491,30.166L97.834,24.509ZM30.059,24.402L24.402,30.059L41.373,47.029L47.029,41.373L30.059,24.402ZM68,12L60,12L60,36L68,36L68,12Z"
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
