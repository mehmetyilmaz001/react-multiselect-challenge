import { MultiSelectOption } from "../MultiSelect.props";

export interface MultiSelectOverflowProps extends React.HTMLAttributes<HTMLDivElement> { 
    value: MultiSelectOption[];
}