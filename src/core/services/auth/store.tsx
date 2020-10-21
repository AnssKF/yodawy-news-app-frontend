import React, { useState, createContext, useContext, FunctionComponent } from "react";
import { TContextType } from "../../interfaces/use-context-type";
import { IAuthLoginResPayload } from "../../interfaces/auth/login";


const AUTH_INIT_STATE: IAuthLoginResPayload = {
    access_token: '',
    user: null
}
const AuthContext = createContext<TContextType<IAuthLoginResPayload> | undefined>(undefined);

export const useAuth = (): TContextType<IAuthLoginResPayload> => useContext(AuthContext)!;

export const AuthContextProvider: FunctionComponent = ({ children }) => {
    const [state, setstate] = useState<IAuthLoginResPayload>(AUTH_INIT_STATE)
    return (
        <AuthContext.Provider value={[state, setstate]}>
            {children}
        </AuthContext.Provider>
    )
}