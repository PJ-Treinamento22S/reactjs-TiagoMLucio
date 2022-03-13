import styled from "styled-components";
import Search from "../../assets/Search.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 48px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 48px;

    background: var(--primary);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
    height: 24px;
    width: auto;
    margin-right: 215.2px;
`;

export const SearchBar = styled.input`
    width: 280px;
    height: 32px;
    padding: 0 16px 0 52px;
    border-radius: 12px;
    margin: 0 24px;

    color: var(--gray);
    font-size: 16px;
    font-weight: 600;

    background-image: url();
    background: var(--white) url(${Search}) no-repeat 16px center;
    box-shadow: var(--light);

    &::placeholder {
        font-weight: 600;
        font-size: 14px;
        color: var(--gray);
    }
`;

export const Nav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 272px;
    margin-top: 8px;
    flex-shrink: 1;
`;
