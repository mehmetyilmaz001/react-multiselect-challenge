import { FC } from "react";
import { MultiSelectMenuProps } from "./MultiSelectMenu.props";
import MultiSelectMenuStyled from "./MultiSelectMenu.styled";
import MultiSelectMenuItem from "./MultiSelectMenuItem/MultiSelectMenuItem";

const MultiSelectMenu: FC<MultiSelectMenuProps> = (props) => {
    const { value = [], isOpen } = props;
    
    let component: React.ReactNode = <>Nothing to show here</>;

    if(value.length > 0) {
        component = props.value.map((option) => (
            <MultiSelectMenuItem 
                key={option.value} 
                value={option.value} 
                label={option.label} 
            />
        ));
    }

    if(isOpen) {
        return <MultiSelectMenuStyled>{component}</MultiSelectMenuStyled>;
    }else{
        return null;
    }
}

export default MultiSelectMenu;