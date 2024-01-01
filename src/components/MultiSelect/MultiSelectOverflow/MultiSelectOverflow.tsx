import MultiSelectTag from "../MultiSelectTag/MultiSelectTag";
import { MultiSelectOverflowProps } from "./MultiSelectOverflow.props";
import MultiSelectOverflowStyled from "./MultiSelectOverflow.styled";

const MultiSelectOverflow = (props: MultiSelectOverflowProps) => {
    const { value, onClick } = props;
    
    return (
        <MultiSelectOverflowStyled onClick={onClick}>
            {value.map((option) => (
                <MultiSelectTag 
                    key={option.value} 
                    label={option.label} 
                    onRemove={() => {}} 
                />
            ))}
        </MultiSelectOverflowStyled>
    );
}

export default MultiSelectOverflow;