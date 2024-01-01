import { useCallback, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import { KEY_CODES } from "../MultiSelect.consts";
import { MultiSelectOption } from "../MultiSelect.props";
import { MultiSelectContext } from "../MultiSelect.context";

const useMultiSelectMenu = (props: MultiSelectMenuProps, ref) => {

    const { isOpen, options, onClose } = props;

    const {value, setValue} = useContext(MultiSelectContext)
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

    const onItemSelect = useCallback((item: MultiSelectOption) => {
        if(value.map(v => v.value).includes(item.value)) {
            setValue(value.filter((v) => v.value !== item.value));
        }else{
            setValue([...value, item]);
        }
    }, [value]);

    const scrollIntoView = (args: number) => {
      ref.current?.scrollTo({ index: args });
    };

    useImperativeHandle(ref, () => ({
       onMenuKeyDown: (event: KeyboardEvent) => {
          const { key } = event;
          switch (key) {
            case KEY_CODES.DOWN_ARROW:
                if(highlightedIndex === options.length - 1) {
                  setHighlightedIndex(0);
                }else {
                  setHighlightedIndex((prevIndex) => prevIndex + 1);
                }
                scrollIntoView(highlightedIndex + 1);
                break;
            case KEY_CODES.UP_ARROW:
                if(highlightedIndex === 0) {
                  setHighlightedIndex(options.length - 1);
                }else {
                  setHighlightedIndex((prevIndex) => prevIndex - 1);
                }
                scrollIntoView(highlightedIndex - 1);
              break;
            
            case KEY_CODES.ENTER: {
                const item = options[highlightedIndex];
                
                if(item) {
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
    };
};

export default useMultiSelectMenu;