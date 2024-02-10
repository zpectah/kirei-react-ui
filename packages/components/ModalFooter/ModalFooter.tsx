import React from 'react';
import { ModalBodyProps } from 'types';
// import { MODAL_FOOTER_DEFAULT_VALUES } from 'core';
import { useModalFooterStyles, useModalFooterProps } from './hooks';

const ModalFooter = (props: ModalBodyProps) => {
  const { style, styles, className, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useModalFooterStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useModalFooterProps({ style, className, ...styleProps });

  return <footer css={root} {...rootProps} {...rest} />;
};

export default ModalFooter;
