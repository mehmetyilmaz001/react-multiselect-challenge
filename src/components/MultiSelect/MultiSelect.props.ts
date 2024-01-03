import { JSX } from 'react';
export interface MultiSelectOption {
    label: string;
    value: string;
    image?: string;
    description?: string;
}

export interface MultiSelectProps {
    value?: MultiSelectOption[];
    onChange: (value: MultiSelectOption[]) => void;
    onSearch?: (searchText: string) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    optionRenderer?: (option: MultiSelectOption) => JSX.Element;
    classSuffix?: string;
    debounceTime?: number;
    isLoading?: boolean;
    err?: string;
}