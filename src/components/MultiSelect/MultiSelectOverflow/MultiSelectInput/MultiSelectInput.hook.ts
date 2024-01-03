import { FormEventHandler } from "react";
import { useMultiSelectContext } from "../../MultiSelect.context";
import { MultiSelectInputProps } from "./MultiSelectInput.props";
import debounce from "lodash.debounce";

export const useMultiSelectInput = (props: MultiSelectInputProps) => {
    const { onInnerSearch, setSearchText, removeLastItem } = useMultiSelectContext();

    const onInputChange: FormEventHandler<HTMLInputElement> = debounce((e) => {
        const value = e?.target?.value;
        setSearchText(value);
        if (props.onSearch) {
            props.onSearch(value);
            return;
        }
        onInnerSearch(value);
    }, props.debounceTime || 100);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !e.currentTarget.value) {
            removeLastItem()
        }
    }

    return {
        onInputChange,
        onKeyDown
    }
}