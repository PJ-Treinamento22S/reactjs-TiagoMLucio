import React, { useState, createContext, useContext } from "react";
import PiuInterface from "../interfaces/Piu";
import UserInterface from "../interfaces/User";
type AuthContextType = {
    myUser: UserInterface;
    setMyUser: React.Dispatch<React.SetStateAction<UserInterface>>;
    pius: PiuInterface[];
    setPius: React.Dispatch<React.SetStateAction<PiuInterface[]>>;
    piusFiltered: PiuInterface[];
    setPiusFiltered: React.Dispatch<React.SetStateAction<PiuInterface[]>>;
    users: UserInterface[];
    setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
    favorites: boolean;
    setFavorites: React.Dispatch<React.SetStateAction<boolean>>;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export const AuthProvider: React.FC = ({ children }) => {
    const [pius, setPius] = useState<PiuInterface[]>([] as PiuInterface[]);
    const [piusFiltered, setPiusFiltered] = useState<PiuInterface[]>(
        [] as PiuInterface[]
    );
    const [users, setUsers] = useState<UserInterface[]>([] as UserInterface[]);
    const [myUser, setMyUser] = useState<UserInterface>({} as UserInterface);
    const [reload, setReload] = useState(false);

    const [favorites, setFavorites] = useState(false);
    const [filter, setFilter] = useState("");

    return (
        <AuthContext.Provider
            value={{
                myUser,
                pius,
                piusFiltered,
                users,
                setPius,
                setPiusFiltered,
                setUsers,
                setMyUser,
                reload,
                setReload,
                favorites,
                setFavorites,
                filter,
                setFilter,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    return context;
};
