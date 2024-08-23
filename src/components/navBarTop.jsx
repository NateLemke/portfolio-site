import React from "react";
import Link from "next/link"
import OptionsBar from "./optionsBar";
import { IoMdHome } from "react-icons/io";

export default function NavBarTop({scanlineFunc, darkModeFunc, darkMode}) {
    return (
        <div className={`topBar ${darkMode && "whiteText"}`}>
            <nav>
                <ul>
                    <li><Link href={"/"}><IoMdHome className={`homeIcon hoverGrow`}/></Link></li>
                    <li className={`navText hoverGrow`}><Link href={"/about"}><span className={`firstLetter`}>A</span>bout</Link></li>
                    <li className={`navText hoverGrow`}><Link href={"/skills"}><span className={`firstLetter`}>S</span>kills</Link></li>
                    <li className={`navText hoverGrow`}><Link href={"/projects"}><span className={`firstLetter`}>P</span>rojects</Link></li>
                    <li className={`navText hoverGrow`}><Link href={"/contact"}><span className={`firstLetter`}>C</span>ontact</Link></li>
                </ul>
            </nav>
            <OptionsBar scanlineFunc={scanlineFunc} darkModeFunc={darkModeFunc} darkMode={darkMode}/>
        </div>
    );
}