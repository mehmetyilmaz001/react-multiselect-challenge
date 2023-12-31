import styled from 'styled-components';

const MultiSelectTagStyled = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 40px;
    padding: 0 16px;
    border-radius: 12px;
    background-color: #E2E8F0;
    cursor: default;

    .label {
        font-size: 16px;
        line-height: 16px;
        font-weight: 600;
        color: #334155;
    }

    .remove-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        padding: 0;
        border: none;
        border-radius: 12px;
        background-color: #94A3B8;
        outline: none;
        cursor: pointer;

        svg {
            /* width: px;
            height: 10px; */
        }

        &:hover {
            background-color: #9fa9b3;
        }
    }
`;

export default MultiSelectTagStyled;