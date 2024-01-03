import { MultiSelectOption } from "../../MultiSelect.props";

export interface MultiSelectMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    option: MultiSelectOption;
    isSelected?: boolean;
    highlighted?: boolean;
    onItemSelect?: () => void;
}