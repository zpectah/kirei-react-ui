import { useEffect, useRef, MutableRefObject } from 'react';

export const useLastActiveFocus = (isOpen: boolean) => {
  const lastActiveElement: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lastActiveElement.current = document.activeElement as HTMLElement;
    } else if (lastActiveElement?.current) {
      lastActiveElement.current.focus();
    }
  }, [isOpen]);
};
