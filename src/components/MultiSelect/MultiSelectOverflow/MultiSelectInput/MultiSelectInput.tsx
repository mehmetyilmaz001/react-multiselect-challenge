import { forwardRef } from "react";
import { MultiSelectInputProps } from "./MultiSelectInput.props";
import MultiSelectInputStyled from "./MultiSelectInput.styled";

const MultiSelectInput = forwardRef<HTMLInputElement, MultiSelectInputProps>((props, ref) => {
    return (
        <MultiSelectInputStyled {...props} ref={ref} />
    )
});

export default MultiSelectInput;