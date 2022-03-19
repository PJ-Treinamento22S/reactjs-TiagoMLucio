import styled from "styled-components";

interface ContainerProps {
    search: boolean;
}

export const Container = styled.li<ContainerProps>`
    display: ${props => (props.search ? "flex" : "none")};
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;

    height: 56px;

    font-size: 12px;

    border-radius: 16px;
    padding: 4px 16px 4px 16px;
    margin: 8px 0;
    background: var(--primaryDark);

    box-shadow: var(--light);
`;

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    border: solid 2px var(--white);
    margin-right: -6px;
    background: var(--white);
`;

export const NameAndUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 4px;
`;

export const Name = styled.p`
    width: 100px;
    height: 16px;
    text-align: left;
    overflow: hidden;
`;

export const Username = styled.p`
    width: 100px;
    height: 16px;
    text-align: left;
    overflow: hidden;
`;

export const Follow = styled.button`
    background: var(--secondary);
    width: 64px;
    height: 24px;
    border-radius: 8px;
`;
