import { useContext} from "react";
import { ScanlinesData } from "@/context/scanlinesContext";
import NavBarTop from "@/components/navBarTop";
import EducationEntry from "@/components/educationEntry";
import SkillTag from "@/components/skillTag";
import styles from "@/styles/Skills.module.css";
import {skillsData} from "@/data/skills.js"
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

    const skillsElements = skillsData.map((skill, index) => 
        <SkillTag key={skill.key} text={skill.text} logo={skill.logo} color={skill.color} 
        offset = {0.1*index} darkMode={darkModeOn}/>)

    return(
        <>
            <main id = "mainDiv" className={`main ${scanlinesOn && 'scanlines'} ${aldrich.className}
            ${darkModeOn && "darkGradientBackground"} ${darkModeOn && "whiteText"}`}>
                <NavBarTop scanlineFunc={toggleScanlines} darkModeFunc={toggleDarkMode} darkMode={darkModeOn}/>
                <div className={`${styles.skillsContainer}`}>
                    <div className={`${styles.educationDiv}`}>
                        <div className={`title ${styles.slideRight}
                        ${darkModeOn ? "greyBackground":"blackBackground"} ${darkModeOn && "blackText"}`}>
                            <h2>Education</h2>
                        </div>
                        <EducationEntry 
                        topText={"Computer Systems Technology Diploma"}
                        midText={"Technical Programming Option"}
                        bottomText={"Graduated with Distinction in December 2019"}
                        />
                        <EducationEntry 
                        topText={"Computer Systems Bachelor of Technology Degree"}
                        midText={"Network Security Applications Development Option"}
                        bottomText={"Graduated with Distinction in May 2024"}
                        />
                    </div>
                    <div className={`${styles.skillsDiv}`}>
                        <div id={`${styles.rightTitle}`} className={`title ${styles.slideLeft}
                        ${darkModeOn ? "greyBackground":"blackBackground"} ${darkModeOn && "blackText"}`}>
                            <h2>Skills</h2>
                        </div>
                        <div className={`${styles.tagContainer}`}>
                            {skillsElements}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}