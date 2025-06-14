import {  createContext, useContext } from "react";

// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
    const name = "satya";
    const age = 21;

    return <BioContext.Provider value={{name:name, age:age}}>{children}</BioContext.Provider>
}

// custom hooks

export const useBioContext = () => {
    const context = useContext(BioContext);
    return context;
}