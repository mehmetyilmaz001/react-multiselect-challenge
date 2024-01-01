import { useRef, useEffect, DependencyList } from "react";

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