import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { UseModalHandlingProps, UseModalHandlingReturn } from 'types';
import { useLastActiveFocus } from 'core';
import { useUiContext } from 'styles';

export const useModalHandling = ({
  isOpen,
  onClose,
  disableBackdropClose,
}: UseModalHandlingProps): UseModalHandlingReturn => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(isOpen);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);

  const modalRootRef = useRef<HTMLDialogElement | null>(null);
  const modalDialogRef = useRef<HTMLDivElement | null>(null);

  // TODO #context-values
  const { theme } = useUiContext();
  const transitionDuration = theme.transitions.duration.screen;

  const openHandler = () => {
    setOpen(true);
    setOpening(true);
    setTimeout(() => setOpening(false), transitionDuration);
  };
  const closeHandler = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      onClose();
    }, transitionDuration);
  };
  const keyDownHandler = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      // event.preventDefault();
      closeHandler();
    }
  };

  const backdropClickHandler = () => {
    if (!disableBackdropClose) {
      closeHandler();
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
