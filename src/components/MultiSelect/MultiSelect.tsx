import { FC, ForwardRefRenderFunction, forwardRef } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import MultiSelectStyled from "./MultiSelect.styled";
import MultiSelectOverflow from "./MultiSelectOverflow/MultiSelectOverflow";

const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>((props) => {

    const { 
        value, 
        onChange, 
        options, 
        placeholder, 
        optionRenderer, 
        classSuffix = 'multi-select', 
    } = props;

    return (
        <MultiSelectStyled className={`multi-select-wrapper-${classSuffix}`}>
            <MultiSelectOverflow value={value} />
        </MultiSelectStyled>
    );
});

export default MultiSelect;