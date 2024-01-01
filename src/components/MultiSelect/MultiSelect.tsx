import { FC, ForwardRefRenderFunction, forwardRef } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import MultiSelectStyled from "./MultiSelect.styled";
import MultiSelectOverflow from "./MultiSelectOverflow/MultiSelectOverflow";
import MultiSelectInput from "./MultiSelectInput/MultiSelectInput";
import useMultiSelect from "./MultiSelect.hooks";
import MultiSelectMenu from "./MultiSelectMenu/MultiSelectMenu";
import MultiSelectTrigger from "./MultiSelectTrigger/MultiSelectTrigger";
import MultiSelectProvider from "./MultiSelect.context";

const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>((props, ref) => {

    const { 
        value,
        options, 
        placeholder, 
        optionRenderer, 
        classSuffix = 'multi-select',
        onChange,
    } = props;

    const { 
        onInputFocus, 
        onInputChange,
        isMenuOpen, 
        wrapperRef,
        menuRef,
        inputRef,
        onMenuClose,
        onMenuOpen,
        onKeyDown,
    } = useMultiSelect(props);

    return (
        <MultiSelectProvider initialValue={value} onChange={onChange}>
            <MultiSelectStyled 
                className={`multi-select-wrapper-${classSuffix}`} 
                ref={wrapperRef ?? ref} 
                onKeyDown={onKeyDown}
            >
                <MultiSelectOverflow /> 
                <MultiSelectInput 
                    onFocus={onInputFocus} 
                    onChange={onInputChange} 
                    placeholder={placeholder}
                    ref={inputRef}
                />
                {isMenuOpen && <MultiSelectMenu 
                    options={options} 
                    isOpen={isMenuOpen} 
                    ref={menuRef}
                    onClose={onMenuClose}
                /> }
                <MultiSelectTrigger 
                    isOpen={isMenuOpen} 
                    onClose={onMenuClose} 
                    onOpen={onMenuOpen}  
                />
            </MultiSelectStyled>
        </MultiSelectProvider>
    );
});

export default MultiSelect;