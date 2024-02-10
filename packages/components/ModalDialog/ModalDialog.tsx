import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalDialogProps } from 'types';
import { MODAL_DIALOG_DEFAULT_VALUES, PORTAL_ELEMENT_ROOT } from 'core';
import { getRandomString } from 'utils';
import { useModalDialogStyles, useModalDialogProps, useModalDialogHandling } from './hooks';
import { ModalDialogContextProvider } from './context';
import { Button } from '../Button';

const ModalDialog = (props: ModalDialogProps) => {
  const {
    maxWidth = MODAL_DIALOG_DEFAULT_VALUES.maxWidth,
    children,
    style,
    styles,
    className,
    isOpen,
    onClose,
    id,
    ...rest
  } = props;
  const modalDialogStyleProps = { maxWidth, isOpen };

  const {
    dialogRef,
    isMounted,
    onClose: onDialogClose,
    onKeyDown,
    isOpening,
    isClosing,
  } = useModalDialogHandling({ isOpen, onClose });
  const {
    composedStyles: { root, backdrop },
  } = useModalDialogStyles({ styles }, { ...modalDialogStyleProps });
  const { root: rootProps, backdrop: backdropProps } = useModalDialogProps({
    style,
    className,
    isOpening,
    isClosing,
    ...modalDialogStyleProps,
  });

  const rootId = useMemo(() => id ?? `modal_${getRandomString(8)}`, [id]);

  const modalDialogContextValue = {
    id: rootId,
    isOpen,
    onClose,
  };

  return (
    isMounted &&
    isOpen &&
    createPortal(
      <ModalDialogContextProvider value={modalDialogContextValue}>
        <dialog id={rootId} ref={dialogRef} onKeyDown={onKeyDown} css={root} {...rootProps} {...rest}>
          <div css={backdrop} {...backdropProps} onClick={onDialogClose}></div>
          <div className="dialog">
            {children}
            <Button onClick={onDialogClose}>Close</Button>
          </div>
        </dialog>
      </ModalDialogContextProvider>,
      PORTAL_ELEMENT_ROOT
    )
  );
};

export default ModalDialog;
