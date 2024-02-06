import React, { ElementType } from 'react';
import { ModalDialogProps } from 'types';
import { MODAL_DIALOG_DEFAULT_VALUES } from 'core';
import { useModalDialogStyles, useModalDialogProps } from './hooks';

const ModalDialog = <T extends ElementType>(props: ModalDialogProps<T>) => {
  const {
    as: Component = MODAL_DIALOG_DEFAULT_VALUES.as,
    maxWidth = MODAL_DIALOG_DEFAULT_VALUES.maxWidth,
    children,
    style,
    styles,
    className,
    ...rest
  } = props;
  const modalDialogStyleProps = { maxWidth };

  const {
    composedStyles: { root },
  } = useModalDialogStyles({ styles }, { ...modalDialogStyleProps });
  const { root: rootProps } = useModalDialogProps({ style, className, ...modalDialogStyleProps });

  return (
    <Component css={root} {...rootProps} {...rest}>
      {children}
    </Component>
  );
};

export default ModalDialog;
