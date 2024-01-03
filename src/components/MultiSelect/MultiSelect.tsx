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
        onSearch,
        debounceTime,
        isLoading,
        err,
    } = props;

    const {
        onInputFocus,
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
        <MultiSelectProvider initialValue={value} onChange={onChange} initialOptions={options}>
            <MultiSelectStyled
                className={`multi-select-wrapper-${classSuffix}`}
                ref={wrapperRef ?? ref}
                onKeyDown={onKeyDown}
                onClick={onWrapperClick}
                $hasError={!!err}

            >
                <MultiSelectOverflow
                    placeholder={placeholder}
                    inputRef={inputRef}
                    onInputFocus={onInputFocus}
                    onSearch={onSearch}
                    debounceTime={debounceTime}
                />

                {isMenuOpen && <MultiSelectMenu
                    isOpen={isMenuOpen}
                    ref={menuRef}
                    onClose={onMenuClose}
                />}

                {err && <div className="error">{err}</div>}
                {isLoading ? <div>Loading...</div> :
                    <MultiSelectTrigger
                        isOpen={isMenuOpen}
                        onClose={onMenuClose}
                        onOpen={onMenuOpen}
                    />
                }
            </MultiSelectStyled>
        </MultiSelectProvider>
    );
});

export default MultiSelect;