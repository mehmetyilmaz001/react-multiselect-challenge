import styled from 'styled-components';

const MultiSelectMenuItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: max-content;
    padding: 16px 8px;

    border-bottom: solid 1px #94A3B8;

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