import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import MultiSelectMenuStyled from "./MultiSelectMenu.styled";
import MultiSelectMenuItem from "./MultiSelectMenuItem/MultiSelectMenuItem";
import useMultiSelectMenu from "./MultiSelectMenu.hooks";
import { ForwardRefRenderFunction, forwardRef } from "react";

const MultiSelectMenu = forwardRef<{}, MultiSelectMenuProps>((props, forwardedRed) => {
    const { options = [] } = props;

    const { 
        highlightedIndex, 
        onItemSelect,
        value,
        menuDivRef
    } = useMultiSelectMenu(props, forwardedRed);
    
    let component: React.ReactNode = <>Nothing to show here</>;
    
    if(options.length > 0) {
        component = options.map((option, index) => (
            <MultiSelectMenuItem 
                key={option.value} 
                value={option.value} 
                label={option.label}
                highlighted={highlightedIndex === index}
                onItemSelect={() => onItemSelect(option)}
                isSelected={value.map(v => v.value).includes(option.value)}
                role="listitem"
            />
        ));
    }

    return (
            <MultiSelectMenuStyled 
                ref={(node) => {
                    forwardRef(node);
                    menuDivRef.current = node;
                  }}
            >
                {component}
            </MultiSelectMenuStyled>
    );
});

export default MultiSelectMenu;