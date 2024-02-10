import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { UseModalHandlingProps, UseModalHandlingReturn } from 'types';
import { useLastActiveFocus } from 'core';
import { useUiContext } from 'styles';

export const useModalHandling = ({ isOpen, onClose }: UseModalHandlingProps): UseModalHandlingReturn => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(isOpen);
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  // TODO #context-values
  const { theme } = useUiContext();
  const transitionDuration = theme.transitions.duration.screen;

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
      event.preventDefault();
      closeHandler();
    }
  };

  useLastActiveFocus(isOpen);

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
      setOpening(true);
      setTimeout(() => setOpening(false), transitionDuration);
    }
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (open) modalElement.showModal();
      if (!open && !closing) modalElement.close();
    }
  }, [open, closing]);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return {
    dialogRef: modalRef,
    isMounted: mounted,
    isOpening: opening,
    isClosing: closing,
    onClose: closeHandler,
    onKeyDown: keyDownHandler,
  };
};
