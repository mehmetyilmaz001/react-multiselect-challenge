import { MultiSelectOption } from "../MultiSelect.props";

export interface MultiSelectOverflowProps extends React.HTMLAttributes<HTMLDivElement> {
    onRemoveItem?: (option: MultiSelectOption) => void;
    placeholder: string;
    inputRef?: React.Ref<HTMLInputElement>;
    onInputFocus?: React.FocusEventHandler<HTMLInputElement>;
    onInputChange?: React.FormEventHandler<HTMLInputElement>;
}