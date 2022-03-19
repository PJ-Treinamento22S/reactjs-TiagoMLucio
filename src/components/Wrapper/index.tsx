import React, { useEffect, useState } from "react";
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
        myUsername,
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

    const filterButtonsInfo = [
        {
            src: FilterAToZ,
            type: "Username",
            filterType: "FilterAToZ",
        },
        {
            src: FilterZToA,
            type: "Username",
            filterType: "FilterZToA",
        },
        {
            src: Filter1To9,
            type: "Tamanho",
            filterType: "Filter1To9",
        },
        {
            src: Filter9To1,
            type: "Tamanho",
            filterType: "Filter9To1",
        },
    ];

    const [userListRight, setUserListRight] = useState(true);

    useEffect(() => {
        setUserListRight(window.innerWidth >= 1260);
    }, []);

    //Pegar os usuários e pius da api
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

    //Encontrar o usuário que estou logado
    useEffect(() => {
        setMyUser(
            () =>
                users.find(
                    user => user.username === myUsername
                ) as UserInterface
        );
    }, [users]);

    useEffect(() => {
        setPiusFiltered(pius);
        setFilter(filter);
    }, []);

    //Filtrar os pius baseado no filtro escolhido
    useEffect(() => {
        setPiusFiltered(
            [...pius].sort((a, b) => {
                switch (filter) {
                    case "FilterAToZ":
                        return (a.user.username ||
                            "user_" + a.user.id.slice(0, 5)) >
                            (b.user.username || "user_" + b.user.id.slice(0, 5))
                            ? 1
                            : -1;
                    case "FilterZToA":
                        return (a.user.username ||
                            "user_" + a.user.id.slice(0, 5)) <
                            (b.user.username || "user_" + b.user.id.slice(0, 5))
                            ? 1
                            : -1;
                    case "Filter1To9":
                        return a.text.length > b.text.length ? 1 : -1;
                    case "Filter9To1":
                        return a.text.length < b.text.length ? 1 : -1;
                    default:
                        return new Date(b.created_at).getTime() >
                            new Date(a.created_at).getTime()
                            ? 1
                            : -1;
                }
            })
        );
    }, [pius, filter]);

    function changeFilter(filterStr: string) {
        return () =>
            filter === filterStr ? setFilter("") : setFilter(filterStr);
    }

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
                        {filterButtonsInfo.map(buttonInfo => {
                            const { src, type, filterType } = buttonInfo;
                            return (
                                <Button
                                    key={filterType}
                                    src={src}
                                    type={type}
                                    setFunction={changeFilter(filterType)}
                                    isActive={filter === filterType}
                                />
                            );
                        })}
                    </S.Buttons>
                </S.Left>
                <S.Right activated={!userListRight}>
                    <S.SectionTitle>Usuários</S.SectionTitle>
                    <S.UserList>
                        {users.map(user => (
                            <UserCard key={user.id} {...user} />
                        ))}
                    </S.UserList>
                </S.Right>
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
            <S.Right activated={userListRight}>
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
