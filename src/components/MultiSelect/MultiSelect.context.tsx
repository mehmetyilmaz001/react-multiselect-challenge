import { FC, createContext, useEffect, useState } from "react";
import { MultiSelectOption } from "./MultiSelect.props";
import { useUpdateEffect } from "./shared/hooks";

/* Context */
export interface IMultiSelectContext {
    value: MultiSelectOption[];
    setValue: (value: MultiSelectOption[]) => void;
}

export const MultiSelectContext = createContext<IMultiSelectContext>({
    value: [],
    setValue: () => { },
});
/* Context End */


interface MultiSelectProviderProps {
    children?: React.ReactNode;
    initialValue: MultiSelectOption[];
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
const MultiSelectProvider: FC<MultiSelectProviderProps> = ({ children, initialValue, onChange }) => {
    const [value, setValue] = useState<MultiSelectOption[]>(initialValue);

    useUpdateEffect(() => {
        onChange?.(value);
    }, [value.length]);

    return (
        <MultiSelectContext.Provider value={{ value, setValue }}>
            {children}
        </MultiSelectContext.Provider>
    )
};

export default MultiSelectProvider;