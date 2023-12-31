import { FormEventHandler, useEffect, useState } from "react";
import { MultiSelectProps } from "./MultiSelect.props";

export default function useMultiSelect (props: MultiSelectProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { 
        value, 
        onChange, 
        options, 
        placeholder, 
        optionRenderer, 
        classSuffix = 'multi-select', 
    } = props;

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

    const onClickOutside = () => {
        onMenuClose();
        console.log('onClickOutside');
    }

    useEffect(() => {
        document.addEventListener('click', onClickOutside);
        return () => {
            document.removeEventListener('click', onClickOutside);
        }
    }, []);

    return {
        onInputFocus,
        onInputChange,
        isMenuOpen,
        onMenuClose,
        onMenuOpen,
    };
}