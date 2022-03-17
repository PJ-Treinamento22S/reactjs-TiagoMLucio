import React from "react";
import * as S from "./styles";
import NavIcon from "../NavIcon";
import PiuPiuwerLogo from "../../assets/PiuPiuwerLogo.svg";
import Home from "../../assets/Home.svg";
import Msg from "../../assets/MsgHeader.svg";
import Profile from "../../assets/Profile.svg";
import { useAuth } from "../../hooks/useAuth";

interface HeaderProps {
    page: string;
}

const Header: React.FC<HeaderProps> = ({ page }) => {
    const { setSearch } = useAuth();
    return (
        <>
            <S.Wrapper>
                <S.Logo src={PiuPiuwerLogo} />
                <S.SearchBar
                    type="text"
                    placeholder="Buscar"
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                ></S.SearchBar>
                <S.Nav>
                    <NavIcon src={Home} visible={page === "home"} />
                    <NavIcon src={Msg} visible={page === "msg"} />
                    <NavIcon src={Profile} visible={page === "profile"} />
                </S.Nav>
            </S.Wrapper>
        </>
    );
};

export default Header;
