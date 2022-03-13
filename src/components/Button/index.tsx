import React from "react";
import * as S from "./styles";

interface ButtonProps {
    src: string;
    type: string;
}

const Button: React.FC<ButtonProps> = ({ src, type }) => {
    return (
        <S.Container>
            <S.FilterImg src={src} />
            <S.FilterType>{type}</S.FilterType>
        </S.Container>
    );
};

export default Button;
