import { FC } from "react";
import CloseIcon from "./CloseIcon";
import { MultiSelectTagProps } from "./MultiSelectTag.props";
import MultiSelectTagStyled from "./MultiSelectTag.styled";

const classPrefix = 'multi-select-tag';

const MultiSelectTag: FC<MultiSelectTagProps> = ({label, onRemove, className = classPrefix}) => {
    return (
        <MultiSelectTagStyled className={className}>
            <div className="label">{label}</div>
            <button className="remove-button" onClick={onRemove}>
                <CloseIcon />
            </button>
        </MultiSelectTagStyled>
    );
}

export default MultiSelectTag;