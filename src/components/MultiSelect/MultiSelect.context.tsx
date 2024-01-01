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
    setValue: () => {},
});
/* Context End */
 

interface MultiSelectProviderProps {
    children?: React.ReactNode;
    initialValue: MultiSelectOption[];
    onChange?: (value: MultiSelectOption[]) => void;
}

const MultiSelectProvider: FC<MultiSelectProviderProps> = ({children, initialValue, onChange}) => {
    const [value, setValue] = useState<MultiSelectOption[]>(initialValue);

    useUpdateEffect(() => {
        console.log('%cMultiSelect.context.tsx line:28 value', 'color: #007acc;', initialValue.length, value.length);
        onChange?.(value);
    }, [value.length]);
    
    return (
        <MultiSelectContext.Provider value={{value, setValue}}>
            {children}
        </MultiSelectContext.Provider>
    )
};

export default MultiSelectProvider;