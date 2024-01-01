import { MultiSelectOption } from "../MultiSelect.props";

export type MultiSelectMenuProps = React.HTMLAttributes<HTMLDivElement> & {
    value: MultiSelectOption[];
    isOpen: boolean;
}