import styled, { css } from 'styled-components';

const MultiSelectStyled = styled.div<{$hasError?: boolean}>`
    display: flex;
    align-items: center;
    gap: 8px;
    height: fit-content;

    position: relative;
    background-color: #fff;
    border: solid 1px #94A3B8;
    border-radius: 16px;
    padding: 8px;
    cursor: text;

    ${({$hasError}) => $hasError && css`
        border-color: #F56565;

        .error{
            color: #F56565;
        }
    `}
`;

export default MultiSelectStyled;