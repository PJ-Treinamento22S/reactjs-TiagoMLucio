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

export let myUser: UserInterface;

// export const UserContext = createContext({});

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
            myUser = users.data.find(
                (user: { username: string }) =>
                    user.username === "xX_felipinho_Xx"
            );
            console.log(myUser);
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
                        <Piu key={piu.id} {...piu} />
                    ))}
                </S.Pius>
            </S.Middle>
            <S.Right>
                <S.SectionTitle>Usuários</S.SectionTitle>
                <S.UserList>
                    {users.map(user => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </S.UserList>
            </S.Right>
        </S.Content>
    );
};

export default Wrapper;
