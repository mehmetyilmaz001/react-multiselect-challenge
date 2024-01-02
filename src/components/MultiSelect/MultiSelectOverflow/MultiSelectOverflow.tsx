import { FC } from "react";
import MultiSelectTag from "./MultiSelectTag/MultiSelectTag";
import useMultiSelectOverflow from "./MultiSelectOverflow.hook";
import { MultiSelectOverflowProps } from "./MultiSelectOverflow.props";
import MultiSelectOverflowStyled from "./MultiSelectOverflow.styled";
import MultiSelectInput from "./MultiSelectInput/MultiSelectInput";

/**
 * Component for handling overflow in a multi-select dropdown.
 *
 * @component
 * @param {MultiSelectOverflowProps} props - The props for the MultiSelectOverflow component.
 * @returns {JSX.Element} - The rendered MultiSelectOverflow component.
 */
const MultiSelectOverflow: FC<MultiSelectOverflowProps> = (props) => {
    const { placeholder, inputRef, onInputFocus, onInputChange } = props;
    const { value, onRemoveItem } = useMultiSelectOverflow();
    
    return (
        <MultiSelectOverflowStyled className="overflow-wrapper">
            {value.map((option) => (
                <MultiSelectTag 
                    key={option.value} 
                    label={option.label} 
                    onRemove={() => onRemoveItem(option)} 
                />
            ))}
            <MultiSelectInput 
                onFocus={onInputFocus} 
                onChange={onInputChange} 
                placeholder={placeholder}
                ref={inputRef}
            />
        </MultiSelectOverflowStyled>
    );
}

export default MultiSelectOverflow;