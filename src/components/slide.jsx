import React from "react";
import Link from "next/link"
import styles from "@/styles/Projects.module.css";

export default function Slide({image, title, description, link, active, darkMode}) {
    return(
    <Link href={link} className={`${active ? styles.activeSlide: ""} ${styles.slide}`}>
        <div className={`${styles.slideDiv} hoverGrow`}>
            <div className={`${styles.slideImageDiv}`}>
                <img src={image} className={`${styles.projectImage}`}/>
            </div>
            <div className={`${styles.slideTextDiv}`}>
                <div className={`${styles.textWrapper}`}>
                    <h3 className={`${styles.projectTitle}`}>{title}</h3>
                    <p className={`${styles.projectDesc}`}>{description}</p>
                </div>
            </div>
        </div>
    </Link>
    );
}