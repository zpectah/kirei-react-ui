import React from 'react';
import { SvgIconAnimatedProps } from 'types';
import { useSvgIconProps } from 'styles';

const LoaderHorizontal = ({ duration = 1, ...props }: SvgIconAnimatedProps) => {
  const { styles, ...rest } = useSvgIconProps(props, true);

  return (
    <svg viewBox="0 0 128 64" xmlns="http://www.w3.org/2000/svg" css={styles} {...rest}>
      <g fill="currentColor" transform="matrix(1,0,0,1,-56,-88)">
        <g transform="matrix(1,0,0,1,56,88)">
          <circle cx="27" cy="32" r="15">
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="0"
              dur={duration}
              values="1;0"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="matrix(1,0,0,1,56,88)">
          <circle cx="64" cy="32" r="15">
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="0.20"
              dur={duration}
              values="1;0"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="matrix(1,0,0,1,56,88)">
          <circle cx="101" cy="32" r="15">
            <animate
              fill="freeze"
              attributeName="opacity"
              begin="0.40"
              dur={duration}
              values="1;0"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
};

export default LoaderHorizontal;
