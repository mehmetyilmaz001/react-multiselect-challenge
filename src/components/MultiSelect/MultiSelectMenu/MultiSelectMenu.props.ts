import { MultiSelectOption } from "../MultiSelect.props";

export interface MultiSelectMenuProps {
    onMenuKeyDown?: React.KeyboardEventHandler;
    scrollTo?: (args: number) => void;
    isOpen: boolean;
    onValueChange?: (value: MultiSelectOption[]) => void;
    onClose?: () => void;
    children?: React.ReactNode;
}