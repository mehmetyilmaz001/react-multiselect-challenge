import { MultiSelectMenuItemProps } from "./MultiSelectMenuItem.props";
import MultiSelectMenuItemStyled from "./MultiSelectMenuItem.styled";

const MultiSelectMenuItem = (props: MultiSelectMenuItemProps) => {
    const { label, onClick, highlighted } = props;
    return (
        <MultiSelectMenuItemStyled 
            onClick={onClick} 
            $highlighted={highlighted}
        >
            <label>
                <input type="checkbox" />
                {label}
            </label>
        </MultiSelectMenuItemStyled>
    );
}

export default MultiSelectMenuItem;