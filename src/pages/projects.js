import { useContext } from "react";
import { ScanlinesData } from "@/context/scanlinesContext";
import NavBarTop from "@/components/navBarTop";
import Carousel from "@/components/carousel";
import styles from "@/styles/Projects.module.css";
import { Aldrich } from "next/font/google";

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
})

export default function About() {
    const {scanlinesOn, setScanlinesOn, darkModeOn, setDarkModeOn} = useContext(ScanlinesData);

    function toggleScanlines() {
      setScanlinesOn((cur) => !cur);
    }
  
    function toggleDarkMode() {
      setDarkModeOn((cur) => !cur);
    }

    return(
        <>
            <main id = "mainDiv" className={`main ${scanlinesOn && 'scanlines'} ${aldrich.className}
            ${darkModeOn && "darkGradientBackground"} ${darkModeOn && "whiteText"}`}>
                <NavBarTop scanlineFunc={toggleScanlines} darkModeFunc={toggleDarkMode} darkMode={darkModeOn}/>
                <div className={`${styles.projectsContainer}`}>
                    <div className={`title ${styles.slideFromRight}
                    ${darkModeOn ? "greyBackground":"blackBackground"} ${darkModeOn && "blackText"}`}>
                        <h2>My Projects</h2>
                    </div>
                    <Carousel className={`${styles.fadeIn}`} darkMode={darkModeOn}/>
                </div>
            </main>
        </>
    );
}