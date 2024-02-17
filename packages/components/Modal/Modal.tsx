import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from 'types';
import { MODAL_DEFAULT_VALUES, MODAL_ID_PREFIX } from 'core';
import { getRandomString } from 'utils';
import { useModalStyles, useModalProps, useModalHandling } from './hooks';
import { ModalContextProvider } from './context';

const Modal = (props: ModalProps) => {
  const {
    maxWidth = MODAL_DEFAULT_VALUES.maxWidth,
    isFullscreen = MODAL_DEFAULT_VALUES.isFullscreen,
    disableBackdropClose,
    disableEscapeClose,
    children,
    style,
    styles,
    className,
    isOpen,
    onClose,
    id,
    scroll = MODAL_DEFAULT_VALUES.scroll,
    ...rest
  } = props;
  const styleProps = { maxWidth, disableBackdropClose, disableEscapeClose, isFullscreen, scroll };

  const {
    portalElement,
    modalRootRef,
    modalDialogRef,
    isMounted,
    onClose: onDialogClose,
    onKeyDown,
    onCancel,
    onBackdropClick,
    isOpen: isDialogOpen,
    isOpening,
    isClosing,
  } = useModalHandling({ isOpen, onClose, disableBackdropClose, disableEscapeClose });
  const {
    composedStyles: { root, backdrop, container, dialog, paper },
  } = useModalStyles({ styles }, { ...styleProps });
  const {
    root: rootProps,
    backdrop: backdropProps,
    container: containerProps,
    dialog: dialogProps,
    paper: paperProps,
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
    scroll,
  };

  return (
    isMounted &&
    isDialogOpen &&
    createPortal(
      <ModalContextProvider value={ModalContextValue}>
        <dialog
          id={rootId}
          ref={modalRootRef}
          onKeyDown={onKeyDown}
          onCancel={onCancel}
          css={root}
          {...rootProps}
          {...rest}
        >
          <div css={container} {...containerProps}>
            <div css={backdrop} {...backdropProps} onClick={onBackdropClick} />
            <div ref={modalDialogRef} css={dialog} {...dialogProps}>
              {/* TODO Make this as Paper component with their props */}
              <div css={paper} {...paperProps}>
                {children}
              </div>
            </div>
          </div>
        </dialog>
      </ModalContextProvider>,
      portalElement
    )
  );
};

export default Modal;
