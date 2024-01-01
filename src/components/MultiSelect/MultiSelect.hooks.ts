import { ElementRef, FormEventHandler, KeyboardEventHandler, MouseEventHandler, Ref, useContext, useEffect, useRef, useState } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import { KEY_CODES } from "./MultiSelect.consts";
import { MultiSelectMenuProps } from "./MultiSelectMenu/MultiSelectMenu.props";
import { useOutsideClick } from "./shared/hooks";

export default function useMultiSelect (props: MultiSelectProps) {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const onClickOutside = () => {
        onMenuClose();
    }
    const wrapperRef = useOutsideClick(onClickOutside);
    const menuRef = useRef<MultiSelectMenuProps>();
    const inputRef = useRef<HTMLInputElement>();
  

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

    const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e, ...rest) => {
        if([KEY_CODES.ESC].includes(e.key)) {
            e.preventDefault();
            onMenuClose();
        }        

        if (isMenuOpen) {
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
        onKeyDown
    };
}
