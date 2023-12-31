import { JSX } from 'react';
export interface MultiSelectOption {
    label: string;
    value: string;
}

export interface MultiSelectProps {
    value: MultiSelectOption[];
    onChange: (value: MultiSelectOption) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    optionRenderer?: (option: MultiSelectOption) => JSX.Element;
    classSuffix?: string;
}