import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import MultiSelectMenuStyled from "./MultiSelectMenu.styled";
import MultiSelectMenuItem from "./MultiSelectMenuItem/MultiSelectMenuItem";
import useMultiSelectMenu from "./MultiSelectMenu.hooks";
import { forwardRef } from "react";

const MultiSelectMenu = forwardRef<{}, MultiSelectMenuProps>((props, ref) => {
    const { value = [], isOpen } = props;

    const { onMenuKeyDown, highlightedIndex } = useMultiSelectMenu(props, ref);
    
    let component: React.ReactNode = <>Nothing to show here</>;

    if(value.length > 0) {
        component = value.map((option, index) => (
            <MultiSelectMenuItem 
                key={option.value} 
                value={option.value} 
                label={option.label}
                highlighted={highlightedIndex === index}
            />
        ));
    }

    if(isOpen) {
        return <MultiSelectMenuStyled onKeyDown={onMenuKeyDown} ref={ref}>{component}</MultiSelectMenuStyled>;
    }else{
        return null;
    }
});

export default MultiSelectMenu;