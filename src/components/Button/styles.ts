import styled from "styled-components";

interface CointainerProps {
    isActive: boolean;
}

export const Container = styled.div<CointainerProps>`
    display: flex;
    list-style: none;
    align-items: center;

    height: 32px;

    color: var(--white);
    font-size: 14px;
    font-weight: 600;

    border-radius: 12px;
    padding: 2px 24px 2px 12px;
    margin-top: 8px;
    background: ${props =>
        props.isActive ? "var(--secondary)" : "var(--primary)"};
    box-shadow: var(--light);

    &:first-child {
        margin-bottom: 24px;
    }
`;

export const FilterImg = styled.img`
    width: 24px;
    height: auto;
    margin-left: 8px;
    margin-right: 8px;
`;

export const FilterType = styled.p`
    width: 100px;
    justify-content: center;
    text-align: center;
`;
