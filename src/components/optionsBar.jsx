import React from "react";
import { IoSunny } from "react-icons/io5";
import { TbHeartRateMonitor } from "react-icons/tb";

export default function OptionsBar({scanlineFunc, darkModeFunc, darkMode}) {

    return(
    <div className={`optionsDiv`}>
        <TbHeartRateMonitor className={`hoverGrow ${darkMode && "whiteText"}`} tabIndex="0" onClick={scanlineFunc}/>
        <IoSunny className={`hoverGrow ${darkMode && "whiteText"}`} tabIndex="0" onClick={darkModeFunc}/>
    </div>
    );

}