import { useEffect, useRef, useState, KeyboardEvent, MouseEvent } from 'react';
import { UseModalHandlingProps, UseModalHandlingReturn } from 'types';
import { PORTAL_ELEMENT_ROOT, MODAL_ROOT, useLastActiveFocus } from 'core';
import { useUiContext } from 'styles';

export const useModalHandling = ({
  isOpen,
  onClose,
  disableBackdropClose,
  disableEscapeClose,
}: UseModalHandlingProps): UseModalHandlingReturn => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(isOpen);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);

  const modalRootRef = useRef<HTMLDialogElement | null>(null);
  const modalDialogRef = useRef<HTMLDivElement | null>(null);

  const { theme } = useUiContext();

  const openHandler = () => {
    setOpen(true);
    setOpening(true);
    setTimeout(() => setOpening(false), theme.transitions.duration.screen);
  };
  const closeHandler = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      setTimeout(() => onClose(), 10);
    }, theme.transitions.duration.screen);
  };
  const backdropClickHandler = () => {
    if (!disableBackdropClose) closeHandler();
  };
  const keyDownHandler = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (disableEscapeClose) {
      event.preventDefault();
      event.stopPropagation();

      return;
    }
    if (!event.isPropagationStopped() || !event.isDefaultPrevented()) {
      const allModalNodes = PORTAL_ELEMENT_ROOT.querySelectorAll(`.${MODAL_ROOT}`);
      const lastModal = allModalNodes[allModalNodes.length - 1];

      if (event.key === 'Escape') {
        if (event.currentTarget === lastModal) closeHandler();
      }
    }
  };

  useLastActiveFocus(isOpen);

  useEffect(() => {
    const modalElement = modalRootRef.current;

    if (modalElement) {
      if (open) modalElement.showModal();
      if (!open && !closing) modalElement.close();
    }
  }, [open, closing]);

  useEffect(() => {
    if (isOpen) openHandler();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) closeHandler();
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return {
    modalRootRef,
    modalDialogRef,
    isMounted: mounted,
    isOpen: open,
    isOpening: opening,
    isClosing: closing,
    onClose: closeHandler,
    onKeyDown: keyDownHandler,
    onBackdropClick: backdropClickHandler,
  };
};
