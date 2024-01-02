import { createRef, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import { KEY_CODES } from "../MultiSelect.consts";
import { MultiSelectOption } from "../MultiSelect.props";
import { MultiSelectContext } from "../MultiSelect.context";

/**
 * Custom hook for the MultiSelectMenu component.
 * 
 * @param props - The props for the MultiSelectMenu component.
 * @param forwardedRef - The ref forwarded to the MultiSelectMenu component.
 * @returns An object containing the necessary values and functions for the MultiSelectMenu component.
 */
const useMultiSelectMenu = (props: MultiSelectMenuProps, forwardedRef) => {

  const menuDivRef = useRef<HTMLDivElement>(null);

  const { isOpen, options, onClose } = props;

  const { value, setValue } = useContext(MultiSelectContext)
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  /**
   * Callback function that is called when an item is selected in the MultiSelectMenu.
   * 
   * @param item - The selected item.
   */
  const onItemSelect = useCallback((item: MultiSelectOption) => {
    if (value.map(v => v.value).includes(item.value)) {
      setValue(value.filter((v) => v.value !== item.value));
    } else {
      setValue([...value, item]);
    }
  }, [value]);

  /**
   * Scrolls the element at the specified index into view.
   * 
   * @param index - The index of the element to scroll into view.
   */
  const scrollIntoView = (index: number) => {
    if (menuDivRef.current) {
      const menuItem = menuDivRef?.current?.children?.[index];
      menuItem?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  /**
   * Custom hook that allows a parent component to imperatively call functions on the MultiSelectMenu component.
   * 
   * @param forwardedRef - A ref object that is passed from the parent component.
   * @returns An object with functions that can be called imperatively on the MultiSelectMenu component.
   */
  useImperativeHandle(forwardedRef, () => ({
    onMenuKeyDown: (event: KeyboardEvent) => {
      const { key } = event;
      switch (key) {
        case KEY_CODES.DOWN_ARROW:
          if (highlightedIndex === options.length - 1) {
            setHighlightedIndex(0);
          } else {
            setHighlightedIndex((prevIndex) => prevIndex + 1);
          }
          scrollIntoView(highlightedIndex + 1);
          break;
        case KEY_CODES.UP_ARROW:
          if (highlightedIndex === 0) {
            setHighlightedIndex(options.length - 1);
          } else {
            setHighlightedIndex((prevIndex) => prevIndex - 1);
          }
          scrollIntoView(highlightedIndex - 1);
          break;

        case KEY_CODES.ENTER: {
          const item = options[highlightedIndex];

          if (item) {
            onItemSelect(item);
          }

          if (isOpen) {
            event.preventDefault();
          }

          break;
        }

        // >>> Close
        case KEY_CODES.ESC: {
          onClose?.();
          if (open) {
            event.stopPropagation();
          }
        }
      }
    },
    scrollTo: (args: number) => {
      // scrollIntoView(args);
      // ref.current?.scrollTo({ index: args });
    }
  }));

  return {
    highlightedIndex,
    onItemSelect,
    value,
    menuDivRef,
  };
};

export default useMultiSelectMenu;