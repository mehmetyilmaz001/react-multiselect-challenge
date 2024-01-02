import { useMultiSelectContext } from "../MultiSelect.context";

const useMultiSelectOverflow = () => {
    const { value, onRemoveItem } = useMultiSelectContext();

    return { value, onRemoveItem };
}

export default useMultiSelectOverflow;