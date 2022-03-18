import React from "react";
import * as S from "./styles";
import UserInterface from "../../interfaces/User";
import Profile from "../../assets/ProfileDark.svg";
import { wasSearched } from "../Piu";
import { useAuth } from "../../hooks/useAuth";
import { newName, newUserName } from "../Piu";

const UserCard: React.FC<UserInterface> = user => {
    const { photo } = user;
    const { search } = useAuth();

    return (
        <S.Container search={wasSearched(user, search)}>
            <S.Avatar src={photo.includes("https") ? photo : Profile} />
            <S.NameAndUser>
                <S.Name>{newName(user)}</S.Name>
                <S.Username>@{newUserName(user)}</S.Username>
            </S.NameAndUser>
            <S.Follow>Follow</S.Follow>
        </S.Container>
    );
};

export default UserCard;
