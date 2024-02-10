import React from 'react';
import { createPortal } from 'react-dom';
import { ModalDialogProps } from 'types';
import { MODAL_DIALOG_DEFAULT_VALUES, PORTAL_ELEMENT_ROOT } from 'core';
import { useModalDialogStyles, useModalDialogProps, useModalDialog } from './hooks';
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
    composedStyles: { root },
  } = useModalDialogStyles({ styles }, { ...modalDialogStyleProps });
  const { root: rootProps } = useModalDialogProps({ style, className, ...modalDialogStyleProps });
  const { dialogRef, isMounted, onClose: onDialogClose, onKeyDown } = useModalDialog({ isOpen, onClose });

  const modalDialogContextValue = {
    id: id ?? 'generated_id',
    isOpen,
    onClose,
  };

  return (
    isMounted &&
    createPortal(
      <ModalDialogContextProvider value={modalDialogContextValue}>
        <dialog ref={dialogRef} onKeyDown={onKeyDown} css={root} {...rootProps} {...rest}>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: -1,
              backgroundColor: 'rgba(125,125,125,0.5)',
            }}
            onClick={onDialogClose}
          ></div>
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
