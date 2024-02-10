import { MutableRefObject, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export interface UseClickOutsideProps {
  ref?: MutableRefObject<HTMLElement | null>;
  callback?: (event: Event) => void;
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  const clickHandler = useCallback(
    (event: Event) => {
      if (!ref || !callback || event.defaultPrevented) {
        return;
      }

      if (ref.current && !ref.current.contains(event?.target as Node) && callback) {
        callback(event);
      }
    },
    [ref, callback]
  );

  useIsomorphicLayoutEffect(() => {
    document.addEventListener('click', clickHandler, { capture: true });

    return () => document.removeEventListener('click', clickHandler, { capture: true });
  }, [clickHandler]);
};
