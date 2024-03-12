import React from 'react'
import aboutImage from "../../assets/homePhoto.jpg";

import styles from "./About.module.css"
import { PiStudentFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";



const About = () => {
  return (
    <div className={styles.aboutContainer} id="About">
      
        <img src={aboutImage} className={styles.aboutImg} alt="about Image is here" />
      

      <div className={styles.aboutText}>
        <h2>About</h2>
        <ul className={styles.aboutLists}>
          <li className={styles.list}>
            <div className={styles.aboutHeadings}>
            <PiStudentFill size={20}/>

              <h3>Education</h3>
            </div>
            <p>Pursing B-Tech in Computer Science in A.K.T.U university</p>
          </li>
          <li className={styles.list}>
            <div className={styles.aboutHeadings}>
            <PiStudentFill size={20}/>

              <h3>Software
              Engineer</h3>
            </div>
            <p>Devloping software applications</p>
          </li>
          <li className={styles.list}>
            <div className={styles.aboutHeadings}>
            <CgWebsite size={20}/>

              <h3>Full-Stack Developer</h3>
            </div>
            <p>Builds front-end and back-end of a website using MERN</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default About