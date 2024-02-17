import React from 'react';
import { ModalBodyProps } from 'types';
import { useModalBodyStyles, useModalBodyProps } from './hooks';

const ModalBody = (props: ModalBodyProps) => {
  const { children, className, disableOffset, slotProps, style, styles, ...rest } = props;

  const styleProps = { disableOffset };
  const defaultSlotProps = {
    containerProps: { ...slotProps?.containerProps },
  };

  const {
    composedStyles: { root, container },
  } = useModalBodyStyles({ styles }, { ...styleProps });
  const { root: rootProps, container: containerProps } = useModalBodyProps({
    style,
    className,
    slotProps: defaultSlotProps,
    ...styleProps,
  });

  return (
    <article css={root} {...rootProps} {...rest}>
      <div css={container} {...containerProps}>
        {children}
      </div>
    </article>
  );
};

export default ModalBody;
