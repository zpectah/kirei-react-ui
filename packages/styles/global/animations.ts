/* Source: https://animate.style/, https://github.com/animate-css/animate.css */

import { keyframes } from '@emotion/react';

export const animations = {
  fadeInUp: keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
  fadeOutDown: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  fadeOut: keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `,
  zoomIn: keyframes`
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {
      opacity: 1;
    }
  `,
  zoomOut: keyframes`
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    to {
      opacity: 0;
    }
  `,
  headShake: keyframes`
    0% {
      transform: translateX(0);
    }
    6.5% {
      transform: translateX(-6px) rotateY(-9deg);
    }
    18.5% {
      transform: translateX(5px) rotateY(7deg);
    }
    31.5% {
      transform: translateX(-3px) rotateY(-5deg);
    }
    43.5% {
      transform: translateX(2px) rotateY(3deg);
    }
    50% {
      transform: translateX(0);
    }  
  `,
};
