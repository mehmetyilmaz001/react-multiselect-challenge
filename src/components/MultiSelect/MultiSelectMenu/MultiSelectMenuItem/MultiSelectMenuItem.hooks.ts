import { useMultiSelectContext } from "../../MultiSelect.context";
import { MultiSelectMenuItemProps } from "./MultiSelectMenuItem.props";

const useMultiSelectMenuItem = (props: MultiSelectMenuItemProps) => {
    const { label } = props;
    const { searchText } = useMultiSelectContext();

    // mark as bold the part of the label that matches the search text. we should keep the original case
    // so we will use the original label to find the index of the search text and then use the original label
    // to replace the search text with the bolded search text
    let labelHandled = label;

    if (searchText) {
        const index = label.toLowerCase().indexOf(searchText.toLowerCase());
        labelHandled = label.substring(0, index) + `<b>${label.substring(index, index + searchText.length)}</b>` + label.substring(index + searchText.length);
    }

    return {
        labelHandled
    }
}

export default useMultiSelectMenuItem;