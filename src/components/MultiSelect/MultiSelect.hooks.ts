import { ElementRef, FormEventHandler, KeyboardEventHandler, MouseEventHandler, Ref, useContext, useEffect, useRef, useState } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import { KEY_CODES } from "./MultiSelect.consts";
import { MultiSelectMenuProps } from "./MultiSelectMenu/MultiSelectMenu.props";
import { useOutsideClick } from "./shared/hooks";

/**
 * Custom hook for the MultiSelect component.
 * 
 * @param props - The props for the MultiSelect component.
 */
export default function useMultiSelect (props: MultiSelectProps) {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const onClickOutside = () => {
        onMenuClose();
    }
    const wrapperRef = useOutsideClick(onClickOutside);
    const menuRef = useRef<MultiSelectMenuProps>();
    const inputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        if(isMenuOpen) {
            inputRef.current?.focus();
        }
    }, [isMenuOpen]);

    /**
     * Handles the click event on the wrapper element.
     * 
     * @param e - The mouse event object.
     */
    const onWrapperClick = (e: React.MouseEvent<HTMLElement>) => {
        const triggerIconRef = document.getElementsByClassName('trigger-icon');
        const tagRef = document.getElementsByClassName('multi-select-tag');
        e.preventDefault();
        // if one of the child of  triggerIconRef is clicked, then do not open the menu
        if(triggerIconRef?.[0]?.contains(e.target as Node) || tagRef?.[0]?.contains(e.target as Node)) {
            return;
        }
        
        inputRef.current?.focus();
    }
  

    const onMenuClose = () => {
        setIsMenuOpen(false);
        inputRef.current?.blur();
    }

    const onMenuOpen = () => {
        setIsMenuOpen(true);
    }

    const onInputFocus = () => {
        onMenuOpen();
    }

    const onInputChange: FormEventHandler<HTMLInputElement> = (e) => {
        console.log('onInputChange', e.currentTarget.value);
    }

    /**
     * Handles the keydown event for the MultiSelect component.
     * 
     * @param e - The keyboard event.
     * @param rest - Additional arguments.
     */
    const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e, ...rest) => {
        if([KEY_CODES.ESC].includes(e.key)) {
            e.preventDefault();
            onMenuClose();
        }        

        if (isMenuOpen) {
            console.log('%cMultiSelect.hooks.ts line:44 menuRef', 'color: #007acc;', menuRef);
            menuRef.current.onMenuKeyDown(e, ...rest);
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
        inputRef,
        onKeyDown,
        onWrapperClick
    };
}
