import styled from 'styled-components';

const MultiSelectMenuItemStyled = styled.div<{$highlighted: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: max-content;
    padding: 16px 8px;
    border-bottom: solid 1px #94A3B8;
    overflow: hidden;

    background-color: ${({ $highlighted }) => $highlighted ? '#E4E7EB' : '#FFFFFF'};

    &:hover {
        background-color: #E4E7EB;
    }

    &:last-child {
        border-bottom: none;
    }
    
    label {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export default MultiSelectMenuItemStyled;