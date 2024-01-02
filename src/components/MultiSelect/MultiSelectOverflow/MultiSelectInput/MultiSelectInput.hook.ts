import { FormEventHandler } from "react";
import { useMultiSelectContext } from "../../MultiSelect.context";

export const useMultiSelectInput = () => {
    const { onSearchChange } = useMultiSelectContext();
    
    const onInputChange: FormEventHandler<HTMLInputElement> = (e) => {
        onSearchChange(e.currentTarget.value);
    };

    return {
        onInputChange
    }
}