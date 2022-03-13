import React from "react";
import * as S from "./styles";
import Line from "../../assets/IconLine.svg";

// import { Container } from './styles';

interface NavIconProps {
    src: string;
    visible: boolean;
}

const NavIcon: React.FC<NavIconProps> = ({ src, visible }) => {
    return (
        <S.Wrapper>
            <S.Icon src={src}></S.Icon>
            <S.Line src={Line} visible={visible}></S.Line>
        </S.Wrapper>
    );
};

export default NavIcon;
