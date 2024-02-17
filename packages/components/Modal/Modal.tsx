import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from 'types';
import { MODAL_DEFAULT_VALUES, MODAL_ID_PREFIX } from 'core';
import { getRandomString } from 'utils';
import { Paper } from '../Paper';
import { useModalStyles, useModalProps, useModalHandling } from './hooks';
import { ModalContextProvider } from './context';

const Modal = (props: ModalProps) => {
  const {
    isFullscreen = MODAL_DEFAULT_VALUES.isFullscreen,
    maxWidth = MODAL_DEFAULT_VALUES.maxWidth,
    scroll = MODAL_DEFAULT_VALUES.scroll,
    children,
    className,
    disableBackdropClose,
    disableEscapeClose,
    id,
    isOpen,
    onClose,
    slotProps,
    style,
    styles,
    ...rest
  } = props;

  const styleProps = {
    disableBackdropClose,
    disableEscapeClose,
    isFullscreen,
    maxWidth,
    scroll,
  };
  const defaultSlotProps = {
    containerProps: { ...slotProps?.containerProps },
    backdropProps: { ...slotProps?.backdropProps },
    dialogProps: { ...slotProps?.dialogProps },
    PaperProps: { ...slotProps?.PaperProps },
  };

  const {
    isClosing,
    isMounted,
    isOpen: isDialogOpen,
    isOpening,
    modalDialogRef,
    modalRootRef,
    onBackdropClick,
    onCancel,
    onClose: onDialogClose,
    onKeyDown,
    portalElement,
  } = useModalHandling({
    disableBackdropClose,
    disableEscapeClose,
    isOpen,
    onClose,
  });
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
    className,
    isClosing,
    isOpen: isDialogOpen,
    isOpening,
    slotProps: defaultSlotProps,
    style,
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
          ref={modalRootRef}
          id={rootId}
          onKeyDown={onKeyDown}
          onCancel={onCancel}
          css={root}
          {...rootProps}
          {...rest}
        >
          <div css={container} {...containerProps}>
            <div css={backdrop} {...backdropProps} onClick={onBackdropClick} />
            <div ref={modalDialogRef} css={dialog} {...dialogProps}>
              <Paper css={paper} {...paperProps}>
                {children}
              </Paper>
            </div>
          </div>
        </dialog>
      </ModalContextProvider>,
      portalElement
    )
  );
};

export default Modal;
