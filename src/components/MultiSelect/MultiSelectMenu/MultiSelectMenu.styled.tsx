import styled from "styled-components";

const MultiSelectMenuStyled = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;

    background-color: #fff;
    border: solid 1px #94A3B8;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NoResultStyled = styled.div`
    padding: 10px;
    color: #94A3B8;
`;

export default MultiSelectMenuStyled;