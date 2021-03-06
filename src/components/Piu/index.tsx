import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import * as S from "./styles";
import PiuInterface from "../../interfaces/Piu";
import UserInterface from "../../interfaces/User";
import Profile from "../../assets/Profile.svg";
import Like from "../../assets/Likes.svg";
import Bookmark from "../../assets/BookmarkMsg.svg";
import RedLike from "../../assets/RedLikes.svg";
import RedBookmark from "../../assets/RedBookmarkMsg.svg";
import Msg from "../../assets/Msg.svg";
import Trash from "../../assets/Trash.svg";
import Share from "../../assets/Share.svg";
import api from "../../config/api";

//Retorna quanto tempo atrás o piu foi criado (baseado na Date dada como entrada)
function getCreatedTime(time: Date) {
    const diff = new Date().getTime() - new Date(time).getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (days === 1) return "Yesterday";
    return `${years || months || days || hours || minutes || seconds || "0"} ${
        years > 1
            ? "years"
            : years === 1
            ? "year"
            : months > 1
            ? "months"
            : months === 1
            ? "month"
            : days > 1
            ? "days"
            : hours > 1
            ? "hours"
            : hours === 1
            ? "hour"
            : minutes > 1
            ? "minutes"
            : minutes === 1
            ? "minute"
            : seconds !== 1
            ? "seconds"
            : "second"
    } ago`;
}

//Retorna um booleano que indica se o usuário está sendo pesquisado no momento ou não
export const wasSearched = (user: UserInterface, search: string) =>
    (user.username || "user_" + user.id.slice(0, 5))
        .toLowerCase()
        .includes(search) ||
    (user.first_name && user.last_name
        ? user.first_name + " " + user.last_name
        : "User " + user.id.slice(0, 5)
    )
        .toLowerCase()
        .includes(search);

//Error Handling para usuários sem nome ou username
export const newName = ({ first_name, last_name, id }: UserInterface) =>
    first_name && last_name
        ? first_name + " " + last_name
        : "User " + id.slice(0, 5);

export const newUserName = ({ username, id }: UserInterface) =>
    username || "user_" + id.slice(0, 5);

const Piu: React.FC<PiuInterface> = ({ id, user, likes, text, created_at }) => {
    const { myUsername, myUser, favorites, search, setReload } = useAuth();

    //booleano que indica se o myUser deu like nesse piu
    const [liked, setLiked] = useState(
        likes.find(piuLike => piuLike.user.username === myUsername) ? 1 : 0
    );

    //booleano que indica se o myUser favoritou esse piu
    const [favorited, setFavorited] = useState(false);

    useEffect(() => {
        setFavorited(Boolean(myUser?.favorites.find(piu => piu.id === id)));
    }, [myUser]);

    const handleLike = async () => {
        await api.post("/pius/like", { piu_id: id });
        setLiked((liked + 1) % 2);
    };

    const handleFavorite = async () => {
        if (favorited) await api.post("/pius/unfavorite", { piu_id: id });
        else await api.post("/pius/favorite", { piu_id: id });
        setFavorited(!favorited);
    };

    const handleDelete = async () => {
        await api.delete("/pius", { data: { piu_id: id } });
        setReload(true);
    };

    //Função Share que abre o whats app com a mensagem a ser compartilhada (incluindo o seu autor)
    function openWhatsApp() {
        window.open(
            `whatsapp://send?text=Fowarded Message - PiuPiuwer%0aFrom: ${newName(
                user
            )} (@${newUserName(user)})%0a%0a${text.replaceAll("\n", "%0a")}`
        );
    }

    //Função Msg que abre o email com o draft para o usúario desejado
    function openEmail() {
        window.open(`mailto:${user.email}?subject=PiuPiuwer Reply`);
    }

    return (
        <S.Wrapper
            favorited={favorited}
            favorites={favorites}
            search={wasSearched(user, search)}
        >
            <S.User>
                <S.Avatar
                    src={user.photo}
                    onError={e => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (e.target as any).src = Profile;
                    }}
                />
                <S.Username>@{newUserName(user)}</S.Username>
            </S.User>
            <S.PiuBox>
                <S.PiuText>{text}</S.PiuText>
                <S.CreatedTime>{getCreatedTime(created_at)}</S.CreatedTime>
                <S.Reactions>
                    <S.LikeData>
                        <S.ReactionIcon
                            src={liked ? RedLike : Like}
                            onClick={handleLike}
                        />
                        <S.Amount>
                            {likes.length -
                                (likes.find(
                                    piuLike => piuLike.user.id === myUser?.id
                                )
                                    ? 1
                                    : 0) +
                                (liked ? 1 : 0)}
                        </S.Amount>
                    </S.LikeData>
                    <S.ReactionIcon
                        src={favorited ? RedBookmark : Bookmark}
                        onClick={handleFavorite}
                    />
                    <S.ReactionIcon
                        src={Msg}
                        onClick={openEmail}
                        hidden={myUser?.id === user.id}
                    />
                    <S.ReactionIcon
                        src={Trash}
                        onClick={handleDelete}
                        hidden={myUser?.id !== user.id}
                    />
                    <S.ReactionIcon src={Share} onClick={openWhatsApp} />
                </S.Reactions>
            </S.PiuBox>
        </S.Wrapper>
    );
};

export default Piu;
