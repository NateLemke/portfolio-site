import React from "react";
import styles from "@/styles/Skills.module.css";

export default function SkillTag({text, logo, color, offset, darkMode}) {
    return(
        <div className={`${styles.tagWrapper}`}>
            <div className={`${styles.skillTagDiv} ${styles.slideUp} ${darkMode && "blackText"}`} 
            style={{backgroundColor: color, animationDelay: `${offset}s`}}>
                <span className={`${styles.skillLogo}`}>{logo}</span>
                <p>{text}</p>
            </div>
        </div>
    );
}