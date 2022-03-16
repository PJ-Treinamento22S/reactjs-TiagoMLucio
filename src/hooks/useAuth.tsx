import React, { useState, createContext, useContext } from "react";
import PiuInterface from "../interfaces/Piu";
import UserInterface from "../interfaces/User";
type AuthContextType = {
    myUser: UserInterface;
    setMyUser: React.Dispatch<React.SetStateAction<UserInterface>>;
    pius: PiuInterface[];
    setPius: React.Dispatch<React.SetStateAction<PiuInterface[]>>;
    users: UserInterface[];
    setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
    reload: boolean;
    setReload: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export const AuthProvider: React.FC = ({ children }) => {
    const [pius, setPius] = useState<PiuInterface[]>([] as PiuInterface[]);
    const [users, setUsers] = useState<UserInterface[]>([] as UserInterface[]);
    const [myUser, setMyUser] = useState<UserInterface>({} as UserInterface);
    const [reload, setReload] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                myUser,
                pius,
                users,
                setPius,
                setUsers,
                setMyUser,
                reload,
                setReload,
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
