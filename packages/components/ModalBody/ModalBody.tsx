import React from 'react';
import { ModalBodyProps } from 'types';
// import { MODAL_BODY_DEFAULT_VALUES } from 'core';
import { useModalBodyStyles, useModalBodyProps } from './hooks';

const ModalBody = (props: ModalBodyProps) => {
  const { style, styles, className, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useModalBodyStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useModalBodyProps({ style, className, ...styleProps });

  return <article css={root} {...rootProps} {...rest} />;
};

export default ModalBody;
