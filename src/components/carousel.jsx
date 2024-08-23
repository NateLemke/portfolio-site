import React from "react";
import { useState } from "react";
import Slide from "./slide";
import {slidesData} from "@/data/slides.js"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import styles from "@/styles/Projects.module.css";


export default function Carousel({darkMode}) {

    let numSlides = slidesData.length;

    const [curIndex, setCurIndex] = useState(0);

    const slideElements = slidesData.map((slide) => {
        return(
            <Slide
            key={slide.key}
            title={slide.title}
            description={slide.description}
            image={slide.image}
            link={slide.link}
            active={slide.key === curIndex}
            darkMode={darkMode}
            />
        );
    })

    let markerData = [];

    for(let i = 0; i < numSlides; i++) {
        markerData.push({key:i, active:false})
    }

    const markerElements = markerData.map((marker) => {
        return(
            <div className={`${marker.key===curIndex ? styles.activeMarker: ""} ${styles.marker}`}></div>
        );
    })

    function nextSlide() {
        setCurIndex(cur => (cur + 1) % numSlides)
    }

    function prevSlide() {
        setCurIndex(cur => (cur - 1 + numSlides) % numSlides)
    }


    return(
        <div className={`${styles.carouselContainer} ${styles.fadeIn}`}>
            <div className={`${styles.sideArrows} ${styles.fadeIn}`}>
                <span id={`${styles.upArrow}`} 
                className={`${styles.arrow} hoverGrow ${styles.fadeIn}`}
                onClick={prevSlide}>
                    <FaCircleArrowUp/>
                </span>
                <span id={`${styles.downArrow}`} 
                className={`${styles.arrow} hoverGrow ${styles.fadeIn}`}
                onClick={nextSlide}>
                    <FaCircleArrowDown/>
                </span>
            </div>
            <div className={`${styles.slideViewContainer}`}>
                <span id={`${styles.leftArrow}`} 
                className={`${styles.arrow} hoverGrow`}
                onClick={prevSlide}>
                    <FaCircleArrowLeft/>
                </span>
                <div className={`${styles.slideFrame}`}>
                    {slideElements}
                </div>
                <span id={`${styles.rightArrow}`} 
                className={`${styles.arrow} hoverGrow`}
                onClick={nextSlide}>
                    <FaCircleArrowRight/>
                </span>
            </div>
            <div className={`${styles.markerContainer}`}>
                {markerElements}
            </div>
        </div>
    );
}