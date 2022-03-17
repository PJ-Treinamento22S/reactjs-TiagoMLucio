import React from "react";
import * as S from "./styles";
import UserInterface from "../../interfaces/User";
import Profile from "../../assets/ProfileDark.svg";
import { wasSearched } from "../Piu";
import { useAuth } from "../../hooks/useAuth";

const UserCard: React.FC<UserInterface> = user => {
    const { id, photo, first_name, last_name, username } = user;
    const { search } = useAuth();

    const newName =
        first_name && last_name
            ? first_name + " " + last_name
            : "User " + id.slice(0, 5);
    const newUserName = username || "user_" + id.slice(0, 5);

    return (
        <S.Container search={wasSearched(user, search)}>
            <S.Avatar src={photo.includes("https") ? photo : Profile} />
            <S.NameAndUser>
                <S.Name>{newName}</S.Name>
                <S.Username>@{newUserName}</S.Username>
            </S.NameAndUser>
            <S.Follow>Follow</S.Follow>
        </S.Container>
    );
};

export default UserCard;
