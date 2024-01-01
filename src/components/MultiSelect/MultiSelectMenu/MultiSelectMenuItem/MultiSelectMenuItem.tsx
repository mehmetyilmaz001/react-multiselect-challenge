import { MultiSelectMenuItemProps } from "./MultiSelectMenuItem.props";
import MultiSelectMenuItemStyled from "./MultiSelectMenuItem.styled";

const MultiSelectMenuItem = (props: MultiSelectMenuItemProps) => {
    const { label, onClick } = props;
    return (
        <MultiSelectMenuItemStyled onClick={onClick}>
            <label>
                <input type="checkbox" />
                {label}
            </label>
        </MultiSelectMenuItemStyled>
    );
}

export default MultiSelectMenuItem;