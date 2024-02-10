import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { UseModalDialog, UseModalDialogReturn } from 'types';
import { useLastActiveFocus } from 'core';

export const useModalDialog = ({ isOpen, onClose }: UseModalDialog): UseModalDialogReturn => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(isOpen);

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const closeHandler = () => {
    onClose();
    setOpen(false);
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') closeHandler();
  };

  useLastActiveFocus(isOpen);

  useEffect(() => setOpen(isOpen), [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      open ? modalElement.showModal() : modalElement.close();
    }
  }, [open]);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return {
    dialogRef: modalRef,
    isMounted: mounted,
    onClose: closeHandler,
    onKeyDown: keyDownHandler,
  };
};
