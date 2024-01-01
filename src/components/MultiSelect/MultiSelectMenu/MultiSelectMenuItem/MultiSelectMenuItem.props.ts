export interface MultiSelectMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string;
    isSelected?: boolean;
    onClick?: () => void;
}