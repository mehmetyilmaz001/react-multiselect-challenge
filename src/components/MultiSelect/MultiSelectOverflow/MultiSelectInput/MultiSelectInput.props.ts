import { MultiSelectProps } from "../../MultiSelect.props";

export interface MultiSelectInputProps extends React.HTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    onSearch?: MultiSelectProps['onSearch'];
    debounceTime?: MultiSelectProps['debounceTime'];
}