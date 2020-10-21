import React, { useState, createContext, useContext, FunctionComponent } from "react";
import { TContextType } from "../../interfaces/use-context-type";
import { IHeadLine } from "../../interfaces/headline";

const HEADLINES_INIT_STATE: IHeadLine[] = []

const HeadlinesContext = createContext<TContextType<IHeadLine[]> | undefined>(undefined);

export const useHeadlines = (): TContextType<IHeadLine[]> => useContext(HeadlinesContext)!;

export const HeadlinesContextProvider: FunctionComponent = ({ children }) => {
    const [state, setstate] = useState<IHeadLine[]>(HEADLINES_INIT_STATE)
    return (
        <HeadlinesContext.Provider value={[state, setstate]}>
            {children}
        </HeadlinesContext.Provider>
    )
}