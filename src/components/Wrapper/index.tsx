import React, { useEffect } from "react";
import Button from "../Button/index";
import CreatePiu from "../CreatePiu";
import Piu from "../Piu";
import UserCard from "../UserCard";
import { useAuth } from "../../hooks/useAuth";

import * as S from "./styles";

import Bookmark from "../../assets/Bookmark.svg";
import FilterAToZ from "../../assets/A-_Z.svg";
import FilterZToA from "../../assets/A_-Z.svg";
import Filter1To9 from "../../assets/1-_9.svg";
import Filter9To1 from "../../assets/1_-9.svg";
import api from "../../config/api";
import UserInterface from "../../interfaces/User";

const Wrapper: React.FC = () => {
    const {
        pius,
        users,
        myUser,
        setPius,
        setUsers,
        setMyUser,
        reload,
        setReload,
    } = useAuth();

    useEffect(() => {
        async function getData() {
            const responsePius = await api.get("/pius");
            const responseUsers = await api.get("/users");
            setPius(responsePius.data);
            setUsers(responseUsers.data);
        }
        getData();
        return setReload(false);
    }, [reload]);

    useEffect(() => {
        setMyUser(
            () =>
                users.find(
                    user => user.username === "profcarvalho"
                ) as UserInterface
        );
    }, [users]);

    console.log(myUser);

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
