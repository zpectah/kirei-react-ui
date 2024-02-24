import clsx from 'clsx';
import { UseRadioProps, UseRadioPropsReturn } from 'types';
import { RADIO_ROOT } from 'core';

export const useRadioProps = (props: UseRadioProps): UseRadioPropsReturn => {
  const { style, className } = props;

  return {
    root: {
      className: clsx(RADIO_ROOT, className),
      style: { ...style },
    },
  };
};
