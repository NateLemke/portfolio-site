import React from "react";
import Link from "next/link"
import styles from "@/styles/Home.module.css";

export default function NavElement({text, link, icon, data, offset, darkMode}) {
    return (
        <div className={`${styles.navButton} ${styles.scaleUp} 
        ${darkMode ? styles.darkBoarder: styles.lightBoarder}`}
        style={{animationDelay:`${offset}s`}}>
            <Link href={{pathname:link, query:data}} className={`${styles.mainNavLink}`}>
              <div className={`${styles.horizontalBar} ${styles.growY} 
              ${darkMode ? styles.darkBackground: styles.lightBackground}`}
              style={{animationDelay:`${offset}s`}}></div>
              <div className={`${styles.verticalBar} ${styles.growX} 
              ${darkMode ? styles.darkBackground: styles.lightBackground}`}
              style={{animationDelay:`${offset}s`}}></div>
              <h3 className={`${styles.buttonText} ${styles.fadeIn} ${darkMode && "whiteText"}`}
              style={{animationDelay:`${offset}s`}}>{text}</h3>
              <span className={`${styles.buttonIcon} 
              ${darkMode ? "blackText": "whiteText"} ${darkMode && styles.whiteBackground}`}>{icon}</span>
            </Link>
        </div>
        
    )
}
