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
        piusFiltered,
        users,
        setPius,
        setPiusFiltered,
        setUsers,
        setMyUser,
        reload,
        setReload,
        setFavorites,
        favorites,
        filter,
        setFilter,
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

    useEffect(() => {
        setPiusFiltered(pius);
        setFilter(filter);
    }, []);

    // pius.forEach(piu => console.log(piu.text, piu.text.length));

    useEffect(() => {
        console.log("useEffect");
        const sorted = pius.sort((a, b) => {
            switch (filter) {
                // case "FilterAToZ":
                //     return a.user.username - b.user.username;
                // case "FilterZToA":
                //     return b.user.username - a.user.username;
                case "Filter1To9":
                    return a.text.length > b.text.length ? 1 : -1;
                case "Filter9To1":
                    return b.text.length > a.text.length ? 1 : -1;
                default:
                    return new Date(b.created_at).getTime() >
                        new Date(a.created_at).getTime()
                        ? 1
                        : -1;
            }
        });
        console.log("sorted:", sorted);
        setPiusFiltered(sorted);
    }, [pius, filter]);

    function changeFilter(filterStr: string) {
        return () =>
            filter === filterStr ? setFilter("") : setFilter(filterStr);
    }

    console.log(filter);

    return (
        <S.Content>
            <S.ExtraLeft>
                <S.Left>
                    <S.SectionTitle>Filtros</S.SectionTitle>
                    <S.Buttons>
                        <Button
                            src={Bookmark}
                            type={"Favoritos"}
                            setFunction={() => {
                                setFavorites(!favorites);
                            }}
                            isActive={favorites}
                        />
                        <Button
                            src={FilterAToZ}
                            type={"Username"}
                            setFunction={changeFilter("FilterAToZ")}
                            isActive={filter === "FilterAToZ"}
                        />
                        <Button
                            src={FilterZToA}
                            type={"Username"}
                            setFunction={changeFilter("FilterZToA")}
                            isActive={filter === "FilterZToA"}
                        />
                        <Button
                            src={Filter1To9}
                            type={"Tamanho"}
                            setFunction={changeFilter("Filter1To9")}
                            isActive={filter === "Filter1To9"}
                        />
                        <Button
                            src={Filter9To1}
                            type={"Tamanho"}
                            setFunction={changeFilter("Filter9to1")}
                            isActive={filter === "Filter9to1"}
                        />
                    </S.Buttons>
                </S.Left>
            </S.ExtraLeft>
            <S.Middle>
                <CreatePiu />
                <S.Warning></S.Warning>
                <S.Pius>
                    {piusFiltered.map(piu => (
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
