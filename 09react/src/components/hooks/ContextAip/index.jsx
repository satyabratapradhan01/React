import {  createContext } from "react";

// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
    const name = "satya";

    return <BioContext.Provider value={name}>{children}</BioContext.Provider>
}