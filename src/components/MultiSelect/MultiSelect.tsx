import { FC, ForwardRefRenderFunction, forwardRef } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import MultiSelectStyled from "./MultiSelect.styled";
import MultiSelectOverflow from "./MultiSelectOverflow/MultiSelectOverflow";
import MultiSelectInput from "./MultiSelectInput/MultiSelectInput";
import useMultiSelect from "./MultiSelect.hooks";
import MultiSelectMenu from "./MultiSelectMenu/MultiSelectMenu";

const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>((props) => {

    const { 
        value, 
        onChange, 
        options, 
        placeholder, 
        optionRenderer, 
        classSuffix = 'multi-select', 
    } = props;

    const { onInputFocus, onInputChange, isMenuOpen } = useMultiSelect(props);

    return (
        <MultiSelectStyled className={`multi-select-wrapper-${classSuffix}`}>
            <MultiSelectOverflow value={value} />
            <MultiSelectInput onFocus={onInputFocus} onChange={onInputChange} />
            {isMenuOpen && <MultiSelectMenu />}
        </MultiSelectStyled>
    );
});

export default MultiSelect;