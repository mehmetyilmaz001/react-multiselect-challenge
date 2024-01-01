import { MultiSelectOption } from "../MultiSelect.props";

export type MultiSelectMenuProps = React.HTMLAttributes<HTMLDivElement> & {
    value: MultiSelectOption[];
    onKeyDown?: React.KeyboardEventHandler;
    scrollTo?: (args: number) => void;
    isOpen: boolean;
}