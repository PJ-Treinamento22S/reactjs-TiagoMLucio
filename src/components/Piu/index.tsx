import React from "react";
import * as S from "./styles";
import PiuInterface from "../../interfaces/Piu";
import Profile from "../../assets/Profile.svg";
import Like from "../../assets/Likes.svg";
import Bookmark from "../../assets/BookmarkMsg.svg";
import RedLike from "../../assets/RedLikes.svg";
import RedBookmark from "../../assets/RedBookmarkMsg.svg";
import Share from "../../assets/Share.svg";
import { myUser } from "../Wrapper";

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

const Piu: React.FC<PiuInterface> = ({ id, user, likes, text, created_at }) => {
    const handleLike = () => {
        return;
    };

    const handleFavorite = () => {
        return;
    };

    return (
        <S.Wrapper>
            <S.User>
                <S.Avatar
                    src={user.photo.includes("https") ? user.photo : Profile}
                />
                <S.Username>
                    @{user.username || "user_" + user.id.slice(0, 5)}
                </S.Username>
            </S.User>
            <S.PiuBox>
                <S.PiuText>{text}</S.PiuText>
                <S.CreatedTime>{getCreatedTime(created_at)}</S.CreatedTime>
                <S.Reactions>
                    <S.LikeData>
                        <S.ReactionIcon
                            src={
                                likes.find(
                                    like =>
                                        like.user.username === "xX_felipinho_Xx"
                                )
                                    ? RedLike
                                    : Like
                            }
                            onClick={handleLike}
                        />
                        <S.Amount>{likes.length}</S.Amount>
                    </S.LikeData>
                    <S.ReactionIcon
                        src={
                            myUser.favorites.find(piu => piu.id === id)
                                ? RedBookmark
                                : Bookmark
                        }
                        onClick={handleFavorite}
                    />
                    <S.ReactionIcon src={Share} />
                </S.Reactions>
            </S.PiuBox>
        </S.Wrapper>
    );
};

export default Piu;
