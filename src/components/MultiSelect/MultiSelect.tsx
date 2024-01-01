import { FC, ForwardRefRenderFunction, forwardRef } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import MultiSelectStyled from "./MultiSelect.styled";
import MultiSelectOverflow from "./MultiSelectOverflow/MultiSelectOverflow";
import MultiSelectInput from "./MultiSelectInput/MultiSelectInput";
import useMultiSelect from "./MultiSelect.hooks";
import MultiSelectMenu from "./MultiSelectMenu/MultiSelectMenu";
import MultiSelectTrigger from "./MultiSelectTrigger/MultiSelectTrigger";

const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>((props) => {

    const { 
        value, 
        onChange, 
        options, 
        placeholder, 
        optionRenderer, 
        classSuffix = 'multi-select', 
    } = props;

    const { 
        onInputFocus, 
        onInputChange, 
        isMenuOpen, 
        wrapperRef,
        onMenuClose,
        onMenuOpen
    } = useMultiSelect(props);

    return (
        <MultiSelectStyled className={`multi-select-wrapper-${classSuffix}`} ref={wrapperRef}>
            <MultiSelectOverflow value={value} />
            <MultiSelectInput 
                onFocus={onInputFocus} 
                onChange={onInputChange} 
                placeholder={placeholder} 
            />
            <MultiSelectMenu value={options} isOpen={isMenuOpen} />
            <MultiSelectTrigger 
                isOpen={isMenuOpen} 
                onClose={onMenuClose} 
                onOpen={onMenuOpen}  
            />
        </MultiSelectStyled>
    );
});

export default MultiSelect;