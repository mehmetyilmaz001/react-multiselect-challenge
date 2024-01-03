import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import MultiSelectMenuStyled, { NoResultStyled } from "./MultiSelectMenu.styled";
import MultiSelectMenuItem from "./MultiSelectMenuItem/MultiSelectMenuItem";
import useMultiSelectMenu from "./MultiSelectMenu.hooks";
import { forwardRef } from "react";

/**
 * MultiSelectMenu component.
 *
 * @component
 * @param {MultiSelectMenuProps} props - The props for the MultiSelectMenu component.
 * @param {React.Ref<{}>} forwardedRef - The ref to forward to the underlying component.
 * @returns {React.ReactElement} The rendered MultiSelectMenu component.
 */
const MultiSelectMenu = forwardRef<{}, MultiSelectMenuProps>((props, forwardedRef) => {

    const {
        highlightedIndex,
        onItemSelect,
        value,
        menuDivRef,
        filteredOptions,
    } = useMultiSelectMenu(props, forwardedRef);

    let component: React.ReactNode = <NoResultStyled>Nothing to show here</NoResultStyled>;

    console.log('%cMultiSelectMenu.tsx line:27 filteredOptions', 'color: #007acc;', filteredOptions);

    if (filteredOptions.length > 0) {
        component = filteredOptions.map((option, index) => (
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
                forwardedRef = node;
                menuDivRef.current = node;
            }}
        >
            {component}
        </MultiSelectMenuStyled>
    );
});

export default MultiSelectMenu;