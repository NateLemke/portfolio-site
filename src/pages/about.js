import NavBarTop from "@/components/navBarTop";
import { useContext } from "react";
import { ScanlinesData } from "@/context/scanlinesContext";
import { GoPersonFill } from "react-icons/go";
import styles from "@/styles/About.module.css";
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
                <NavBarTop scanlineFunc = {toggleScanlines} darkModeFunc={toggleDarkMode} darkMode={darkModeOn}/>
                <div className={`${styles.aboutContainer}`}>
                    <div className={`${styles.bioContainer}`}>
                        <div className={`title ${styles.slideFromRight}
                        ${darkModeOn ? "greyBackground":"blackBackground"} ${darkModeOn && "blackText"}`}>
                            <h2>About Me</h2>
                        </div>
                        <div className={`${styles.bioText} ${styles.fadeIn}`}>
                            <p>
                                I am a recent graduate of the Computer Systems Bachelor of Technology degree program at BCIT, which I completed with Distinction. 
                                In this program I completed both the Technical Programming and Network Security Applications Development options. 
                                During my time at BCIT I gained lots of experience working on various team-based and solo programming projects. 
                                I am passionate about coding and enjoy learning new langauages and techniques.
                            </p>
                            <br/>
                            <p>
                                I am currently searching for new job opportunities. If you are interested in working together, my contact information is posted in the Contact section.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.photoContainer}`}>
                        <div className={`${styles.photoDiv}`}>
                            <div className={`${styles.pictureFrame} ${styles.pf3} ${styles.slide20}
                            ${darkModeOn ? "greyBackground":"blackBackground"}`}/>
                            <div className={`${styles.pictureFrame} ${styles.pf2} ${styles.slide10}`}/>
                            <div className={`${styles.pictureFrame} ${styles.pf1} ${styles.slideFromRight}`}/>
                            <span className={`${styles.headshot}`}><GoPersonFill className={`${styles.fadeInDelayed}`}/></span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}