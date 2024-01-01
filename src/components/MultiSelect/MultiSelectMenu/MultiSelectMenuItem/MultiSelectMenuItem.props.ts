import { MultiSelectOption } from "../../MultiSelect.props";

export interface MultiSelectMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
    isSelected?: boolean;
    highlighted?: boolean;
    onItemSelect?: () => void;
}