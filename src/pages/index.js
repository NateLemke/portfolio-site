import Head from "next/head";
import React from "react";
import { ScanlinesData } from "@/context/scanlinesContext";
import { useContext } from "react";
import NavElement from "@/components/navElement";
import OptionsBar from "@/components/optionsBar";
import { IoIosContact } from "react-icons/io";
import { BiMedal } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import styles from "@/styles/Home.module.css";
import { Aldrich } from "next/font/google";

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  const {scanlinesOn, setScanlinesOn, darkModeOn, setDarkModeOn} = useContext(ScanlinesData);

  function toggleScanlines() {
    setScanlinesOn((cur) => !cur);
  }

  function toggleDarkMode() {
    setDarkModeOn((cur) => !cur);
  }

  return (
    <>
      <Head>
        <title>Nate Lemke</title>
        <meta name="description" content="Portfolio site for Nate Lemke" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id = "mainDiv" className={`main ${scanlinesOn && 'scanlines'}
      ${darkModeOn && "darkGradientBackground"} ${aldrich.className}`}>
      <div className={`${styles.topBar}`}>
        <OptionsBar className={`${styles.modeToggle}`} darkMode = {darkModeOn}
        scanlineFunc = {toggleScanlines} darkModeFunc = {toggleDarkMode}/>
      </div>
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.introContainerOuter}`}>
          <div className={`${styles.introContainerInner} ${styles.fadeIn} ${darkModeOn && "whiteText"}`}>
            <h2 className={`${styles.introText}`}>Hi, I'm</h2>
            <h1 className={`${styles.name}`}><span className={`${styles.firstLetter}`}>N</span>ate <span className={`${styles.firstLetter}`}>L</span>emke</h1>
            <h2 className={`${styles.introText}`}>
              Web Developer in
              <span className={`${styles.location}`}> Vancouver, BC</span>
            </h2>
          </div>
        </div>
        <nav className={`${styles.navContainer}`}>
          <NavElement text="About" link="/about"
          icon={<IoIosContact/>} offset={0} darkMode = {darkModeOn}/>
          <NavElement text="Skills" link="/skills"
          icon={<BiMedal/>} offset={0.3} darkMode = {darkModeOn}/>
          <NavElement text="Projects" link="/projects"
          icon={<FaCode/>} offset={0.6} darkMode = {darkModeOn}/>
          <NavElement text="Contact" link="/contact" 
          icon={<MdMailOutline/>} offset={0.9} darkMode = {darkModeOn}/>
        </nav>
      </div>

      </main>
    </>
  );
}
