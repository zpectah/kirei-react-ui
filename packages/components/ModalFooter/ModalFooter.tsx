import React from 'react';
import { ModalFooterProps } from 'types';
import { MODAL_FOOTER_DEFAULT_VALUES } from 'core';
import { useModalFooterStyles, useModalFooterProps } from './hooks';

const ModalFooter = (props: ModalFooterProps) => {
  const {
    justifyContent = MODAL_FOOTER_DEFAULT_VALUES.justifyContent,
    className,
    divider,
    style,
    styles,
    ...rest
  } = props;
  const styleProps = { justifyContent, divider };

  const {
    composedStyles: { root },
  } = useModalFooterStyles({ styles }, { ...styleProps });
  const { root: rootProps } = useModalFooterProps({ style, className, ...styleProps });

  return <footer css={root} {...rootProps} {...rest} />;
};

export default ModalFooter;
