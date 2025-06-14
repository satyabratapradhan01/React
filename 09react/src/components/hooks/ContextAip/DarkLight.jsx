import React, { createContext, use, useState } from 'react';

export const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    };

    return (
        <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const DarkLight = () => {
    const { theme, handleToggleTheme } = use(ThemeContext);

    return (
        <div
            className={` p-4 h-lvh flex flex-col justify-center items-center  ${theme === "dark" ? "bg-gray-800" : "bg-white"
                } `}
        >
            <h1 className={`my-4 text-l  ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}>Dark Light Mode Website</h1>
            <p className={`my-4 text-l  ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}>Hello !! My React V19</p>
            <button onClick={handleToggleTheme}  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4">switch to {theme} mode</button>
        </div>
    )
}

