import { useContext } from "react";
import { MultiSelectContext } from "../MultiSelect.context";

const useMultiSelectOverflow = () => {
    const { value, setValue } = useContext(MultiSelectContext);

    const onRemoveItem = (item) => {
        setValue(value.filter((value) => value !== item));
    }
    
    return { value, onRemoveItem };
}

export default useMultiSelectOverflow;