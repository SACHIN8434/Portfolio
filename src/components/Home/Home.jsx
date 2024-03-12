import React from 'react'
import profilePhoto from "../../assets/profilePhoto.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import styles from "./Home.module.css"

const Home = () => {
  return (

    <section className={styles.homeContainer}>

        <div className={styles.textContainer}>
            <h1 className={styles.homeHeading}> Hi, I'm Sachin</h1>
            <p className={styles.homeParagraph}>
            I'm a 
            Fullstack Web developer 
            </p>
            <a href="mailto:sachin843413@gmail.com" className={styles.homeBtn}>Contact Me</a>
            <div className={styles.icons}>
                <a href="https://github.com/SACHIN8434?tab=repositories" target="_blank"><FaGithub size={30}/></a>
                <a href="https://www.linkedin.com/in/sachin-kumar-570347246/" target="_blank"><FaLinkedin  size={30}/></a>     
                </div>
        </div>
        <div>

        <div >
        <img src={profilePhoto} className={styles.homeImg}/>
        </div>

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
        </div>

    </section>
  )
}

export default Home
