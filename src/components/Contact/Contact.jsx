import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css"
import { BsFillSendFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";





const Contact = () => {

    return (
        <div className={styles.contactContainer} id="Contact">
            <div className={styles.contactTexts}>
            
                <h2>Contact Me</h2>
                <p><span><BsFillSendFill /></span>sachin843413@gmail.com</p>
                

                <p> <span><FaPhoneAlt /></span>8434130004</p>
                <div className={styles.icons}>
                <a href="#github"><FaGithub size={20}/></a>
                <a href="#linkedDin"><FaLinkedin  size={20}/></a>
                
                </div>
            </div>

            <form className={styles.contactForm} >
            <input type="text" placeholder="Your Name" className={styles.contactInput}/>
            <input type="email" placeholder="Your Email"/>

            <textarea placeholder="Your Message" className={styles.contactTextArea}></textarea>
            <button>Submit</button>

            </form>
        </div>
    )
}

export default Contact