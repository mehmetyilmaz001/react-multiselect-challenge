import { MultiSelectOption } from "../MultiSelect.props";

export interface MultiSelectMenuProps {
    options: MultiSelectOption[];
    onMenuKeyDown?: React.KeyboardEventHandler;
    scrollTo?: (args: number) => void;
    isOpen: boolean;
    onValueChange?: (value: MultiSelectOption[]) => void;
    onClose?: () => void;
}