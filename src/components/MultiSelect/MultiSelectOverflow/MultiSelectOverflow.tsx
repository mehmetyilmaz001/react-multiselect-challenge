import { FC } from "react";
import MultiSelectTag from "../MultiSelectTag/MultiSelectTag";
import useMultiSelectOverflow from "./MultiSelectOverflow.hook";
import { MultiSelectOverflowProps } from "./MultiSelectOverflow.props";
import MultiSelectOverflowStyled from "./MultiSelectOverflow.styled";

const MultiSelectOverflow: FC<MultiSelectOverflowProps> = () => {
    const { value, onRemoveItem } = useMultiSelectOverflow();
    
    return (
        <MultiSelectOverflowStyled>
            {value.map((option) => (
                <MultiSelectTag 
                    key={option.value} 
                    label={option.label} 
                    onRemove={() => onRemoveItem(option)} 
                />
            ))}
        </MultiSelectOverflowStyled>
    );
}

export default MultiSelectOverflow;