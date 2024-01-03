import styled from 'styled-components';

const MultiSelectMenuItemStyled = styled.div<{ $highlighted: boolean }>`
    flex-direction: column;
    justify-content: center;
    min-height: 68px;
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
        gap: 8px;
        font-size: 16px;
        cursor: pointer;
        padding: 16px 0px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 20%;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            gap: 2px;

            .label {
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                color: #1F2937;
            }

            .description {
                font-size: 12px;
                line-height: 16px;
                color: #6B7280;
            }
        }
    }
`;

export default MultiSelectMenuItemStyled;