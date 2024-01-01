import { KeyboardEventHandler, useImperativeHandle, useState } from "react";
import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import { KEY_CODES } from "../MultiSelect.consts";

const useMultiSelectMenu = (props: MultiSelectMenuProps, ref) => {
    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

    useImperativeHandle(ref, () => ({
        onKeyDown: (event: KeyboardEvent) => {
         console.log('%cMultiSelectMenu.hooks.ts line:10 event.key', 'color: #007acc;', event.key);
          const { key } = event;
          
          switch (key) {
            case KEY_CODES.DOWN_ARROW:
                if(highlightedIndex === props.value.length - 1) {
                  setHighlightedIndex(0);
                }else {
                  setHighlightedIndex((prevIndex) => prevIndex + 1);
                }
                // scrollIntoView(nextActiveIndex);
                break;
            case KEY_CODES.UP_ARROW:
              if(highlightedIndex === 0) {
                setHighlightedIndex(props.value.length - 1);
              }else {
                setHighlightedIndex((prevIndex) => prevIndex - 1);
              }
              break;
            

            // >>> Select
            case KEY_CODES.ENTER: {
              // value
            //   const item = memoFlattenOptions[activeIndex];
            //   if (item && !item?.data?.disabled && !overMaxCount) {
            //     onSelectValue(item.value);
            //   } else {
            //     onSelectValue(undefined);
            //   }
    
              if (open) {
                event.preventDefault();
              }
    
              break;
            }
    
            // >>> Close
            case KEY_CODES.ESC: {
              //toggleOpen(false);
              if (open) {
                event.stopPropagation();
              }
            }
          }
        },
        scrollTo: (index) => {
        },
      }));
    
    
    const onMenuKeyDown: KeyboardEventHandler = (event) => {
        // console.log('%cMultiSelectMenu.hooks.ts line:9 event', 'color: #007acc;', event);
        // event.preventDefault();
        // switch(event.key) {
        //     case KEY_CODES.DOWN_ARROW:
        //         setHighlightedIndex((prevIndex) => prevIndex + 1);
        //         break;
        //     case KEY_CODES.UP_ARROW:
        //         setHighlightedIndex((prevIndex) => prevIndex - 1);
        //         break;
        //     case KEY_CODES.SPACE:
        //     case KEY_CODES.ENTER:
        //         // props.onSelect(props.value[highlightedIndex]);
        //         break;
        //     default:
        //         break;
        // }
    };

    return {
        onMenuKeyDown,
        highlightedIndex
    };
};

export default useMultiSelectMenu;