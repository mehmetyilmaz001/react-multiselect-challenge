import { FC, createContext, useCallback, useContext, useEffect, useState } from "react";
import { MultiSelectOption } from "./MultiSelect.props";
import { useUpdateEffect } from "./shared/hooks";
import debounce from "lodash.debounce";

/* Context */
export interface IMultiSelectContext {
    value: MultiSelectOption[];
    options: MultiSelectOption[];
    filteredOptions: MultiSelectOption[];
    setValue: (value: MultiSelectOption[]) => void;
    setOptions: (options: MultiSelectOption[]) => void;
    setFilteredOptions: (options: MultiSelectOption[]) => void;
}

export const MultiSelectContext = createContext<IMultiSelectContext>({
    value: [],
    options: [],
    filteredOptions: [],
    setValue: () => { },
    setOptions: () => { },
    setFilteredOptions: () => { }
});
/* Context End */


interface MultiSelectProviderProps {
    children?: React.ReactNode;
    initialValue: MultiSelectOption[];
    initialOptions: MultiSelectOption[];
    onChange?: (value: MultiSelectOption[]) => void;
}

/**
 * Provides context for the MultiSelect component.
 *
 * @component
 * @param {ReactNode} children - The child components to be wrapped by the provider.
 * @param {MultiSelectOption[]} initialValue - The initial value of the MultiSelect component.
 * @param {Function} onChange - The callback function to be called when the value of the MultiSelect component changes.
 */
const MultiSelectProvider: FC<MultiSelectProviderProps> = ({ children, initialValue, onChange, initialOptions }) => {
    const [value, setValue] = useState<MultiSelectOption[]>(initialValue);
    const [options, setOptions] = useState<MultiSelectOption[]>(initialOptions);
    const [filteredOptions, setFilteredOptions] = useState<MultiSelectOption[]>(initialOptions);

    useUpdateEffect(() => {
        onChange?.(value);
    }, [value.length]);

    return (
        <MultiSelectContext.Provider value={{ value, setValue, options, setOptions, filteredOptions, setFilteredOptions }}>
            {children}
        </MultiSelectContext.Provider>
    )
};

export default MultiSelectProvider;

export const useMultiSelectContext = () => {
    const { value,
        setValue,
        options,
        filteredOptions,
        setFilteredOptions
    } = useContext(MultiSelectContext);

    /**
   * Callback function that is called when an item is selected in the MultiSelectMenu.
   * 
   * @param item - The selected item.
   */
    const onItemSelect = useCallback((item: MultiSelectOption) => {
        if (value.map(v => v.value).includes(item.value)) {
            onRemoveItem(item);
        } else {
            setValue([...value, item]);
        }
    }, [value]);

    const onRemoveItem = (item: MultiSelectOption) => {
        setValue(value.filter((value) => value.value !== item.value));
    }


    const onSearchChange = debounce((value: string) => {
        // search for value in the options
        // if found, filter the options
        console.log('onSearchChange', value);

        if (value) {
            console.log('%cMultiSelect.context.tsx line:94 options', 'color: #007acc;', options);
            const filteredOptionsInner = options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()));
            setFilteredOptions(filteredOptionsInner);

        } else {
            setFilteredOptions(options);
        }

    }, 500);

    console.log('%cMultiSelect.context.tsx line:100 options', 'color: #007acc;', options);


    return { value, setValue, onSearchChange, onItemSelect, onRemoveItem, filteredOptions };
}