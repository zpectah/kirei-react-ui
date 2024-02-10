import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from 'types';
import { MODAL_DEFAULT_VALUES, MODAL_ID_PREFIX, PORTAL_ELEMENT_ROOT } from 'core';
import { getRandomString } from 'utils';
import { useModalStyles, useModalProps, useModalHandling } from './hooks';
import { ModalContextProvider } from './context';
import { Button } from '../Button';

const Modal = (props: ModalProps) => {
  const {
    maxWidth = MODAL_DEFAULT_VALUES.maxWidth,
    children,
    style,
    styles,
    className,
    isOpen,
    onClose,
    id,
    ...rest
  } = props;
  const ModalStyleProps = { maxWidth, isOpen };

  const {
    dialogRef,
    isMounted,
    onClose: onDialogClose,
    onKeyDown,
    isOpening,
    isClosing,
  } = useModalHandling({ isOpen, onClose });
  const {
    composedStyles: { root, backdrop, container, dialog },
  } = useModalStyles({ styles }, { ...ModalStyleProps });
  const {
    root: rootProps,
    backdrop: backdropProps,
    container: containerProps,
    dialog: dialogProps,
  } = useModalProps({
    style,
    className,
    isOpening,
    isClosing,
    ...ModalStyleProps,
  });

  const rootId = useMemo(() => id ?? `${MODAL_ID_PREFIX}${getRandomString(8)}`, [id]);

  const ModalContextValue = {
    id: rootId,
    isOpen,
    onClose,
  };

  return (
    isMounted &&
    isOpen &&
    createPortal(
      <ModalContextProvider value={ModalContextValue}>
        <dialog id={rootId} ref={dialogRef} onKeyDown={onKeyDown} css={root} {...rootProps} {...rest}>
          <div css={backdrop} {...backdropProps} onClick={onDialogClose} />
          {/* TODO # create some sort of click outside ... and track this ... */}
          <div css={container} {...containerProps}>
            <div css={dialog} {...dialogProps}>
              {children}
              <Button onClick={onDialogClose}>Close</Button>
            </div>
          </div>
        </dialog>
      </ModalContextProvider>,
      PORTAL_ELEMENT_ROOT
    )
  );
};

export default Modal;
