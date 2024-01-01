import styled from 'styled-components';

const MultiSelectMenuItemStyled = styled.div<{$highlighted: boolean}>`
    flex-direction: column;
    justify-content: center;
    min-height: 48px;
    width: 100%;
    height: max-content;
    padding: 0px 8px;
    border-bottom: solid 1px #94A3B8;
    overflow: hidden;
    max-width: 100%;
    display: inline-flex;

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
        padding: 16px 0px;
    }
`;

export default MultiSelectMenuItemStyled;