import { forwardRef } from "react";
import { MultiSelectInputProps } from "./MultiSelectInput.props";
import MultiSelectInputStyled from "./MultiSelectInput.styled";
import { useMultiSelectInput } from "./MultiSelectInput.hook";

const MultiSelectInput = forwardRef<HTMLInputElement, MultiSelectInputProps>((props, ref) => {
    
    const { onInputChange, onKeyDown } = useMultiSelectInput(props);

    return (
        <MultiSelectInputStyled {...props} ref={ref} onChange={onInputChange} onKeyDown={onKeyDown} />
    )
});

export default MultiSelectInput;