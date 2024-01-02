import { forwardRef } from "react";
import { MultiSelectInputProps } from "./MultiSelectInput.props";
import MultiSelectInputStyled from "./MultiSelectInput.styled";
import { useMultiSelectInput } from "./MultiSelectInput.hook";

const MultiSelectInput = forwardRef<HTMLInputElement, MultiSelectInputProps>((props, ref) => {
    const { onInputChange } = useMultiSelectInput();

    return (
        <MultiSelectInputStyled {...props} ref={ref} onChange={onInputChange} />
    )
});

export default MultiSelectInput;