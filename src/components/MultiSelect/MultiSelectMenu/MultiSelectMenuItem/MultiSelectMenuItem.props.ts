export interface MultiSelectMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
    isSelected?: boolean;
    highlighted?: boolean;
    onClick?: () => void;
}