import styled from "styled-components";

interface WrapperProps {
    isFavorite: boolean;
    favorites: boolean;
    search: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    display: ${props =>
        props.search
            ? props.isFavorite
                ? "block"
                : props.favorites
                ? "none"
                : "block"
            : "none"};
`;

export const User = styled.div`
    position: relative;
    left: 16px;
    bottom: -24px;

    display: flex;
    align-items: center;
`;

export const Avatar = styled.img`
    z-index: 1;
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid var(--primaryDark);
    box-shadow: var(--light);
    background: var(--primaryDark);
`;

export const Username = styled.p`
    position: relative;
    left: -20px;
    z-index: 0;

    width: auto;
    height: 24px;

    font-size: 12px;
    line-height: 24px;

    padding-left: 24px;
    padding-right: 12px;
    background: var(--secondary);
    border-radius: 0 16px 16px 0;

    box-shadow: var(--light);
`;

export const PiuBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 32px 20px 16px 20px;

    width: 400px;

    background: var(--primaryDark);
    box-shadow: var(--light);
    border-radius: 16px;
`;

export const PiuText = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    overflow-wrap: break-word;
    width: 360px;
    margin: 8px 0 16px 0;
`;

export const CreatedTime = styled.p`
    color: var(--white);
    font-size: 12px;
    width: 360px;
    text-align: right;
    margin-bottom: 12px;
`;

export const Reactions = styled.div`
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LikeData = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100px;
`;

export const ReactionIcon = styled.img`
    width: 24px;

    &:last-child {
        margin-left: 76px;
    }
`;

export const Amount = styled.p`
    margin-left: 8px;
`;
