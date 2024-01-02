import { MultiSelectMenuItemProps } from "./MultiSelectMenuItem.props";
import MultiSelectMenuItemStyled from "./MultiSelectMenuItem.styled";

/**
 * Represents a single item in the MultiSelectMenu component.
 * @param props - The props for the MultiSelectMenuItem component.
 */
const MultiSelectMenuItem = (props: MultiSelectMenuItemProps) => {
    const { label, onItemSelect, highlighted, isSelected } = props;
    return (
        <MultiSelectMenuItemStyled 
            onClick={(e) => {
                e.preventDefault();
                onItemSelect();
            }} 
            $highlighted={highlighted}
        >
            <label>
                <input type="checkbox" checked={isSelected} />
                {label}
            </label>
        </MultiSelectMenuItemStyled>
    );
}

export default MultiSelectMenuItem;