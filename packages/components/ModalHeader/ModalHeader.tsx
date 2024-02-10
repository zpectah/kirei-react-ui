import React from 'react';
import { ModalHeaderProps } from 'types';
// import { MODAL_HEADER_DEFAULT_VALUES } from 'core';
import { useModalHeaderStyles, useModalHeaderProps } from './hooks';

const ModalHeader = (props: ModalHeaderProps) => {
  const { style, styles, className, ...rest } = props;
  const styleProps = {};

  const {
    composedStyles: { root },
  } = useModalHeaderStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useModalHeaderProps({ style, className, ...styleProps });

  return <header css={root} {...rootProps} {...rest} />;
};

export default ModalHeader;
