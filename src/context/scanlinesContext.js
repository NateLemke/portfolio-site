import { createContext } from "react";
import { useState } from "react";

export const ScanlinesData = createContext(null);

function ScanlinesContext({children}) {
    const [scanlinesOn, setScanlinesOn] = useState(true);
    const [darkModeOn, setDarkModeOn] = useState(false);

    return (
        <ScanlinesData.Provider value={{scanlinesOn, setScanlinesOn, darkModeOn, setDarkModeOn}}>
            {children}
        </ScanlinesData.Provider>
    );
}

export default ScanlinesContext;