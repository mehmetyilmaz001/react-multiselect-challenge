import { forwardRef } from "react";
import { MultiSelectInputProps } from "./MultiSelectInput.props";
import MultiSelectInputStyled from "./MultiSelectInput.styled";
import { useMultiSelectInput } from "./MultiSelectInput.hook";

const MultiSelectInput = forwardRef<HTMLInputElement, MultiSelectInputProps>((props, ref) => {
    
    const { onFocus, placeholder } = props;
    const { onInputChange, onKeyDown } = useMultiSelectInput(props);

    return (
        <MultiSelectInputStyled 
            ref={ref} 
            onChange={onInputChange} 
            onKeyDown={onKeyDown} 
            onFocus={onFocus}
            placeholder={placeholder}
         />
    )
});

export default MultiSelectInput;