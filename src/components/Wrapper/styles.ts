import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const ExtraLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Left = styled.div`
    min-width: 300px;
    margin-top: 8px;
    padding: 0 24px 24px 24px;
    border-radius: 8px;
    background: var(--primaryLight);
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 540px;
    min-height: 100%;
    flex-shrink: 1;

    margin: 8px 24px 8px 24px;
    padding-top: 8px;
    padding-bottom: 24px;

    border-radius: 8px;
    background: var(--primaryLight);
`;

export const Right = styled.div`
    display: inline-block;
    flex-direction: column;

    padding: 0 24px;
    height: auto;
    margin-top: 8px;
    border-radius: 8px;
    background: var(--primaryLight);
`;

export const SectionTitle = styled.h2`
    margin: 4px 0 0 16px;
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 8px;
    color: var(--primary);
`;

// Left

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: space-between;
`;

// Middle

export const Warning = styled.div`
    width: 344px;
    color: var(--secondary);
    font-size: 12px;
    text-align: left;
`;

export const Pius = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

// Right

export const UserList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;
