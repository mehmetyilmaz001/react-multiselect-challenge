import { FormEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import { MultiSelectProps } from "./MultiSelect.props";

export default function useMultiSelect (props: MultiSelectProps) {
    const { 
        value, 
        onChange, 
        options, 
        placeholder, 
        optionRenderer, 
        classSuffix = 'multi-select', 
    } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onClickOutside = () => {
        onMenuClose();
        console.log('onClickOutside');
    }
    const wrapperRef = useOutsideClick(onClickOutside);
  

    const onMenuClose = () => {
        setIsMenuOpen(false);
        console.log('onMenuClose');
    }

    const onMenuOpen = () => {
        setIsMenuOpen(true);
        console.log('onMenuOpen');
    }

    const onInputFocus = () => {
        onMenuOpen();
        console.log('onInputFocus');
    }

    const onInputChange: FormEventHandler<HTMLInputElement> = (e) => {
        console.log('onInputChange', e.currentTarget.value);
    }

    return {
        onInputFocus,
        onInputChange,
        isMenuOpen,
        onMenuClose,
        onMenuOpen,
        wrapperRef,
    };
}

const useOutsideClick = (callback) => {
    const ref = useRef<HTMLElement>();
  
    useEffect(() => {
      const handleClick = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
              console.log('%cMultiSelect.hooks.ts line:64 ref.current', 'color: #007acc;', ref.current);
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