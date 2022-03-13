import styled from "styled-components";

export const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 8px;
    justify-content: space-between;
    flex-shrink: 1;
`;

export const Icon = styled.img`
    height: 24px;
    width: 24px;
    margin-bottom: 6px;
`;

interface LineProps {
    visible: boolean;
}

export const Line = styled.img<LineProps>`
    display: ${props => (props.visible ? "block" : "none")};
    width: 36px;
    height: 4px;
`;
