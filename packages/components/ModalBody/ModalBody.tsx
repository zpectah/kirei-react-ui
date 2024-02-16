import React from 'react';
import { ModalBodyProps } from 'types';
// import { MODAL_BODY_DEFAULT_VALUES } from 'core';
import { useModalBodyStyles, useModalBodyProps } from './hooks';

const ModalBody = (props: ModalBodyProps) => {
  const { style, styles, className, disableOffset, children, ...rest } = props;
  const styleProps = { disableOffset };

  const {
    composedStyles: { root, container },
  } = useModalBodyStyles({ styles }, { ...styleProps });
  const { root: rootProps, container: containerProps } = useModalBodyProps({ style, className, ...styleProps });

  return (
    <article css={root} {...rootProps} {...rest}>
      <div css={container} {...containerProps}>
        {children}
      </div>
    </article>
  );
};

export default ModalBody;
