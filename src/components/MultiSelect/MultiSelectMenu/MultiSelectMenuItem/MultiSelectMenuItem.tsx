import useMultiSelectMenuItem from "./MultiSelectMenuItem.hooks";
import { MultiSelectMenuItemProps } from "./MultiSelectMenuItem.props";
import MultiSelectMenuItemStyled from "./MultiSelectMenuItem.styled";

/**
 * Represents a single item in the MultiSelectMenu component.
 * @param props - The props for the MultiSelectMenuItem component.
 */
const MultiSelectMenuItem = (props: MultiSelectMenuItemProps) => {
    const { onItemSelect, highlighted, isSelected, option } = props;
    const { labelHandled } = useMultiSelectMenuItem(props);
    return (
        <MultiSelectMenuItemStyled 
            onClick={(e) => {
                e.preventDefault();
                onItemSelect();
            }} 
            $highlighted={highlighted}
        >
            <label>
                <input type="checkbox" checked={isSelected} readOnly />
                {option.image && <img src={option.image} alt={option.label} />}

                <div className="text-container">
                    <div className="label" dangerouslySetInnerHTML={{__html: labelHandled}} />
                    {option.description && <div className="description">{option.description}</div> }
                </div>
            </label>
        </MultiSelectMenuItemStyled>
    );
}

export default MultiSelectMenuItem;