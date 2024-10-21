import { useContext } from "react";
import { ScanlinesData } from "@/context/scanlinesContext";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import styles from "@/styles/Contact.module.css";
import NavBarTop from "@/components/navBarTop";
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
            <main id = "mainDiv" className={`main ${aldrich.className} ${scanlinesOn && 'scanlines'} 
            ${darkModeOn && "darkGradientBackground"} ${darkModeOn && "whiteText"}`}>
                <NavBarTop scanlineFunc={toggleScanlines} darkModeFunc={toggleDarkMode} darkMode={darkModeOn}/>
                <div className={`${styles.contactDiv}`}>
                    <div id={`${styles.contactTitle}`} className={`title ${styles.slideRight}
                    ${darkModeOn ? "greyBackground":"blackBackground"} ${darkModeOn && "blackText"}`}>
                        <h2>Get in Touch With Me</h2>
                    </div>
                    <div className={`${styles.contactEntry} ${styles.slideUp}`}
                    style={{animationDelay:"0.7s"}}>
                        <IoIosMail className={`${styles.contactIcon}`}/>
                        <h2>Email: Nateglemke@gmail.com</h2>
                    </div>
                    <div className={`${styles.slideUp}`} style={{animationDelay:"1.2s"}}>
                        <a href="https://www.linkedin.com/in/natelemke/">
                            <div className={`${styles.contactEntry} ${styles.contactHover}`}>
                                <FaLinkedin className={`${styles.contactIcon} `}/>
                                <h2>www.linkedin.com/in/natelemke</h2>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.slideUp}`} style={{animationDelay:"1.7s"}}>
                        <a href="https://github.com/NateLemke">
                            <div className={`${styles.contactEntry} ${styles.contactHover}`}>
                                <FaGithub  className={`${styles.contactIcon}`}/>
                                <h2>github.com/NateLemke</h2>
                            </div>
                        </a>
                    </div>
                    <div className={`${styles.slideUp}`} style={{animationDelay:"2.2s"}}>
                        <a href="/Resume.pdf">
                            <div className={`${styles.contactEntry} ${styles.contactHover} `}>
                                <IoDocumentText  className={`${styles.contactIcon}`}/>
                                <h2>My Resume</h2>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </main>
        </>
    );
}