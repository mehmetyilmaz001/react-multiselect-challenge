import UpArrowIcon from "../icons/UpArrowIcon";
import DownArrowIcon from "../icons/DownArrowIcon";
import { MultiSelectTriggerProps } from "./MultiSelectTrigger.props";
import MultiSelectTriggerStyled from "./MultiSelectTrigger.styled";

const MultiSelectTrigger = (props: MultiSelectTriggerProps) => {
    const { isOpen, onClose, onOpen } = props;

    return (
        <MultiSelectTriggerStyled onClick={isOpen ? onClose : onOpen}>
            {isOpen ? <UpArrowIcon /> : <DownArrowIcon />}
        </MultiSelectTriggerStyled>
    );
}

export default MultiSelectTrigger;