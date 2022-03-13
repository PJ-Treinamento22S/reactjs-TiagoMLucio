import React, { useState } from "react";
import * as S from "./styles";
import Divisor from "../../assets/Divisor.svg";
import Img from "../../assets/Img.svg";
import GIF from "../../assets/GIF.svg";
import Emoji from "../../assets/Emoji.svg";
import api from "../../config/api";

const CreatePiu: React.FC = () => {
    const [text, setText] = useState("");
    const handlePost = async () => {
        await api.post("/pius", { text });
        window.location.reload();
    };
    return (
        <S.Container>
            <S.CreateTitle>Criar um Piu</S.CreateTitle>
            <S.TextBox>
                <S.CreatePiuText
                    wrap="hard"
                    placeholder="Texto"
                    onChange={e => {
                        setText(e.target.value);
                    }}
                ></S.CreatePiuText>
                <S.TextInfo>
                    <S.CharacterCount characterCount={text.length}>
                        {text.length + "/140"}
                    </S.CharacterCount>
                    <S.Divisor src={Divisor} />
                    <S.WrapperBottom>
                        <S.Icons>
                            <S.Icon src={Img}></S.Icon>
                            <S.Icon src={GIF}></S.Icon>
                            <S.Icon src={Emoji}></S.Icon>
                        </S.Icons>
                        <S.Post onClick={handlePost}>Postar</S.Post>
                    </S.WrapperBottom>
                </S.TextInfo>
            </S.TextBox>
        </S.Container>
    );
};

export default CreatePiu;
