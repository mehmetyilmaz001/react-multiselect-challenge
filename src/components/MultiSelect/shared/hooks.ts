import { useRef, useEffect, DependencyList } from "react";

/**
 * Custom hook that triggers a callback function when a click event occurs outside of a specified element.
 * @param callback The callback function to be executed when an outside click event occurs.
 */
export const useOutsideClick = (callback) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

/**
 * Custom hook that runs the effect only after the initial render.
 * It behaves like the useEffect hook, but skips the first invocation.
 *
 * @param effect - The effect function to run.
 * @param deps - An array of dependencies to watch for changes.
 */
export const useUpdateEffect = (effect: () => void, deps: DependencyList) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) {
      return effect();
    } else {
      hasMounted.current = true;
    }
  }, deps);
};