import React from "react";
import * as S from "./styles";
import UserInterface from "../../interfaces/User";
import Profile from "../../assets/ProfileDark.svg";

const UserCard: React.FC<UserInterface> = ({
    id,
    photo,
    first_name,
    last_name,
    username,
}) => {
    return (
        <S.Container>
            <S.Avatar src={photo.includes("https") ? photo : Profile} />
            <S.NameAndUser>
                <S.Name>
                    {first_name && last_name
                        ? first_name + " " + last_name
                        : "User " + id.slice(0, 5)}
                </S.Name>
                <S.Username>@{username || "user_" + id.slice(0, 5)}</S.Username>
            </S.NameAndUser>
            <S.Follow>Follow</S.Follow>
        </S.Container>
    );
};

export default UserCard;
