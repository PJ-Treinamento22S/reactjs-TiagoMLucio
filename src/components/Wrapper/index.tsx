import React, { useState, useEffect } from "react";
import Button from "../Button/index";
import CreatePiu from "../CreatePiu";
import Piu from "../Piu";
import UserCard from "../UserCard";
import PiuInterface from "../../interfaces/Piu";
import UserInterface from "../../interfaces/User";

import * as S from "./styles";

import Bookmark from "../../assets/Bookmark.svg";
import FilterAToZ from "../../assets/A-_Z.svg";
import FilterZToA from "../../assets/A_-Z.svg";
import Filter1To9 from "../../assets/1-_9.svg";
import Filter9To1 from "../../assets/1_-9.svg";
import api from "../../config/api";

const Wrapper: React.FC = () => {
    const [pius, setPius] = useState<PiuInterface[]>([]);
    const [users, setUsers] = useState<UserInterface[]>([]);

    useEffect(() => {
        async function getPius() {
            const pius = await api.get("/pius");
            setPius(pius.data);
        }
        async function getUsers() {
            const users = await api.get("/users");
            setUsers(users.data);
        }
        getPius();
        getUsers();
    }, []);

    return (
        <S.Content>
            <S.ExtraLeft>
                <S.Left>
                    <S.SectionTitle>Filtros</S.SectionTitle>
                    <S.Buttons>
                        <Button src={Bookmark} type={"Favoritos"} />
                        <Button src={FilterAToZ} type={"Username"} />
                        <Button src={FilterZToA} type={"Username"} />
                        <Button src={Filter1To9} type={"Tamanho"} />
                        <Button src={Filter9To1} type={"Tamanho"} />
                    </S.Buttons>
                </S.Left>
            </S.ExtraLeft>
            <S.Middle>
                <CreatePiu />
                <S.Warning></S.Warning>
                <S.Pius>
                    {pius.map(piu => (
                        <Piu
                            key={piu.id}
                            id={piu.id}
                            user={piu.user}
                            likes={piu.likes}
                            text={piu.text}
                            created_at={piu.created_at}
                            updated_at={piu.updated_at}
                        />
                    ))}
                </S.Pius>
            </S.Middle>
            <S.Right>
                <S.SectionTitle>Usuários</S.SectionTitle>
                <S.UserList>
                    {users.map(user => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            username={user.username}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                            about={user.about}
                            photo={user.photo}
                            pius={user.pius}
                            likes={user.likes}
                            following={user.following}
                            followers={user.followers}
                            favorites={user.favorites}
                        />
                    ))}
                </S.UserList>
            </S.Right>
        </S.Content>
    );
};

export default Wrapper;
