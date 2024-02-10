import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from 'types';
import { MODAL_DEFAULT_VALUES, MODAL_ID_PREFIX, PORTAL_ELEMENT_ROOT } from 'core';
import { getRandomString } from 'utils';
import { useModalStyles, useModalProps, useModalHandling } from './hooks';
import { ModalContextProvider } from './context';

const Modal = (props: ModalProps) => {
  const {
    maxWidth = MODAL_DEFAULT_VALUES.maxWidth,
    disableBackdropClose,
    children,
    style,
    styles,
    className,
    isOpen,
    onClose,
    id,
    ...rest
  } = props;
  const styleProps = { maxWidth, disableBackdropClose };

  const {
    modalRootRef,
    modalDialogRef,
    isMounted,
    onClose: onDialogClose,
    onKeyDown,
    onBackdropClick,
    isOpen: isDialogOpen,
    isOpening,
    isClosing,
  } = useModalHandling({ isOpen, onClose, disableBackdropClose });
  const {
    composedStyles: { root, backdrop, container, dialog },
  } = useModalStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    backdrop: backdropProps,
    container: containerProps,
    dialog: dialogProps,
  } = useModalProps({
    style,
    className,
    isOpen: isDialogOpen,
    isOpening,
    isClosing,
    ...styleProps,
  });

  const rootId = useMemo(() => id ?? `${MODAL_ID_PREFIX}${getRandomString(8)}`, [id]);

  const ModalContextValue = {
    id: rootId,
    isOpen,
    onClose: onDialogClose,
  };

  return (
    isMounted &&
    isDialogOpen &&
    createPortal(
      <ModalContextProvider value={ModalContextValue}>
        <dialog id={rootId} ref={modalRootRef} onKeyDown={onKeyDown} css={root} {...rootProps} {...rest}>
          <div css={backdrop} {...backdropProps} onClick={onBackdropClick} />
          <div css={container} {...containerProps}>
            <div ref={modalDialogRef} css={dialog} {...dialogProps}>
              {children}
            </div>
          </div>
        </dialog>
      </ModalContextProvider>,
      PORTAL_ELEMENT_ROOT
    )
  );
};

export default Modal;
