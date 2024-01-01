import { FormEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import { KEY_CODES } from "./MultiSelect.consts";
import { MultiSelectMenuProps } from "./MultiSelectMenu/MultiSelectMenu.props";

export default function useMultiSelect (props: MultiSelectProps) {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onClickOutside = () => {
        onMenuClose();
    }
    const wrapperRef = useOutsideClick(onClickOutside);
    const menuRef = useRef<MultiSelectMenuProps>();
  

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

    const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e, ...rest) => {
        console.log('onKeyDown', e.key);
        if([KEY_CODES.ESC].includes(e.key)) {
            e.preventDefault();
            onMenuClose();
        }

        if (isMenuOpen) {
            menuRef.current.onKeyDown(e, ...rest);
        }
    }

    return {
        onInputFocus,
        onInputChange,
        isMenuOpen,
        onMenuClose,
        onMenuOpen,
        wrapperRef,
        menuRef,
        onKeyDown
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