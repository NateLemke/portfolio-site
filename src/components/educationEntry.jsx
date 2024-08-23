import React from "react";
import styles from "@/styles/Skills.module.css";

export default function EducationEntry({topText, midText, bottomText}) {
    return(
        <div className={`${styles.eduEntryContainer} ${styles.slideUp}`}>
            <img src="/bcitLogo.png" className={`${styles.eduImage}`}/>
            <div className={`${styles.eduTextDiv}`}>
                <p>{topText}</p>
                <p>{midText}</p>
                <p>{bottomText}</p>
            </div>
        </div>
    );
}