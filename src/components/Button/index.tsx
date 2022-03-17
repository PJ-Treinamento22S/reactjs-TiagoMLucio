import React from "react";
import * as S from "./styles";

interface ButtonProps {
    src: string;
    type: string;
    setFunction: () => void;
    isActive: boolean;
}

const Button: React.FC<ButtonProps> = ({
    src,
    type,
    setFunction,
    isActive,
}) => {
    return (
        <S.Container
            onClick={() => {
                setFunction();
            }}
            isActive={isActive}
        >
            <S.FilterImg src={src} />
            <S.FilterType>{type}</S.FilterType>
        </S.Container>
    );
};

export default Button;
