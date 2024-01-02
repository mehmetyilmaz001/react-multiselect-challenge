import { forwardRef } from "react";
import { MultiSelectProps } from "./MultiSelect.props";
import MultiSelectStyled from "./MultiSelect.styled";
import MultiSelectOverflow from "./MultiSelectOverflow/MultiSelectOverflow";
import useMultiSelect from "./MultiSelect.hooks";
import MultiSelectMenu from "./MultiSelectMenu/MultiSelectMenu";
import MultiSelectTrigger from "./MultiSelectTrigger/MultiSelectTrigger";
import MultiSelectProvider from "./MultiSelect.context";

/**
 * A custom multi-select component.
 *
 * @component
 * @param {MultiSelectProps} props - The props for the MultiSelect component.
 * @param {React.Ref<HTMLDivElement>} ref - The ref for the MultiSelect component.
 * @returns {JSX.Element} The rendered MultiSelect component.
 */
const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>((props, ref) => {

    const {
        value,
        options,
        placeholder,
        optionRenderer,
        classSuffix = 'multi-select',
        onChange,
    } = props;

    const {
        onInputFocus,
        onInputChange,
        isMenuOpen,
        wrapperRef,
        menuRef,
        inputRef,
        onMenuClose,
        onMenuOpen,
        onKeyDown,
        onWrapperClick
    } = useMultiSelect(props);

    return (
        <MultiSelectProvider initialValue={value} onChange={onChange}>
            <MultiSelectStyled
                className={`multi-select-wrapper-${classSuffix}`}
                ref={wrapperRef ?? ref}
                onKeyDown={onKeyDown}
                onClick={onWrapperClick}
            >
                <MultiSelectOverflow
                    placeholder={placeholder}
                    inputRef={inputRef}
                    onInputFocus={onInputFocus}
                    onInputChange={onInputChange}
                />

                {isMenuOpen && <MultiSelectMenu
                    options={options}
                    isOpen={isMenuOpen}
                    ref={menuRef}
                    onClose={onMenuClose}
                />}
                <MultiSelectTrigger
                    isOpen={isMenuOpen}
                    onClose={onMenuClose}
                    onOpen={onMenuOpen}
                />
            </MultiSelectStyled>
        </MultiSelectProvider>
    );
});

export default MultiSelect;