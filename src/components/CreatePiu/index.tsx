import React, { useState } from "react";
import * as S from "./styles";
import Divisor from "../../assets/Divisor.svg";
import Img from "../../assets/Img.svg";
import GIF from "../../assets/GIF.svg";
import Emoji from "../../assets/Emoji.svg";
import api from "../../config/api";
import { useAuth } from "../../hooks/useAuth";

const CreatePiu: React.FC = () => {
    const { setReload } = useAuth();

    const [displayWarning, setDisplayWarning] = useState(false);
    const [text, setText] = useState("");

    const handlePost = async () => {
        if (text.length === 0) setDisplayWarning(true);
        else if (text.length > 140) setDisplayWarning(true);
        else {
            setDisplayWarning(false);
            await api.post("/pius", { text });
            setText("");
            setReload(true);
        }
    };
    return (
        <>
            <S.Container>
                <S.CreateTitle>Criar um Piu</S.CreateTitle>
                <S.TextBox>
                    <S.CreatePiuText
                        wrap="hard"
                        placeholder="Texto"
                        characterCount={text.length}
                        onChange={e => {
                            setText(e.target.value);
                        }}
                        value={text}
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
            <S.Warning display={displayWarning}>{`Não é possível enviar Pius ${
                text.length === 0 ? "vazios" : "com mais de 140 caracteres"
            }`}</S.Warning>
        </>
    );
};

export default CreatePiu;
